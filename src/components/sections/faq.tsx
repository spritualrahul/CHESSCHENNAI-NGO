import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionTitle } from "@/components/shared/section-title";
import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <AnimatedSection className="px-5">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="FAQ" title="Questions donors often ask." align="center" />
        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-[1.5rem] bg-white p-6 shadow-lg shadow-black/[0.04]">
              <summary className="cursor-pointer font-heading text-xl font-bold text-[var(--ches-blue)]">{item.question}</summary>
              <p className="mt-4 leading-8 text-[var(--ches-charcoal)]/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
