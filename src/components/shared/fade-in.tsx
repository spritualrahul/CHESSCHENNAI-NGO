"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  /** Delay in ms before animation starts after intersection */
  delay?: number;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
};

/**
 * Lightweight CSS-based fade-in-up animation using IntersectionObserver.
 * ~1 KB vs framer-motion's ~50 KB. Respects prefers-reduced-motion.
 */
export function FadeIn({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  rootMargin = "-12% 0px",
}: FadeInProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const setRef = useCallback((node: HTMLDivElement | HTMLElement | null) => {
    elRef.current = node;
  }, []);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, rootMargin]);

  return (
    <Tag
      ref={setRef as React.Ref<HTMLDivElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(34px)",
        transition: "opacity 0.72s cubic-bezier(0.22, 1, 0.36, 1), transform 0.72s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * Lightweight animated section — drop-in replacement for AnimatedSection
 * that doesn't require framer-motion.
 */
export function FadeInSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <FadeIn as="section" className={`section-shell ${className}`}>
      {id ? <div id={id} /> : null}
      {children}
    </FadeIn>
  );
}
