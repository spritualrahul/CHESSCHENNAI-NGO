import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import { getHomeVisitorCount, recordHomeVisitor } from "@/lib/visitors/database";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const visitorSchema = z.object({
  visitorId: z.uuid(),
});

function json(body: object, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === request.nextUrl.host;
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const count = await getHomeVisitorCount();

    return json({ success: true, ...count }, 200);
  } catch (error) {
    const safeError = error as { code?: string; name?: string };

    console.error("[visitors] Count read failed", {
      name: safeError.name ?? "UnknownError",
      code: safeError.code ?? "unknown",
      databaseConfigured: Boolean(process.env.DATABASE_URL),
    });

    return json({ error: "Visitor count is temporarily unavailable." }, 500);
  }
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return json({ error: "This request could not be verified." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > 2_048) {
    return json({ error: "The submitted visitor payload is too large." }, 413);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json({ error: "The visitor payload could not be read." }, 400);
  }

  const parsed = visitorSchema.safeParse(body);

  if (!parsed.success) {
    return json({ error: "The visitor id is invalid." }, 422);
  }

  try {
    const count = await recordHomeVisitor(parsed.data.visitorId);

    return json({ success: true, ...count }, 200);
  } catch (error) {
    const safeError = error as { code?: string; name?: string };

    console.error("[visitors] Visitor persistence failed", {
      name: safeError.name ?? "UnknownError",
      code: safeError.code ?? "unknown",
      databaseConfigured: Boolean(process.env.DATABASE_URL),
    });

    return json({ error: "Visitor count is temporarily unavailable." }, 500);
  }
}
