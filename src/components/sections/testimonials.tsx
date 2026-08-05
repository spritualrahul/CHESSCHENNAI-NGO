import { Quote } from "lucide-react";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionTitle } from "@/components/shared/section-title";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <AnimatedSection className="px-5">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Voices of trust" title="Stories carried by families, donors and volunteers." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-black/[0.04]">
              <Quote className="size-8 text-[var(--ches-orange)]" />
              <p className="mt-5 text-lg leading-8 text-[var(--ches-charcoal)]/74">{item.quote}</p>
              <p className="mt-5 font-heading text-xl font-bold text-[var(--ches-blue)]">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
