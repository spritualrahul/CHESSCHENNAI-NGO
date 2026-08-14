import { CtaBand } from "@/components/shared/cta-band";
import { DonorPartners } from "@/components/sections/DonorPartners";
import { HomeVisitCounter } from "@/components/sections/home-visit-counter";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import {
  IntroSectionFour,
  IntroSectionOne,
  IntroSectionThree,
  IntroSectionTwo,
} from "@/components/sections/home-sections";
import { getHomePageUniqueVisitors } from "@/lib/visits/database";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let initialVisitorCount: number | null = null;

  try {
    initialVisitorCount = await getHomePageUniqueVisitors();
  } catch {
    // The homepage remains available while the optional counter is unavailable.
  }

  return (
    <>
      <HeroCarousel />
      <HomeVisitCounter initialCount={initialVisitorCount} />
      <IntroSectionOne />
      <IntroSectionTwo />
      <IntroSectionThree />
      <IntroSectionFour />
      <DonorPartners />
      <CtaBand />
    </>
  );
}
