"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { duration, ease, stagger, variants, viewportMargin } from "@/lib/motion-tokens";

/**
 * Staggered motion article — reveals with a delay based on index.
 * Uses Framer Motion whileInView for smooth GPU-accelerated animation.
 */
export function MotionArticle({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin.default }}
      variants={variants.fadeUpSmall}
      transition={{
        duration: duration.fast,
        ease: ease.out,
        delay: Math.min(index * stagger.fast, 0.36),
      }}
    >
      {children}
    </motion.article>
  );
}

/**
 * Lightweight fade-in div using Framer Motion whileInView.
 * Replaces manual IntersectionObserver for heading sections.
 */
export function MotionFadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin.early }}
      variants={variants.fadeUp}
      transition={{ duration: duration.medium, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
}
