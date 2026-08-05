"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { impactStats } from "@/data/site";

export function ImpactCounters() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {impactStats.map((stat) => (
        <CounterCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
      ))}
    </div>
  );
}

function CounterCard({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.div ref={ref} className="rounded-[1.5rem] bg-white p-6 shadow-xl shadow-black/[0.04]">
      <p className="font-heading text-4xl font-extrabold text-[var(--ches-blue)]">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--ches-charcoal)]/54">{label}</p>
    </motion.div>
  );
}
