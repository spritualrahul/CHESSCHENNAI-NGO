import { randomUUID } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";

import { insertDonation } from "@/lib/donations/database";
import { createDonationSchema } from "@/lib/donations/schema";

export const runtime = "nodejs";

const IDEMPOTENCY_KEY_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function json(body: object, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin) {
    try {
      if (new URL(origin).host !== request.nextUrl.host) {
        return json({ error: "This request could not be verified." }, 403);
      }
    } catch {
      return json({ error: "This request could not be verified." }, 403);
    }
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > 16_384) {
    return json({ error: "The submitted form is too large." }, 413);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json({ error: "The submitted form could not be read." }, 400);
  }

  const panRequired = process.env.DONATION_REQUIRE_PAN === "true";
  const parsed = createDonationSchema(panRequired).safeParse(body);

  if (!parsed.success) {
    return json(
      {
        error: "Please check the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      422,
    );
  }

  const submittedKey = request.headers.get("idempotency-key")?.trim();
  const idempotencyKey = submittedKey && IDEMPOTENCY_KEY_PATTERN.test(submittedKey) ? submittedKey : randomUUID();

  try {
    const donation = await insertDonation(parsed.data, idempotencyKey);

    return json(
      {
        success: true,
        donationId: donation.donationId,
        paymentStatus: "PENDING",
      },
      201,
    );
  } catch (error) {
    const safeError = error as { code?: string; name?: string };

    console.error("[donations] Persistence failed", {
      name: safeError.name ?? "UnknownError",
      code: safeError.code ?? "unknown",
      databaseConfigured: Boolean(process.env.DATABASE_URL),
    });

    return json(
      { error: "Something went wrong while saving your details. Please try again." },
      500,
    );
  }
}
