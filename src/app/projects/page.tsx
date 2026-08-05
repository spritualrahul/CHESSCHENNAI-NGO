import type { Metadata } from "next";

import { AnimatedSection } from "@/components/shared/animated-section";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ProjectCard } from "@/components/sections/project-card";
import { projects, sectionImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore CHES programs across child health, education, shelter, family care and community outreach.",
};

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Programs that turn compassion into practical support."
        body="Each CHES project is designed to help children feel safer, healthier, better educated and more connected to family and community."
        image={sectionImages.principles}
      />
      <AnimatedSection className="px-5">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Future-ready project library"
            title="Filter-ready cards for current and upcoming programs."
            body="The structure is ready for categories, project detail pages and future gallery support as content grows."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full bg-white px-5 py-2 text-sm font-extrabold text-[var(--ches-blue)] shadow-lg shadow-black/[0.04]">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBand title="Fund a project that changes daily life." />
    </>
  );
}
