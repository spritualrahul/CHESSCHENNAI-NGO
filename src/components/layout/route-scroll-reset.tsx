"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname]);

  return null;
}
