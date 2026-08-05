import type { Metadata } from "next";

import { AnimatedSection } from "@/components/shared/animated-section";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { sectionImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View CHES image, video and album placeholders prepared for future uploads.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of care, learning, celebration and community."
        body="A masonry gallery with images, videos, albums, hover effects, filters, lazy loading and lightbox support."
        image={sectionImages.origin}
      />
      <AnimatedSection className="px-5">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="CHES in pictures"
            title="A visual archive ready for real uploads."
            body="Replace the placeholders in public/placeholders or update the gallery data to publish real moments."
            align="center"
          />
          <div className="mt-12">
            <GalleryGrid />
          </div>
          <div className="mt-8 flex justify-center">
            <span className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--ches-charcoal)]/62 shadow-lg shadow-black/[0.04]">
              Pagination-ready for larger galleries
            </span>
          </div>
        </div>
      </AnimatedSection>
      <CtaBand title="Help create more stories worth remembering." />
    </>
  );
}
