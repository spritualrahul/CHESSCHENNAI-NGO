"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import {
  duration,
  ease,
  stagger as staggerTokens,
  variants,
  viewportMargin,
} from "@/lib/motion-tokens";

/* ─────────────────────────────────────────────
 * ScrollReveal
 *
 * Unified scroll-triggered reveal component.
 * Replaces the various FadeIn/AnimatedSection
 * wrappers with a single configurable component
 * powered by Framer Motion's `whileInView`.
 * ───────────────────────────────────────────── */

type RevealVariant =
  | "fadeUp"
  | "fadeUpSmall"
  | "fadeUpLarge"
  | "fadeLeft"
  | "fadeRight"
  | "fade"
  | "scaleReveal";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Which reveal animation to use */
  variant?: RevealVariant;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts */
  delay?: number;
  /** Render as a different element */
  as?: "div" | "section" | "article" | "footer" | "header" | "span";
  /** IntersectionObserver root margin */
  margin?: string;
  /** HTML id attribute */
  id?: string;
  /** Inline styles */
  style?: React.CSSProperties;
};

const variantMap: Record<RevealVariant, Variants> = {
  fadeUp: variants.fadeUp as Variants,
  fadeUpSmall: variants.fadeUpSmall as Variants,
  fadeUpLarge: variants.fadeUpLarge as Variants,
  fadeLeft: variants.fadeLeft as Variants,
  fadeRight: variants.fadeRight as Variants,
  fade: variants.fade as Variants,
  scaleReveal: variants.scaleReveal as Variants,
};

export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  duration: dur = duration.medium,
  delay = 0,
  as = "div",
  margin = viewportMargin.default,
  id,
  style,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion.create(as);
  const v = variantMap[variant];

  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={v}
      transition={{ duration: dur, ease: ease.out, delay }}
    >
      {children}
    </Component>
  );
}

/* ─────────────────────────────────────────────
 * StaggerContainer + StaggerItem
 *
 * Orchestrates staggered child animations.
 * Wrap children in StaggerContainer, and each
 * child in StaggerItem.
 * ───────────────────────────────────────────── */

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol" | "footer";
  /** Stagger delay between children */
  stagger?: number;
  /** Delay before first child starts */
  delayChildren?: number;
  /** IntersectionObserver root margin */
  margin?: string;
  id?: string;
  style?: React.CSSProperties;
};

export function StaggerContainer({
  children,
  className,
  as = "div",
  stagger = staggerTokens.medium,
  delayChildren = 0.1,
  margin = viewportMargin.default,
  id,
  style,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion.create(as);

  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "span";
  variant?: RevealVariant;
  style?: React.CSSProperties;
};

export function StaggerItem({
  children,
  className,
  as = "div",
  variant = "fadeUpSmall",
  style,
}: StaggerItemProps) {
  const Component = motion.create(as);
  const v = variantMap[variant];

  return (
    <Component
      className={className}
      style={style}
      variants={v}
      transition={{ duration: duration.medium, ease: ease.out }}
    >
      {children}
    </Component>
  );
}

/* ─────────────────────────────────────────────
 * RevealSection
 *
 * Drop-in replacement for AnimatedSection / FadeInSection.
 * A section shell with scroll-triggered reveal.
 * ───────────────────────────────────────────── */

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: RevealVariant;
  delay?: number;
};

export function RevealSection({
  children,
  className = "",
  id,
  variant = "fadeUp",
  delay = 0,
}: RevealSectionProps) {
  return (
    <ScrollReveal
      as="section"
      variant={variant}
      className={`section-shell ${className}`}
      margin={viewportMargin.early}
      delay={delay}
    >
      {id ? <div id={id} className="absolute -mt-24" /> : null}
      {children}
    </ScrollReveal>
  );
}
