import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { storyImages } from "@/data/home";

type CtaBandProps = {
  title?: string;
};

export function CtaBand({ title = "Your Kindness Can Change a Child's Tomorrow" }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--ches-blue)] px-5 py-12 text-white md:py-14">
      <Image src={storyImages.cta.src} alt="Children smiling together at a CHES home" fill className="object-cover object-center opacity-45" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,47,65,.98),rgba(7,47,65,.88)_42%,rgba(7,47,65,.26))]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Heart className="size-9 fill-[var(--ches-gold)] text-[var(--ches-gold)]" />
          <h2 className="mt-4 max-w-xl font-heading text-4xl font-semibold leading-[1.04] md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/85 md:text-base">
            Every contribution helps provide education, healthcare, protection, and hope to children who need it most.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/donate" className="primary-cta">
              Donate Now <Heart className="size-4 fill-current" />
            </Link>
            <Link href="/about" className="secondary-cta">
              Become a Volunteer <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
