import type { Metadata } from "next";
import { AboutPageContent } from "@/components/sections/about-page";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CHES history, founder, values, leadership and child-centred impact.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
