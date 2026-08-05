import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/[0.045]">
      <div className="relative aspect-[4/3]">
        <Image src={project.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--ches-orange)]">{project.category}</p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-[var(--ches-blue)]">{project.title}</h2>
        <p className="mt-3 leading-7 text-[var(--ches-charcoal)]/68">{project.description}</p>
        <Link href="/projects" className="mt-5 inline-flex font-extrabold text-[var(--ches-blue)]">
          Learn More
        </Link>
      </div>
    </article>
  );
}
