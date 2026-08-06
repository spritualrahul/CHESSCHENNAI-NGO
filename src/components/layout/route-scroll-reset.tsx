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

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlBehavior = html.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    const scrollToTop = () => {
      html.scrollTop = 0;
      body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    const frames: number[] = [];
    const timeouts: number[] = [];

    scrollToTop();
    frames.push(window.requestAnimationFrame(scrollToTop));
    [40, 120, 260, 520, 900].forEach((delay) => {
      timeouts.push(window.setTimeout(scrollToTop, delay));
    });

    const restoreTimeout = window.setTimeout(() => {
      scrollToTop();
      html.style.scrollBehavior = previousHtmlBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    }, 960);

    return () => {
      frames.forEach((frame) => window.cancelAnimationFrame(frame));
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      window.clearTimeout(restoreTimeout);
      html.style.scrollBehavior = previousHtmlBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    };
  }, [pathname]);

  return null;
}
