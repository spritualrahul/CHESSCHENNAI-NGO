"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Heart, ShieldCheck, UsersRound, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { homeHeroSlides } from "@/data/home";

const heroStats = [
  { icon: Heart, value: "30+", label: "Years of Service" },
  { icon: UsersRound, value: "1000+", label: "Children Supported" },
  { icon: GraduationCap, value: "Health, Education &", label: "Child Protection" },
  { icon: ShieldCheck, value: "Since 1994", label: "Trusted NGO" },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({ opacity: 0.9, x: `${direction * 100}%` }),
  center: { opacity: 1, x: "0%" },
  exit: (direction: number) => ({ opacity: 0.9, x: `${direction * -100}%` }),
};

const reducedSlideVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const slide = homeHeroSlides[active];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((index) => (index + 1) % homeHeroSlides.length);
    }, 7200);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="relative bg-white pt-20" aria-label="CHES introduction">
      <div className="relative min-h-[560px] overflow-hidden bg-[var(--ches-blue)] text-white md:min-h-[590px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            custom={direction}
            variants={prefersReducedMotion ? reducedSlideVariants : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              animate={prefersReducedMotion ? undefined : { scale: 1.045 }}
              transition={{ duration: 7.5, ease: "linear" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={active === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.position }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,31,.91),rgba(7,24,31,.72)_38%,rgba(7,24,31,.10)_78%),linear-gradient(0deg,rgba(7,24,31,.55),transparent_55%)]" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-5 pb-20 pt-14 md:min-h-[590px]">
          <motion.div
            key={`${slide.src}-copy`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[610px]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/78">{slide.eyebrow}</p>
            <h1 className="mt-5 max-w-[560px] font-heading text-5xl font-medium leading-[0.98] text-white sm:text-6xl md:text-[4.65rem]">
              Every Child Deserves <span className="text-[#e0aa42]">Love, Protection and a Future</span>
            </h1>
            <p className="mt-6 max-w-[460px] text-base leading-7 text-white/88 md:text-lg">
              {slide.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donate" className="primary-cta h-12 px-7">
                Donate Now <Heart className="size-4 fill-current" />
              </Link>
              <Link href="#welcome" className="secondary-cta h-12 px-7">
                Learn Our Story <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-5 flex gap-2 md:left-[max(1.25rem,calc((100vw-80rem)/2))]">
          {homeHeroSlides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={active === index}
              onClick={() => {
                if (index === active) return;
                setDirection(index > active ? 1 : -1);
                setActive(index);
              }}
              className="h-1.5 w-6 rounded-full bg-white/45 transition-all aria-current:w-12 aria-current:bg-[#e0aa42]"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-10 grid max-w-6xl grid-cols-2 overflow-hidden rounded-xl border border-[#e3e9e7] bg-white shadow-[0_8px_28px_rgb(11_78_109/0.12)] md:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex min-h-[98px] items-center gap-3 border-[#e3e9e7] px-4 py-5 md:px-6 md:py-6 md:first:border-l-0 md:[&:not(:first-child)]:border-l">
            <stat.icon className="size-8 shrink-0 text-[var(--ches-blue)]" strokeWidth={1.5} />
            <div>
              <p className="font-heading text-xl font-semibold leading-tight text-[var(--ches-blue)] md:text-2xl">{stat.value}</p>
              <p className="mt-1 text-[0.69rem] leading-4 text-[var(--ches-ink)]/72 md:text-xs">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
