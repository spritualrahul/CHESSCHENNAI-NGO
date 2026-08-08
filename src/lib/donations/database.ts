import "server-only";

import { neon } from "@neondatabase/serverless";
import { randomBytes } from "node:crypto";

import type { DonationInput, DonationStatus } from "@/lib/donations/schema";

export type DonationListItem = {
  donationId: string;
  name: string;
  email: string;
  phone: string;
  amount: string;
  paymentStatus: DonationStatus;
  createdAt: string;
};

export type DonationDetail = DonationListItem & {
  pan: string | null;
  address: string;
  updatedAt: string;
};

export type DonationDashboardData = {
  totals: {
    totalDonors: number;
    totalAmount: string;
    pendingDonations: number;
    paidDonations: number;
  };
  donations: DonationListItem[];
};

function database() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(connectionString);
}

function isTransientDatabaseError(error: unknown) {
  const message = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();
  const code = typeof error === "object" && error && "code" in error ? String(error.code).toLowerCase() : "";

  return (
    message.includes("fetch failed") ||
    message.includes("error connecting to database") ||
    message.includes("network") ||
    code === "fetcherror" ||
    code === "etimedout" ||
    code === "econnreset"
  );
}

async function runDatabaseRead<T>(operation: () => Promise<T>) {
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (!isTransientDatabaseError(error) || attempt === 2) {
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
    }
  }

  throw lastError;
}

function createDonationId() {
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .replaceAll("-", "");
  const suffix = randomBytes(3).toString("hex").toUpperCase();

  return `DON-${date}-${suffix}`;
}

export async function insertDonation(input: DonationInput, idempotencyKey: string) {
  const sql = database();

  async function findCommittedDonation() {
    const existingRows = await sql`
      SELECT donation_id
      FROM donations
      WHERE idempotency_key = ${idempotencyKey}::uuid
      LIMIT 1
    `;

    return existingRows[0] ? { donationId: String(existingRows[0].donation_id) } : null;
  }

  // Also recover an exact, very recent form submission when the browser was
  // refreshed and therefore no longer has its original idempotency key.
  try {
    const recentRows = await sql`
      SELECT donation_id
      FROM donations
      WHERE name = ${input.name}
        AND pan IS NOT DISTINCT FROM ${input.pan || null}
        AND email = ${input.email}
        AND phone = ${input.phone}
        AND address = ${input.address}
        AND amount = ${input.amount}
        AND created_at >= NOW() - INTERVAL '15 minutes'
      ORDER BY created_at DESC
      LIMIT 1
    `;

    if (recentRows[0]) {
      return { donationId: String(recentRows[0].donation_id) };
    }
  } catch {
    // The insert remains authoritative if this best-effort duplicate check fails.
  }

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const donationId = createDonationId();

    try {
      const rows = await sql`
        INSERT INTO donations (
          donation_id,
          idempotency_key,
          name,
          pan,
          email,
          phone,
          address,
          amount,
          payment_status
        ) VALUES (
          ${donationId},
          ${idempotencyKey}::uuid,
          ${input.name},
          ${input.pan || null},
          ${input.email},
          ${input.phone},
          ${input.address},
          ${input.amount},
          'PENDING'
        )
        ON CONFLICT (idempotency_key)
        DO UPDATE SET idempotency_key = EXCLUDED.idempotency_key
        RETURNING donation_id
      `;

      return { donationId: String(rows[0].donation_id) };
    } catch (error) {
      const databaseError = error as { code?: string; constraint?: string };
      const isDonationIdCollision =
        databaseError.code === "23505" && databaseError.constraint === "donations_donation_id_key";

      // A serverless database request can commit successfully even if its HTTP
      // response is interrupted. Recover the committed row before reporting a
      // failure so the donor can continue to payment on the same retry key.
      try {
        const committedDonation = await findCommittedDonation();

        if (committedDonation) {
          return committedDonation;
        }
      } catch {
        // Preserve the original database error when the recovery query also fails.
      }

      if (!isDonationIdCollision || attempt === 2) {
        throw error;
      }
    }
  }

  throw new Error("Unable to generate a donation reference.");
}

export async function getDonationDashboardData(): Promise<DonationDashboardData> {
  const sql = database();

  const summaryRows = await runDatabaseRead(() =>
    sql`
      SELECT
        COUNT(*)::int AS total_donors,
        COALESCE(SUM(amount), 0)::text AS total_amount,
        COUNT(*) FILTER (WHERE payment_status = 'PENDING')::int AS pending_donations,
        COUNT(*) FILTER (WHERE payment_status = 'PAID')::int AS paid_donations
      FROM donations
    `,
  );
  const donationRows = await runDatabaseRead(() =>
    sql`
      SELECT donation_id, name, email, phone, amount::text, payment_status, created_at
      FROM donations
      ORDER BY created_at DESC
      LIMIT 500
    `,
  );

  const summary = summaryRows[0];

  return {
    totals: {
      totalDonors: Number(summary.total_donors),
      totalAmount: String(summary.total_amount),
      pendingDonations: Number(summary.pending_donations),
      paidDonations: Number(summary.paid_donations),
    },
    donations: donationRows.map((row) => ({
      donationId: String(row.donation_id),
      name: String(row.name),
      email: String(row.email),
      phone: String(row.phone),
      amount: String(row.amount),
      paymentStatus: row.payment_status as DonationStatus,
      createdAt: new Date(String(row.created_at)).toISOString(),
    })),
  };
}

export async function getDonationByReference(donationId: string): Promise<DonationDetail | null> {
  const sql = database();
  const rows = await sql`
    SELECT
      donation_id,
      name,
      pan,
      email,
      phone,
      address,
      amount::text,
      payment_status,
      created_at,
      updated_at
    FROM donations
    WHERE donation_id = ${donationId}
    LIMIT 1
  `;

  const row = rows[0];

  if (!row) {
    return null;
  }

  return {
    donationId: String(row.donation_id),
    name: String(row.name),
    pan: row.pan ? String(row.pan) : null,
    email: String(row.email),
    phone: String(row.phone),
    address: String(row.address),
    amount: String(row.amount),
    paymentStatus: row.payment_status as DonationStatus,
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

export async function updateDonationPaymentStatus(donationId: string, paymentStatus: DonationStatus) {
  const sql = database();
  const rows = await sql`
    UPDATE donations
    SET payment_status = ${paymentStatus}
    WHERE donation_id = ${donationId}
    RETURNING donation_id
  `;

  return Boolean(rows[0]);
}
