"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/fade-in";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Backwards-compatible AnimatedSection using the lightweight FadeIn component.
 * Drop-in replacement for the old framer-motion version.
 */
export function AnimatedSection({ className, children, id, ...props }: AnimatedSectionProps) {
  return (
    <FadeIn as="section" className={cn("section-shell", className)}>
      {id ? <span id={id} className="absolute -mt-24" /> : null}
      {children}
    </FadeIn>
  );
}
