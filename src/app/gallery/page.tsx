import type { Metadata } from "next";

import { GalleryPageContent } from "@/components/sections/gallery-page";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore CHES moments of hope, care, education, health support and community change.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
