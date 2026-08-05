"use client";

import { ArrowRight, Heart, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/shared/animated-section";
import { CtaBand } from "@/components/shared/cta-band";
import {
  aboutHero,
  aboutStats,
  boardMembers,
  founderAwards,
  founderParagraphs,
  founderPortrait,
  impactAreas,
  journeyIntro,
  journeySections,
  managementTeam,
  milestones,
  progressCards,
} from "@/data/about";

const impactTones: Record<string, string> = {
  blue: "bg-[#e5f4ff] text-[#1d7ab0]",
  green: "bg-[#e4f5e8] text-[#418d56]",
  gold: "bg-[#fff0d3] text-[#c2861b]",
  rose: "bg-[#ffe5ec] text-[#c35f78]",
  purple: "bg-[#eee6ff] text-[#7952b4]",
};

export function AboutPageContent() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <ProgressSection />
      <JourneyIntroSection />
      <MilestonesSection />
      <ImpactAreasSection />
      <FullJourneySection />
      <FounderSection />
      <GovernanceSection />
      <CtaBand title="Be a part of our journey." body="Your support today can change a child's tomorrow." />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate min-h-[470px] overflow-hidden bg-[var(--ches-blue)] pt-20 text-white">
      <Image src={aboutHero.image} alt={aboutHero.alt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,31,.93),rgba(8,25,31,.68)_38%,rgba(8,25,31,.08)_78%),linear-gradient(0deg,rgba(8,25,31,.50),transparent_62%)]" />
      <div className="relative mx-auto flex min-h-[470px] max-w-6xl items-center px-5 py-20">
        <div className="max-w-[390px]">
          <h1 className="font-heading text-6xl font-medium leading-none md:text-7xl">{aboutHero.title}</h1>
          <p className="mt-6 text-base leading-7 text-white/86 md:text-lg">{aboutHero.body}</p>
          <div className="mt-5 flex items-center gap-3 border-t border-[#d9a13b]/80 pt-4 text-sm font-semibold text-white/90">
            <Heart className="size-5 fill-[#e0aa42] text-[#e0aa42]" />
            {aboutHero.promise}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStats() {
  return (
    <div className="relative z-10 mx-auto -mt-8 grid max-w-6xl grid-cols-2 overflow-hidden rounded-xl border border-[#e1e9e7] bg-white shadow-[0_8px_28px_rgb(11_78_109/0.12)] md:grid-cols-4">
      {aboutStats.map((stat) => (
        <div key={stat.title} className="flex min-h-[86px] items-center gap-3 border-[#e1e9e7] px-4 py-4 md:px-6 md:[&:not(:first-child)]:border-l">
          <stat.icon className="size-8 shrink-0 text-[var(--ches-blue)]" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-bold text-[var(--ches-blue)]">{stat.title}</p>
            <p className="mt-1 text-[0.66rem] leading-4 text-[var(--ches-muted)]">{stat.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgressSection() {
  return (
    <AnimatedSection className="bg-white px-5">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_2.2fr] lg:items-center lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">Our Journey</p>
          <h2 className="mt-4 max-w-[300px] font-heading text-4xl font-semibold leading-[1.08] text-[var(--ches-ink)] md:text-5xl">CHES Progress Since <span className="text-[var(--ches-orange)]">1994 till 2025</span></h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--ches-muted)]">From a small act of compassion to a pioneering movement — CHES has grown into a trusted organization impacting thousands of lives across Tamil Nadu and beyond.</p>
          <Link href="#journey" className="primary-cta mt-6 h-11 px-5">Explore Full Journey <ArrowRight className="size-4" /></Link>
        </div>
        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {progressCards.map((card) => (
              <motion.article key={card.period} whileHover={{ y: -5 }} className="overflow-hidden rounded-xl border border-[#e1e7e5] bg-white shadow-[0_8px_20px_rgb(11_78_109/0.05)]">
                <div className="relative aspect-[1.55]">
                  <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1280px) 18vw, (min-width: 640px) 42vw, 90vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-heading text-lg font-semibold text-[var(--ches-ink)]">{card.period}</p>
                  <h3 className="mt-1 min-h-10 text-xs font-bold leading-4 text-[var(--ches-ink)]">{card.title}</h3>
                  <p className="mt-3 text-[0.68rem] leading-4 text-[var(--ches-muted)]">{card.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-4 hidden items-center px-6 xl:flex">
            <div className="h-px flex-1 bg-[#a9c5d1]" />
            {progressCards.map((card, index) => <span key={card.period} className="relative grid size-3 shrink-0 place-items-center rounded-full bg-[var(--ches-blue)]"><span className="absolute -inset-x-8 h-px bg-transparent" />{index === progressCards.length - 1 ? <ArrowRight className="absolute left-10 size-5 text-[var(--ches-blue)]" /> : null}</span>)}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function JourneyIntroSection() {
  return (
    <AnimatedSection className="bg-[var(--ches-sky)] px-5">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
        <div className="grid grid-cols-3 gap-2">
          <div className="relative col-span-3 aspect-[1.75] overflow-hidden rounded-xl">
            <Image src={journeyIntro.image} alt={journeyIntro.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </div>
          <JourneyThumbnail src="/Assets/About/ches-children-meal.jpeg" alt="Children sharing a meal" />
          <JourneyThumbnail src="/Assets/Galary/06367698-b922-469b-a84b-268e6e1edade.jpg" alt="Children holding toys" />
          <JourneyThumbnail src="/Assets/Galary/PHOTO-2025-02-22-10-19-17.jpg" alt="Children and caregivers together" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">{journeyIntro.eyebrow}</p>
          <h2 className="mt-4 max-w-[520px] font-heading text-4xl font-semibold leading-[1.05] text-[var(--ches-blue)] md:text-5xl">{journeyIntro.title}</h2>
          <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--ches-muted)]">
            {journeyIntro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>CHES has consistently evolved to address emerging needs — from HIV prevention and care to child protection, education, gender equity and community well-being.</p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[#cbdde5] pt-6 sm:grid-cols-4">
            {[
              ["30+", "Years of Service"],
              ["310+", "Children Cared For"],
              ["1M+", "People Reached"],
              ["Many", "Lives Transformed"],
            ].map(([value, label]) => <div key={label}><p className="font-heading text-2xl font-semibold text-[var(--ches-blue)]">{value}</p><p className="mt-1 text-[0.66rem] leading-4 text-[var(--ches-muted)]">{label}</p></div>)}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function JourneyThumbnail({ src, alt }: { src: string; alt: string }) {
  return <div className="relative aspect-square overflow-hidden rounded-lg"><Image src={src} alt={alt} fill sizes="(min-width: 1024px) 14vw, 30vw" className="object-cover" /></div>;
}

function MilestonesSection() {
  return (
    <AnimatedSection className="bg-white px-5">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_2.2fr] lg:items-start lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">Key Milestones</p>
          <h2 className="mt-4 max-w-[300px] font-heading text-4xl font-semibold leading-[1.08] text-[var(--ches-ink)]">Growing Through Challenges, Creating Lasting Impact</h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--ches-muted)]">Every milestone represents our commitment to innovation, care and the belief that every child deserves a safe and bright future.</p>
          <a href="#impact" className="secondary-cta mt-6 !border-[var(--ches-blue)] !text-[var(--ches-blue)]">View Timeline <ArrowRight className="size-4" /></a>
        </div>
        <div className="relative space-y-3 pl-9 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-[#bdd0d8]">
          {milestones.map((item, index) => (
            <motion.article key={item.year} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: .35, delay: index * .04 }} className="relative flex items-center gap-4 rounded-xl border border-[#e2e8e6] bg-white p-3 shadow-[0_5px_18px_rgb(11_78_109/0.04)]">
              <span className={`absolute -left-[3.25rem] grid size-9 place-items-center rounded-full font-heading text-sm font-semibold text-white ${index % 2 === 0 ? "bg-[var(--ches-blue)]" : "bg-[var(--ches-orange)]"}`}>{item.year}</span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eff6f5] text-[var(--ches-blue)]"><item.icon className="size-5" /></span>
              <div><h3 className="text-sm font-bold text-[var(--ches-ink)]">{item.title}</h3><p className="mt-1 text-xs leading-4 text-[var(--ches-muted)]">{item.text}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ImpactAreasSection() {
  return (
    <AnimatedSection id="impact" className="bg-[#fbfcfb] px-5">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">Our Impact Areas</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {impactAreas.map((area) => (
            <motion.article key={area.title} whileHover={{ y: -4 }} className="rounded-xl border border-[#e1e7e5] bg-white p-5 shadow-[0_8px_24px_rgb(11_78_109/0.04)]">
              <span className={`grid size-10 place-items-center rounded-full ${impactTones[area.tone]}`}><area.icon className="size-5" /></span>
              <h3 className="mt-4 text-sm font-bold text-[var(--ches-ink)]">{area.title}</h3>
              <p className="mt-3 text-xs leading-5 text-[var(--ches-muted)]">{area.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function FullJourneySection() {
  return (
    <AnimatedSection id="journey" className="bg-[var(--ches-sky)] px-5">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">Our Full Story</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-[var(--ches-blue)] md:text-5xl">A movement shaped by courage, care and imagination.</h2>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {journeySections.map((section, index) => (
            <article key={section.title} className="border-t border-[#cbdde5] pt-5">
              <p className="font-heading text-2xl font-semibold text-[#b8d2dc]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-[var(--ches-ink)]">{section.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ches-muted)]">{section.text}</p>
              {section.bullets ? <ul className="mt-3 grid gap-2 text-sm leading-5 text-[var(--ches-muted)]">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--ches-orange)]" />{bullet}</li>)}</ul> : null}
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function FounderSection() {
  return (
    <AnimatedSection className="bg-white px-5">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-square max-w-[330px] overflow-hidden rounded-xl bg-[#eef4f3] shadow-[0_16px_36px_rgb(11_78_109/0.10)]"><Image src={founderPortrait} alt="Dr. Manorama Pinagapany, Founder and Director of CHES" fill sizes="(min-width: 1024px) 27vw, 80vw" className="object-cover" /></div>
            <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">Founder &amp; Director</p>
            <h2 className="mt-2 text-center font-heading text-3xl font-semibold text-[var(--ches-blue)]">Dr. Manorama Pinagapany</h2>
            <blockquote className="mt-6 border-l-2 border-[var(--ches-orange)] pl-4 font-heading text-xl italic leading-7 text-[var(--ches-blue)]"><Quote className="mb-2 size-5 text-[var(--ches-orange)]" />A pediatrician, child rights activist and architect of OVC home-based care.</blockquote>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">The Founder</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-[var(--ches-blue)] md:text-5xl">A life dedicated to children, health and human dignity.</h2>
            <div className="mt-7 space-y-5 text-sm leading-7 text-[var(--ches-muted)]">{founderParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <details className="mt-8 rounded-xl border border-[#dfe8e5] bg-[#fbfcfb] p-5">
              <summary className="cursor-pointer list-none font-heading text-2xl font-semibold text-[var(--ches-blue)]">Certificates and awards</summary>
              <ol className="mt-5 grid gap-3 text-sm leading-5 text-[var(--ches-muted)] sm:grid-cols-2">{founderAwards.map((award, index) => <li key={award} className="flex gap-3"><span className="font-heading font-semibold text-[var(--ches-orange)]">{index + 1}.</span><span>{award}</span></li>)}</ol>
            </details>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function GovernanceSection() {
  return (
    <AnimatedSection className="bg-[var(--ches-sky)] px-5">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">Leadership &amp; Governance</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-[var(--ches-blue)]">People who hold the mission with care.</h2>
            <p className="mt-5 text-sm leading-6 text-[var(--ches-muted)]">Strong systems and accountable leadership have helped CHES sustain its work across children, families and communities.</p>
            <div className="mt-7 overflow-hidden rounded-xl border border-[#dce7e5] bg-white">
              <div className="grid grid-cols-[1.4fr_1fr] bg-[var(--ches-blue)] px-4 py-3 text-xs font-bold text-white"><span>Name of the Member</span><span>Designation</span></div>
              {boardMembers.map(([name, role], index) => <div key={name} className="grid grid-cols-[1.4fr_1fr] border-t border-[#e7edeb] px-4 py-3 text-xs text-[var(--ches-ink)]"><span><span className="mr-2 text-[var(--ches-orange)]">{index + 1}.</span>{name}</span><span className="text-[var(--ches-muted)]">{role}</span></div>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ches-orange)]">Management Team</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-[var(--ches-blue)]">The stalwarts of the organization.</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {managementTeam.map((member) => <article key={member.name} className="overflow-hidden rounded-xl border border-[#dce7e5] bg-white shadow-[0_8px_24px_rgb(11_78_109/0.05)]"><div className="relative aspect-[1.25] bg-[#eef4f3]"><Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(min-width: 1024px) 25vw, 80vw" className="object-cover" /></div><div className="p-4"><h3 className="text-sm font-bold text-[var(--ches-ink)]">{member.name}</h3><p className="mt-1 text-xs font-semibold text-[var(--ches-orange)]">{member.role}</p><p className="mt-3 text-xs leading-5 text-[var(--ches-muted)]">{member.text}</p></div></article>)}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
