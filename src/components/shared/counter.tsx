"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

import { duration, ease } from "@/lib/motion-tokens";

/* ─────────────────────────────────────────────
 * Counter
 *
 * Animated count-up component. Counts once when
 * the element enters the viewport. Respects
 * prefers-reduced-motion.
 * ───────────────────────────────────────────── */

type CounterProps = {
  /** Target number to count to */
  value: number;
  /** Text to show after the number (e.g. "+", "M+") */
  suffix?: string;
  /** Text to show before the number */
  prefix?: string;
  /** Duration of the count animation in seconds */
  duration?: number;
  /** Additional class names */
  className?: string;
  /** Format number with locale separators */
  formatLocale?: string;
};

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration: countDuration = 2,
  className,
  formatLocale = "en-IN",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const rounded = useTransform(motionValue, (latest) => {
    const num = Math.round(latest);
    if (formatLocale) {
      return `${prefix}${new Intl.NumberFormat(formatLocale).format(num)}${suffix}`;
    }
    return `${prefix}${num}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration: countDuration,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [isInView, value, countDuration, motionValue, prefersReducedMotion]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
