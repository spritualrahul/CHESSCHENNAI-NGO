"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { introParagraphs, originStory, principles, storyImages, visionMission } from "@/data/home";
import { duration, ease, stagger, viewportMargin } from "@/lib/motion-tokens";

/* ── Shared sub-components ── */

function ChapterLabel({ number, message }: { number: string; message: string }) {
  return (
    <div className="flex items-center gap-4">
      <motion.span
        className="chapter-number"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: viewportMargin.default }}
        transition={{ duration: duration.slow, ease: ease.smooth }}
      >
        {number}
      </motion.span>
      <motion.p
        className="chapter-message max-w-[330px]"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: viewportMargin.default }}
        transition={{ duration: duration.medium, ease: ease.out, delay: 0.15 }}
      >
        {message}
      </motion.p>
    </div>
  );
}

function ChapterPhoto({ image, className = "" }: { image: { src: string; alt: string }; className?: string }) {
  return (
    <ScrollReveal variant="scaleReveal" duration={duration.slow} className={className}>
      <div className="chapter-photo aspect-[4/3]">
        <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
    </ScrollReveal>
  );
}

/* ── Section 01: Welcome to CHES ── */

export function IntroSectionOne() {
  return (
    <ScrollReveal as="section" variant="fadeUp" className="section-shell bg-[var(--ches-paper)] px-5" margin={viewportMargin.early}>
      <div id="welcome" className="absolute -mt-24" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <ChapterLabel number="01" message="Be a Changemaker" />
          <ScrollReveal variant="fadeUpSmall" delay={0.2}>
            <h2 className="story-title mt-5">Welcome to CHES</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-5 space-y-5" stagger={stagger.medium} delayChildren={0.3}>
            {introParagraphs.map((paragraph) => (
              <StaggerItem key={paragraph} variant="fadeUpSmall">
                <p className="story-copy max-w-[510px]">{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <ChapterPhoto image={storyImages.welcome} />
      </div>
    </ScrollReveal>
  );
}

/* ── Section 02: Story of Origin — SIGNATURE INTERACTION ── */

function OriginStoryCard({
  item,
  index,
}: {
  item: (typeof originStory)[number];
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative border-l-2 border-[#c7dce9] pl-4 transition-colors duration-500 hover:border-[var(--ches-gold)]"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20, x: -8 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: duration.medium,
        ease: ease.out,
        delay: Math.min(index * stagger.slow, 0.6),
      }}
    >
      {/* Progress dot */}
      <span className="absolute -left-[5px] top-0 size-2 rounded-full bg-[#c7dce9] transition-colors duration-500 group-hover:bg-[var(--ches-gold)]" />

      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-blue)]">{item.label}</p>
      <h3 className="mt-1 font-heading text-lg font-semibold text-[var(--ches-ink)]">{item.title}</h3>
      <p className="mt-1 text-sm leading-6 text-[var(--ches-ink)]/80">{item.text}</p>
    </motion.article>
  );
}

export function IntroSectionTwo() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll progress for the thin vertical progress line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <ScrollReveal
      as="section"
      variant="fadeUp"
      className="section-shell bg-[var(--ches-sky)] px-5"
      margin={viewportMargin.early}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start lg:gap-16">
        <ChapterPhoto image={storyImages.origin} className="lg:sticky lg:top-28" />
        <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
          <ChapterLabel number="02" message="Given the Opportunity They Have Excelled" />
          <ScrollReveal variant="fadeUpSmall" delay={0.15}>
            <h2 className="story-title mt-5">Story of Origin</h2>
          </ScrollReveal>
          <div className="relative mt-6 space-y-5">
            {/* Thin scroll-driven progress line */}
            {!prefersReducedMotion ? (
              <motion.div
                className="absolute -left-[1px] top-0 w-[2px] bg-[var(--ches-gold)]"
                style={{ height: progressHeight }}
              />
            ) : null}
            {originStory.map((item, index) => (
              <OriginStoryCard key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Section 03: Vision, Mission & Basic Principles ── */

export function IntroSectionThree() {
  return (
    <ScrollReveal as="section" variant="fadeUp" className="section-shell bg-[var(--ches-leaf)] px-5" margin={viewportMargin.early}>
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
        <div>
          <ChapterLabel number="03" message="Kids Deserve to be Happy in Family and Community" />
          <ScrollReveal variant="fadeUpSmall" delay={0.2}>
            <h2 className="story-title mt-5 max-w-[390px]">CHES Vision, Mission &amp; Basic Principles</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2" stagger={stagger.medium} delayChildren={0.25}>
            {visionMission.map((item) => (
              <StaggerItem key={item.title} as="article" variant="fadeUpSmall">
                <div className="rounded-xl border border-[#d8e3d7] bg-white/80 p-5 shadow-[0_8px_24px_rgb(71_120_91/0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b5cfbc] hover:shadow-[0_14px_32px_rgb(71_120_91/0.10)]">
                  <item.icon className="size-7 text-[var(--ches-green)] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
                  <h3 className="mt-4 text-sm font-bold leading-5 text-[var(--ches-green)]">{item.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-[var(--ches-ink)]/78">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <ChapterPhoto image={storyImages.community} />
      </div>
    </ScrollReveal>
  );
}

/* ── Section 04: 12 Basic Principles ── */

export function IntroSectionFour() {
  return (
    <ScrollReveal as="section" variant="fadeUp" className="section-shell bg-[var(--ches-paper)] px-5" margin={viewportMargin.early}>
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start lg:gap-16">
        <ChapterPhoto image={storyImages.education} />
        <div>
          <ChapterLabel number="04" message="To Educate a Child" />
          <ScrollReveal variant="fadeUpSmall" delay={0.15}>
            <h2 className="story-title mt-5">Basic Principles of CHES</h2>
          </ScrollReveal>
          <StaggerContainer className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2 xl:grid-cols-3" stagger={stagger.fast} delayChildren={0.2}>
            {principles.map((item, index) => (
              <StaggerItem key={item.title} as="article" variant="fadeUpSmall">
                <div className="group border-t border-[#e5e8e3] pt-3 transition-colors duration-300 hover:border-[var(--ches-orange)]">
                  <div className="flex items-start gap-2">
                    <span className="font-heading text-sm font-semibold text-[var(--ches-orange)] transition-transform duration-300 group-hover:scale-110">
                      {index + 1}.
                    </span>
                    <div>
                      <item.icon className="size-4 text-[var(--ches-orange)]" strokeWidth={1.8} />
                      <h3 className="mt-1 text-xs font-bold leading-5 text-[var(--ches-ink)]">{item.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[var(--ches-ink)]/72">{item.text}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </ScrollReveal>
  );
}
