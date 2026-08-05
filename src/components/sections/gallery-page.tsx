"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BookOpenCheck,
  Heart,
  Play,
  ReceiptText,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { galleryFilters, galleryPhotos, type GalleryCategory } from "@/data/gallery";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    text: "100% of your donation goes to our cause.",
  },
  {
    icon: ReceiptText,
    title: "Tax Benefits",
    text: "80G certified. Avail tax exemptions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Donations",
    text: "Your donations are safe and protected.",
  },
  {
    icon: BookOpenCheck,
    title: "Regular Updates",
    text: "We keep you updated on our impact.",
  },
];

const initialVisibleCount = 9;

export function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") return galleryPhotos;
    return galleryPhotos.filter((photo) => photo.category === activeFilter);
  }, [activeFilter]);

  const visiblePhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, initialVisibleCount);
  const hasMore = filteredPhotos.length > initialVisibleCount && !showAll;

  function handleFilterChange(filter: GalleryCategory) {
    setActiveFilter(filter);
    setShowAll(false);
  }

  return (
    <>
      <section className="relative isolate min-h-[510px] overflow-hidden bg-[var(--ches-blue)] px-5 pt-24 text-white md:min-h-[560px]">
        <Image
          src="/Assets/Banner-carousel/ChatGPT Image Aug 5, 2026, 11_24_14 AM.png"
          alt="Children smiling together in a CHES moment of hope"
          fill
          priority
          className="object-cover object-center md:object-[center_42%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,18,20,.94)_0%,rgba(9,18,20,.76)_36%,rgba(9,18,20,.18)_72%,rgba(9,18,20,.08)_100%)]" />
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center pb-12 md:min-h-[480px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <div className="h-px w-12 bg-[var(--ches-gold)]" />
            <p className="mt-3 text-base font-semibold text-[var(--ches-gold)]">Moments of Hope</p>
            <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.02] md:text-7xl">
              Stories in Every
              <br />
              Smile
            </h1>
            <div className="mt-5 h-px w-12 bg-[var(--ches-gold)]" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/90 md:text-lg">
              A glimpse of the lives we touch, the communities we serve, and the hope we build together.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/donate" className="primary-cta h-12 px-7">
                Donate Now <Heart className="size-4 fill-current" />
              </Link>
              <button
                type="button"
                className="inline-flex h-12 items-center gap-3 rounded-full px-1 pr-4 text-sm font-semibold text-white transition hover:text-[var(--ches-gold)]"
              >
                <span className="grid size-10 place-items-center rounded-full border border-[var(--ches-gold)] bg-black/15 text-[var(--ches-gold)]">
                  <Play className="ml-0.5 size-4 fill-current" />
                </span>
                Play Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--ches-warm-white)] px-5 py-9 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <h2 className="font-heading text-4xl font-semibold leading-tight text-[var(--ches-blue)] md:text-5xl">Our Gallery</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--ches-ink)]/75">
                Explore moments that reflect our journey of compassion, care and change.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end" role="tablist" aria-label="Gallery filters">
              {galleryFilters.map((filter) => {
                const active = activeFilter === filter.label;
                const Icon = filter.icon;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleFilterChange(filter.label)}
                    className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition ${
                      active
                        ? "border-[var(--ches-blue)] bg-[var(--ches-blue)] text-white shadow-[0_10px_24px_rgb(11_78_109/0.18)]"
                        : "border-[#d9e1df] bg-white text-[var(--ches-ink)]/78 hover:border-[var(--ches-orange)] hover:text-[var(--ches-orange)]"
                    }`}
                  >
                    <Icon className="size-4" strokeWidth={1.8} />
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visiblePhotos.map((photo, index) => (
              <motion.article
                layout
                key={photo.image}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.16) }}
                className="group relative min-h-[210px] overflow-hidden rounded-lg bg-[#e7ece7] shadow-[0_10px_26px_rgb(11_78_109/0.08)] md:min-h-[250px]"
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(4,16,19,.46)_100%)] opacity-90" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-xs font-extrabold text-[var(--ches-ink)] shadow-[0_8px_20px_rgb(0_0_0/0.16)] backdrop-blur">
                    <span className="grid size-5 place-items-center rounded-full bg-[var(--ches-gold)]/18 text-[var(--ches-orange)]">
                      {photo.category === "Education" ? (
                        <BookOpenCheck className="size-3.5" />
                      ) : photo.category === "Health" ? (
                        <Heart className="size-3.5" />
                      ) : photo.category === "Community" ? (
                        <UserRoundCheck className="size-3.5" />
                      ) : (
                        <CameraDot />
                      )}
                    </span>
                    {photo.category}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPhotos.length === 0 ? (
            <div className="mt-10 rounded-lg border border-[#d9e1df] bg-white py-12 text-center">
              <p className="font-heading text-2xl font-semibold text-[var(--ches-blue)]">No photos found.</p>
            </div>
          ) : null}

          {hasMore ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#ccd8d7] bg-white px-7 text-sm font-extrabold text-[var(--ches-blue)] shadow-[0_8px_22px_rgb(11_78_109/0.06)] transition hover:-translate-y-0.5 hover:border-[var(--ches-orange)] hover:text-[var(--ches-orange)]"
              >
                Load More Photos <ArrowDown className="size-4" />
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-[var(--ches-warm-white)] px-5 pb-10 md:pb-14">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-[#eadfca] bg-[#fff9ee] shadow-[0_18px_42px_rgb(11_78_109/0.08)] lg:grid-cols-[0.9fr_1.35fr_1.45fr]">
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src="/Assets/About/ches-children-care.jpeg"
              alt="A child supported by CHES smiling with hope"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center border-b border-[#eadfca] px-7 py-8 lg:border-b-0 lg:border-r">
            <h2 className="font-heading text-3xl font-semibold leading-tight text-[var(--ches-blue)] md:text-4xl">
              Your Kindness Can
              <br />
              Change a Child&apos;s Tomorrow
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--ches-ink)]/76">
              Every contribution helps us provide healthcare, education, protection and hope to children who need it most.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/donate" className="primary-cta">
                Donate Now <Heart className="size-4 fill-current" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[var(--ches-ink)]/35 bg-white px-6 text-sm font-bold text-[var(--ches-ink)] transition hover:border-[var(--ches-orange)] hover:text-[var(--ches-orange)]"
              >
                Become a Volunteer <UserRoundCheck className="size-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 px-7 py-8 sm:grid-cols-2">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--ches-gold)]/12 text-[var(--ches-orange)]">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-[var(--ches-ink)]">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-[var(--ches-ink)]/70">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function CameraDot() {
  return (
    <span className="block size-2.5 rounded-full border-2 border-current" aria-hidden="true" />
  );
}
