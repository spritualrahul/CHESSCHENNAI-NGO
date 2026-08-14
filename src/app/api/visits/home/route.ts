import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getHomePageUniqueVisitors, recordUniqueHomeVisitor } from "@/lib/visits/database";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VISITOR_COOKIE_NAME = "ches_visitor_id";
const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function json(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function GET() {
  try {
    const count = await getHomePageUniqueVisitors();

    return json({ count });
  } catch (error) {
    const safeError = error as { code?: string; name?: string };

    console.error("[visits] Read failed", {
      name: safeError.name ?? "UnknownError",
      code: safeError.code ?? "unknown",
      databaseConfigured: Boolean(process.env.DATABASE_URL),
    });

    return json({ count: null, error: "Visit count is temporarily unavailable." }, 200);
  }
}

export async function POST() {
  try {
    const cookieStore = await cookies();
    const existingVisitorId = cookieStore.get(VISITOR_COOKIE_NAME)?.value;
    const visitorId = existingVisitorId && UUID_PATTERN.test(existingVisitorId) ? existingVisitorId : randomUUID();
    const count = await recordUniqueHomeVisitor(visitorId);
    const response = json({ count });

    if (visitorId !== existingVisitorId) {
      response.cookies.set({
        name: VISITOR_COOKIE_NAME,
        value: visitorId,
        httpOnly: true,
        maxAge: VISITOR_COOKIE_MAX_AGE,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }

    return response;
  } catch (error) {
    const safeError = error as { code?: string; name?: string };

    console.error("[visits] Increment failed", {
      name: safeError.name ?? "UnknownError",
      code: safeError.code ?? "unknown",
      databaseConfigured: Boolean(process.env.DATABASE_URL),
    });

    return json({ count: null, error: "Visit count is temporarily unavailable." }, 200);
  }
}
