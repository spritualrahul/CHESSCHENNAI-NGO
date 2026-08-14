import "server-only";

import { neon } from "@neondatabase/serverless";

const HOME_PAGE_PATH = "/";

function database() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(connectionString);
}

export async function recordUniqueHomeVisitor(visitorId: string) {
  const sql = database();
  await sql`
    INSERT INTO page_unique_visitors (visitor_id, page_path)
    VALUES (${visitorId}, ${HOME_PAGE_PATH})
    ON CONFLICT (visitor_id, page_path)
    DO UPDATE SET last_seen_at = NOW()
  `;

  return getHomePageUniqueVisitors(sql);
}

export async function getHomePageUniqueVisitors(existingSql?: ReturnType<typeof database>) {
  const sql = existingSql ?? database();
  const rows = await sql`
    SELECT COUNT(*) AS total_count
    FROM page_unique_visitors
    WHERE page_path = ${HOME_PAGE_PATH}
  `;

  return Number(rows[0]?.total_count ?? 0);
}
