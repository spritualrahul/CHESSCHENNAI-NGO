"use client";

import { cn } from "@/lib/utils";
import { RevealSection } from "@/components/shared/scroll-reveal";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Backwards-compatible AnimatedSection using the new RevealSection component.
 * Drop-in replacement that now uses Framer Motion whileInView.
 */
export function AnimatedSection({ className, children, id, ...props }: AnimatedSectionProps) {
  return (
    <RevealSection className={className} id={id}>
      {children}
    </RevealSection>
  );
}
