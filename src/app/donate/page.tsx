import type { Metadata } from "next";

import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { DonationForm } from "@/components/sections/donation-form";
import { sectionImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Donate",
  description: "Donate to CHES and support vulnerable children through health, education, shelter and family care.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your Kindness Can Change a Child's Future."
        body="A simple, reassuring donation flow with donor details, QR placeholder, banking information and trust signals."
        image={sectionImages.impact}
      />
      <AnimatedSection className="px-5">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Simple and transparent"
            title="Give with confidence."
            body="Complete your details, scan the QR, and use the displayed banking information for domestic or international donations."
            align="center"
          />
          <div className="mt-12">
            <DonationForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
