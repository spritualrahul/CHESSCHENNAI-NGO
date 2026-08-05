import type { Metadata } from "next";

import { ProjectsPageContent } from "@/components/sections/projects-page";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore CHES projects creating change and transforming the lives of children, women and communities.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
