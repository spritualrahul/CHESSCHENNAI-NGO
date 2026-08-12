"use client";

import { usePathname } from "next/navigation";
import { FooterContent } from "./footer";

/**
 * Thin client wrapper that provides the current pathname to the footer.
 * This lets the actual footer markup stay as a Server Component.
 */
export function FooterShell() {
  const pathname = usePathname();
  return <FooterContent pathname={pathname} />;
}
