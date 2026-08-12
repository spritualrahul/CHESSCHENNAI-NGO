import Image from "next/image";

import { MotionFadeIn } from "@/components/shared/motion-wrappers";
import { donors } from "@/data/donors";

export function DonorPartners() {
  const midpoint = Math.ceil(donors.length / 2);
  const donorRows = [donors.slice(0, midpoint), donors.slice(midpoint)];

  return (
    <section className="overflow-hidden border-y border-[#e7eceb] bg-[linear-gradient(180deg,#ffffff_0%,#fffaf1_48%,#ffffff_100%)] py-12 md:py-14">
      <MotionFadeIn className="mx-auto max-w-6xl px-5 text-center">
        <p className="font-heading text-3xl font-semibold text-[var(--ches-blue)] md:text-4xl">Trusted by Leading Organizations</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--ches-muted)]">
          For over three decades, CHES has worked alongside respected organizations committed to improving children&apos;s lives.
        </p>
      </MotionFadeIn>

      <div className="relative mt-9 w-full space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/85 to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/85 to-transparent md:w-28" />

        {donorRows.map((row, rowIndex) => (
          <div
            key={rowIndex === 0 ? "donor-row-forward" : "donor-row-reverse"}
            className="donor-marquee"
            aria-label={rowIndex === 0 ? "Donor logos row one" : "Donor logos row two"}
          >
            <div className={`donor-marquee-track ${rowIndex === 1 ? "donor-marquee-track-reverse" : ""}`}>
              {[0, 1].map((copyIndex) =>
                row.map((donor) => (
                  <div key={`${donor.logo}-${copyIndex}`} className="group donor-logo-card" aria-hidden={copyIndex === 1}>
                    <Image
                      src={donor.logo}
                      alt={copyIndex === 0 ? `${donor.name} logo` : ""}
                      width={190}
                      height={86}
                      loading="lazy"
                      className="max-h-14 w-auto max-w-[150px] object-contain opacity-100 transition duration-300 group-hover:scale-105 md:max-w-[170px]"
                    />
                  </div>
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
