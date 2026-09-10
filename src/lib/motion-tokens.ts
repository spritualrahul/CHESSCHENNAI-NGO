/**
 * Motion Design Tokens
 *
 * Centralized motion primitives for the CHES premium animation system.
 * Import these tokens in every animation component for consistency.
 */

/* ── Durations (seconds) ── */
export const duration = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.9,
  hero: 1.2,
  /** Extra-long for cinematic hero sequences */
  cinematic: 1.5,
} as const;

/* ── Cubic-bezier easings (Framer Motion format) ── */
export const ease = {
  /** Smooth deceleration — primary ease for reveals */
  out: [0.22, 1, 0.36, 1] as const,
  /** Very smooth — for hero/headline entrances */
  smooth: [0.16, 1, 0.3, 1] as const,
  /** Punchy emphasis — for slide transitions */
  emphasis: [0.76, 0, 0.24, 1] as const,
  /** Gentle spring-like deceleration */
  gentle: [0.25, 0.46, 0.45, 0.94] as const,
} as const;

/* ── Stagger delays (seconds) ── */
export const stagger = {
  fast: 0.06,
  medium: 0.1,
  slow: 0.15,
} as const;

/* ── Translate distances (px) ── */
export const distance = {
  /** Subtle — for small elements, cards */
  sm: 16,
  /** Default — for sections, headings */
  md: 30,
  /** Large — for hero content */
  lg: 44,
} as const;

/* ── Viewport trigger margins for IntersectionObserver / whileInView ── */
export const viewportMargin = {
  /** Trigger when element is 10% into viewport */
  default: "-10% 0px",
  /** Earlier trigger — for large sections */
  early: "-5% 0px",
  /** Later trigger — for emphasis items */
  late: "-15% 0px",
} as const;

/* ── Reusable Framer Motion variant presets ── */
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: distance.md },
    visible: { opacity: 1, y: 0 },
  },
  fadeUpSmall: {
    hidden: { opacity: 0, y: distance.sm },
    visible: { opacity: 1, y: 0 },
  },
  fadeUpLarge: {
    hidden: { opacity: 0, y: distance.lg },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -distance.md },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: distance.md },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleReveal: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  /** Container variant — orchestrates staggered children */
  staggerContainer: (staggerDelay = stagger.medium) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }),
} as const;

/* ── Default transition presets ── */
export const transition = {
  default: { duration: duration.medium, ease: ease.out },
  fast: { duration: duration.fast, ease: ease.out },
  slow: { duration: duration.slow, ease: ease.smooth },
  hero: { duration: duration.hero, ease: ease.smooth },
} as const;
