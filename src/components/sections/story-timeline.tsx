import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionTitle } from "@/components/shared/section-title";
import { originTimeline } from "@/data/site";

export function StoryTimeline() {
  return (
    <AnimatedSection className="px-5">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Origin timeline" title="The story continues through care." align="center" />
        <div className="mt-12 grid gap-5">
          {originTimeline.map((item) => (
            <article key={item.title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-black/[0.04]">
              <p className="font-heading text-3xl font-extrabold text-[var(--ches-orange)]">{item.year}</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[var(--ches-blue)]">{item.title}</h2>
              <p className="mt-3 leading-8 text-[var(--ches-charcoal)]/70">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
