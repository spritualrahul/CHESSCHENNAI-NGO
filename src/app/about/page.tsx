import type { Metadata } from "next";
import { Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/shared/animated-section";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ImpactCounters } from "@/components/sections/impact-counter";
import { StoryTimeline } from "@/components/sections/story-timeline";
import { awards, leadership, sectionImages, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CHES history, founder, values, leadership and child-centred impact.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CHES"
        title="A child-centred journey shaped by compassion, courage and community."
        body="From a medical response in 1993 to decades of service, CHES continues to protect children and strengthen families."
        image={sectionImages.about}
      />

      <AnimatedSection className="px-5">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/[0.08]">
            <Image src={sectionImages.about} alt="" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div>
            <SectionTitle
              eyebrow="History & Founder"
              title="Dr. Manorama Pinagapany saw children who needed more than treatment."
              body="The beginning of CHES was not an institution on paper. It was a decision to respond when two HIV positive orphan children had nowhere safe to go."
            />
            <blockquote className="mt-8 rounded-[2rem] border-l-4 border-[var(--ches-orange)] bg-white p-7 text-2xl font-semibold leading-10 text-[var(--ches-blue)] shadow-xl shadow-black/[0.04]">
              “Care becomes transformation when it stays after the crisis has passed.”
            </blockquote>
          </div>
        </div>
      </AnimatedSection>

      <StoryTimeline />

      <AnimatedSection className="px-5">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Values" title="The promises underneath every program." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl bg-white p-6 shadow-xl shadow-black/[0.04]">
                <value.icon className="size-8 text-[var(--ches-orange)]" />
                <h2 className="mt-5 font-heading text-2xl font-bold text-[var(--ches-blue)]">{value.title}</h2>
                <p className="mt-3 leading-7 text-[var(--ches-charcoal)]/68">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Impact" title="Measured in years, children, families and restored confidence." />
          <div className="mt-8">
            <ImpactCounters />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Leadership" title="People who hold the mission with care." />
            <div className="mt-8 space-y-5">
              {leadership.map((leader) => (
                <article key={leader.name} className="rounded-3xl bg-white p-7 shadow-xl shadow-black/[0.04]">
                  <Heart className="size-8 text-[var(--ches-orange)]" />
                  <h2 className="mt-5 font-heading text-2xl font-bold text-[var(--ches-blue)]">{leader.name}</h2>
                  <p className="mt-1 font-bold text-[var(--ches-green)]">{leader.role}</p>
                  <p className="mt-3 leading-7 text-[var(--ches-charcoal)]/68">{leader.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Awards & Recognition" title="Trust built through steady work." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {awards.map((award) => (
                <article key={award.title} className="rounded-3xl bg-white p-6 shadow-xl shadow-black/[0.04]">
                  <award.icon className="size-8 text-[var(--ches-orange)]" />
                  <h2 className="mt-5 font-heading text-xl font-bold text-[var(--ches-blue)]">{award.title}</h2>
                  <p className="mt-3 leading-7 text-[var(--ches-charcoal)]/68">{award.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-xl shadow-black/[0.04] md:p-10">
          <div className="flex items-start gap-5">
            <ShieldCheck className="size-10 shrink-0 text-[var(--ches-green)]" />
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--ches-blue)]">Transparent care, accountable giving.</h2>
              <p className="mt-3 max-w-3xl leading-8 text-[var(--ches-charcoal)]/70">
                CHES is designed for long-term trust: clear program areas, donor acknowledgements, annual reporting and a child-first protection mindset.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CtaBand />
    </>
  );
}
