"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AnimatedSection } from "@/components/shared/animated-section";
import { introParagraphs, originStory, principles, storyImages, visionMission } from "@/data/home";

function ChapterLabel({ number, message }: { number: string; message: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="chapter-number">{number}</span>
      <p className="chapter-message max-w-[330px] pt-1">{message}</p>
    </div>
  );
}

function ChapterPhoto({ image, className = "" }: { image: { src: string; alt: string }; className?: string }) {
  return (
    <div className={`chapter-photo aspect-[4/3] ${className}`}>
      <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
    </div>
  );
}

export function IntroSectionOne() {
  return (
    <AnimatedSection id="welcome" className="section-shell bg-[var(--ches-paper)] px-5">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <ChapterLabel number="01" message="Be a Changemaker" />
          <h2 className="story-title mt-5">Welcome to CHES</h2>
          <div className="mt-5 space-y-5">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="story-copy max-w-[510px]">{paragraph}</p>
            ))}
          </div>
        </div>
        <ChapterPhoto image={storyImages.welcome} />
      </div>
    </AnimatedSection>
  );
}

export function IntroSectionTwo() {
  return (
    <AnimatedSection className="section-shell bg-[var(--ches-sky)] px-5">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start lg:gap-16">
        <ChapterPhoto image={storyImages.origin} className="lg:sticky lg:top-28" />
        <div>
          <ChapterLabel number="02" message="Given the Opportunity They Have Excelled" />
          <h2 className="story-title mt-5">Story of Origin</h2>
          <div className="mt-6 space-y-5">
            {originStory.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.38, delay: Math.min(index * 0.04, 0.18) }}
                className="border-l-2 border-[#c7dce9] pl-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-blue)]">{item.label}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-[var(--ches-ink)]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--ches-ink)]/80">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function IntroSectionThree() {
  return (
    <AnimatedSection className="section-shell bg-[var(--ches-leaf)] px-5">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
        <div>
          <ChapterLabel number="03" message="Kids Deserve to be Happy in Family and Community" />
          <h2 className="story-title mt-5 max-w-[390px]">CHES Vision, Mission &amp; Basic Principles</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {visionMission.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-[#d8e3d7] bg-white/80 p-5 shadow-[0_8px_24px_rgb(71_120_91/0.06)]"
              >
                <item.icon className="size-7 text-[var(--ches-green)]" strokeWidth={1.6} />
                <h3 className="mt-4 text-sm font-bold leading-5 text-[var(--ches-green)]">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[var(--ches-ink)]/78">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
        <ChapterPhoto image={storyImages.community} />
      </div>
    </AnimatedSection>
  );
}

export function IntroSectionFour() {
  return (
    <AnimatedSection className="section-shell bg-[var(--ches-paper)] px-5">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start lg:gap-16">
        <ChapterPhoto image={storyImages.education} />
        <div>
          <ChapterLabel number="04" message="To Educate a Child" />
          <h2 className="story-title mt-5">Basic Principles of CHES</h2>
          <div className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.32, delay: Math.min(index * 0.025, 0.16) }}
                className="border-t border-[#e5e8e3] pt-3"
              >
                <div className="flex items-start gap-2">
                  <span className="font-heading text-sm font-semibold text-[var(--ches-orange)]">{index + 1}.</span>
                  <div>
                    <item.icon className="size-4 text-[var(--ches-orange)]" strokeWidth={1.8} />
                    <h3 className="mt-1 text-xs font-bold leading-5 text-[var(--ches-ink)]">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-[var(--ches-ink)]/72">{item.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
