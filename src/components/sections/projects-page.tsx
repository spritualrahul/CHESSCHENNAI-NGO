"use client";

import {
  ArrowRight,
  CheckCircle2,
  Download,
  HeartHandshake,
  GraduationCap,
  MapPinned,
  Search,
  ShieldCheck,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { CtaBand } from "@/components/shared/cta-band";
import { AnimatedSection } from "@/components/shared/animated-section";
import { chesProjects, projectStats, type ProjectStatus } from "@/data/projects";

const statIcons = [UsersRound, GraduationCap, MapPinned, Trophy];

const filterOptions: Array<{ label: string; value: "all" | ProjectStatus }> = [
  { label: "All Projects", value: "all" },
  { label: "Present Projects", value: "present" },
  { label: "Past Projects", value: "past" },
];

export function ProjectsPageContent() {
  const [filter, setFilter] = useState<"all" | ProjectStatus>("all");
  const [query, setQuery] = useState("");
  const [openProjectNumber, setOpenProjectNumber] = useState<string | null>(null);

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return chesProjects.filter((project) => {
      const matchesFilter = filter === "all" || project.status === filter;
      const searchableText = [project.title, project.subtitle, project.description, ...project.achievements]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [filter, query]);

  return (
    <>
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[var(--ches-blue)] px-5 pt-24 text-white md:min-h-[560px] md:pt-28">
        <Image
          src="/Assets/Galary/06367698-b922-469b-a84b-268e6e1edade.jpg"
          alt="Children smiling together at a CHES home"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,30,.94)_0%,rgba(8,25,30,.78)_31%,rgba(8,25,30,.28)_69%,rgba(8,25,30,.18)_100%)]" />
        <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-center pb-20 md:min-h-[430px]">
          <div className="max-w-2xl">
            <p className="eyebrow text-[var(--ches-orange)]">Our Projects</p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-semibold leading-[0.98] md:text-7xl">
              Creating Change.
              <br />
              Transforming Lives.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Every project at CHES is designed with compassion, innovation and a deep commitment to ensure every child, woman and community we work with can live with dignity, safety and opportunity.
            </p>
            <Link href="#projects" className="primary-cta mt-8">
              Make a Difference <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-5 md:-mt-14" aria-label="CHES project impact">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-[#d7e4e6] bg-white/95 shadow-[0_18px_40px_rgb(11_78_109/0.12)] backdrop-blur md:grid-cols-4">
          {projectStats.map((stat, index) => {
            const Icon = statIcons[index];

            return (
              <div key={stat.label} className="flex min-h-24 items-center gap-4 border-b border-[#dce5e7] px-6 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <Icon className="size-9 shrink-0 text-[var(--ches-blue)]" strokeWidth={1.6} />
                <div>
                  <p className="font-heading text-2xl font-semibold leading-none text-[var(--ches-blue)]">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold text-[var(--ches-charcoal)]/70">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AnimatedSection id="projects" className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter projects">
              {filterOptions.map((option) => {
                const active = filter === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(option.value)}
                    className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-bold transition ${
                      active
                        ? "border-[var(--ches-blue)] bg-[var(--ches-blue)] text-white shadow-md shadow-[var(--ches-blue)]/15"
                        : "border-[#d6dfe1] bg-white text-[var(--ches-ink)] hover:border-[var(--ches-blue)] hover:text-[var(--ches-blue)]"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative block min-w-60">
                <span className="sr-only">Search projects</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--ches-muted)]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects..."
                  className="h-11 w-full rounded-full border border-[#d6dfe1] bg-white pl-11 pr-4 text-sm text-[var(--ches-ink)] outline-none transition placeholder:text-[var(--ches-muted)] focus:border-[var(--ches-orange)] focus:ring-4 focus:ring-[var(--ches-orange)]/15"
                />
              </label>
              <button
                type="button"
                onClick={() => window.print()}
                title="Print or save the CHES projects overview"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--ches-blue)] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#083b53]"
              >
                Download Brochure <Download className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {visibleProjects.map((project) => {
              const detailsOpen = openProjectNumber === project.number;

              return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-[#e2e6e2] bg-white shadow-[0_8px_24px_rgb(11_78_109/0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgb(11_78_109/0.10)]"
              >
                <div className="grid lg:grid-cols-[29%_46%_25%]">
                  <div className="relative min-h-64 overflow-hidden lg:min-h-[255px]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 29vw, 100vw"
                    />
                    <span className="absolute left-0 top-0 inline-flex h-11 min-w-11 items-center justify-center rounded-br-xl bg-[var(--ches-blue)] px-3 font-heading text-lg font-semibold text-white">
                      {project.number}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center px-6 py-7 md:px-8">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[var(--ches-green)]">{project.category}</p>
                    <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-[var(--ches-ink)] md:text-3xl">{project.title}</h2>
                    {project.subtitle ? <p className="mt-3 text-sm font-bold leading-6 text-[var(--ches-orange)]">{project.subtitle}</p> : null}
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--ches-ink)]/75">{project.description}</p>
                    <button
                      type="button"
                      aria-expanded={detailsOpen}
                      aria-controls={`project-details-${project.number}`}
                      onClick={() => setOpenProjectNumber(detailsOpen ? null : project.number)}
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-[var(--ches-blue)] transition hover:text-[var(--ches-orange)]"
                    >
                      {detailsOpen ? "Hide Details" : "View Details"}
                      <ArrowRight className={`size-4 transition ${detailsOpen ? "rotate-90" : "group-hover:translate-x-1"}`} />
                    </button>
                  </div>

                  <div className="border-t border-[#edf0ec] bg-[#fffdfa] px-6 py-7 lg:border-l lg:border-t-0 md:px-7">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--ches-orange)]">Key Achievements</p>
                    <ul className="mt-5 space-y-3">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3 text-sm leading-5 text-[var(--ches-ink)]/78">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#337240]" strokeWidth={2.3} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  id={`project-details-${project.number}`}
                  className={`grid overflow-hidden border-t border-[#e3e9e4] bg-[linear-gradient(135deg,#fffdf7_0%,#f7fbfa_100%)] transition-[grid-template-rows] duration-500 ease-out ${
                    detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className={`px-6 py-7 transition duration-500 md:px-8 lg:px-10 ${detailsOpen ? "opacity-100" : "opacity-0"}`}>
                      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-3xl">
                          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--ches-orange)]">Project Details</p>
                          <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--ches-ink)]">How this project creates change</h3>
                          <p className="mt-4 text-sm leading-7 text-[var(--ches-ink)]/76 md:text-base">{project.detailIntro}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setOpenProjectNumber(null)}
                          aria-label={`Close details for ${project.title}`}
                          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d6dfe1] bg-white text-[var(--ches-blue)] transition hover:border-[var(--ches-orange)] hover:text-[var(--ches-orange)]"
                        >
                          <X className="size-4" />
                        </button>
                      </div>

                      <div className="mt-7 grid gap-6 border-t border-[#dfe7df] pt-7 lg:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--ches-blue)]/10 text-[var(--ches-blue)]">
                              <HeartHandshake className="size-5" strokeWidth={1.8} />
                            </span>
                            <h4 className="font-heading text-xl font-semibold text-[var(--ches-ink)]">What CHES Provides</h4>
                          </div>
                          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                            {project.services.map((service) => (
                              <li key={service} className="flex gap-3 text-sm leading-6 text-[var(--ches-ink)]/78">
                                <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#337240]" strokeWidth={2.3} />
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-[#dfe7df] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--ches-orange)]/15 text-[var(--ches-orange)]">
                              <Trophy className="size-5" strokeWidth={1.8} />
                            </span>
                            <h4 className="font-heading text-xl font-semibold text-[var(--ches-ink)]">Why It Matters</h4>
                          </div>
                          <ul className="mt-5 space-y-3">
                            {project.impact.map((item) => (
                              <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--ches-ink)]/78">
                                <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#337240]" strokeWidth={2.3} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>

          {visibleProjects.length === 0 ? (
            <div className="border-y border-[#dfe8e3] py-16 text-center">
              <ShieldCheck className="mx-auto size-10 text-[var(--ches-green)]" strokeWidth={1.5} />
              <p className="mt-4 font-heading text-2xl text-[var(--ches-ink)]">No projects match that search.</p>
              <button type="button" onClick={() => setQuery("")} className="mt-4 text-sm font-bold text-[var(--ches-blue)] underline decoration-[var(--ches-orange)] decoration-2 underline-offset-4">Clear search</button>
            </div>
          ) : null}

          <p className="mt-6 text-center text-sm text-[var(--ches-muted)]" aria-live="polite">
            Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </AnimatedSection>

      <CtaBand
        title="Be a Part of Their Tomorrow"
        body="Your support helps us continue our mission of care, protection, education and empowerment."
      />
    </>
  );
}
