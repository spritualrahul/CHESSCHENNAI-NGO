import { CtaBand } from "@/components/shared/cta-band";
import { DonorPartners } from "@/components/sections/DonorPartners";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import {
  IntroSectionFour,
  IntroSectionOne,
  IntroSectionThree,
  IntroSectionTwo,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <IntroSectionOne />
      <IntroSectionTwo />
      <IntroSectionThree />
      <IntroSectionFour />
      <DonorPartners />
      <CtaBand />
    </>
  );
}
