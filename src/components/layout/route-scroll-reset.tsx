"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (window.location.hash) return;

    // Simple immediate scroll — no need for aggressive polling
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
