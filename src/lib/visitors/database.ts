import "server-only";

import { neon } from "@neondatabase/serverless";

export type HomeVisitorCount = {
  totalVisitors: number;
};

function database() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(connectionString);
}

export async function recordHomeVisitor(visitorId: string): Promise<HomeVisitorCount> {
  const sql = database();

  await sql`
    INSERT INTO site_visitors (visitor_id, page_path)
    VALUES (${visitorId}::uuid, '/')
    ON CONFLICT (visitor_id, page_path)
    DO UPDATE SET
      visit_count = site_visitors.visit_count + 1,
      last_seen_at = NOW()
  `;

  const rows = await sql`
    SELECT COUNT(*)::int AS total_visitors
    FROM site_visitors
    WHERE page_path = '/'
  `;

  return { totalVisitors: Number(rows[0]?.total_visitors ?? 0) };
}

export async function getHomeVisitorCount(): Promise<HomeVisitorCount> {
  const sql = database();
  const rows = await sql`
    SELECT COUNT(*)::int AS total_visitors
    FROM site_visitors
    WHERE page_path = '/'
  `;

  return { totalVisitors: Number(rows[0]?.total_visitors ?? 0) };
}
