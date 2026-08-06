"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
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

const initialVisibleCount = 8;
const galleryHeroVideo = "/Assets/video/make_this_as_a_video___motion.mp4";

export function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");
  const [showAll, setShowAll] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") return galleryPhotos;
    return galleryPhotos.filter((photo) => photo.category === activeFilter);
  }, [activeFilter]);

  const visiblePhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, initialVisibleCount);
  const hasMore = filteredPhotos.length > initialVisibleCount && !showAll;
  const carouselPhotos = useMemo(() => {
    const featured = filteredPhotos.filter((photo) => photo.featured);
    return featured.length > 0 ? featured : filteredPhotos.slice(0, 6);
  }, [filteredPhotos]);
  const activeSlide = carouselPhotos.length > 0 ? carouselPhotos[activeSlideIndex % carouselPhotos.length] : null;

  function handleFilterChange(filter: GalleryCategory) {
    setActiveFilter(filter);
    setShowAll(false);
    setActiveSlideIndex(0);
  }

  function handleSlideChange(direction: 1 | -1) {
    if (carouselPhotos.length === 0) return;
    setActiveSlideIndex((current) => (current + direction + carouselPhotos.length) % carouselPhotos.length);
  }

  return (
    <>
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[var(--ches-blue)] px-5 pt-24 text-white md:min-h-[820px]">
        <Image
          src="/Assets/Banner-carousel/ChatGPT Image Aug 5, 2026, 11_24_14 AM.png"
          alt="Children smiling together in a CHES moment of hope"
          fill
          priority
          className={`object-cover object-[center_28%] transition-opacity duration-500 ${isVideoPlaying ? "opacity-0" : "opacity-100"}`}
          sizes="100vw"
        />
        {isVideoPlaying ? (
          <video
            src={galleryHeroVideo}
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
            autoPlay
            playsInline
            muted
            controls
            onEnded={() => setIsVideoPlaying(false)}
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,18,20,.94)_0%,rgba(9,18,20,.76)_36%,rgba(9,18,20,.18)_72%,rgba(9,18,20,.08)_100%)]" />
        <div className="relative mx-auto flex min-h-[670px] max-w-7xl items-center pb-12 md:min-h-[740px]">
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
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex h-12 items-center gap-3 rounded-full px-1 pr-4 text-sm font-semibold text-white transition hover:text-[var(--ches-gold)]"
              >
                <span className="grid size-10 place-items-center rounded-full border border-[var(--ches-gold)] bg-black/15 text-[var(--ches-gold)]">
                  <Play className="ml-0.5 size-4 fill-current" />
                </span>
                {isVideoPlaying ? "Playing Video" : "Play Video"}
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

          {activeSlide ? (
            <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
              <motion.div
                key={activeSlide.image}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative min-h-[300px] overflow-hidden rounded-lg bg-[#dfe8e4] shadow-[0_18px_42px_rgb(11_78_109/0.10)] md:min-h-[430px]"
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  sizes="(min-width: 1024px) 62vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,27,.04)_18%,rgba(5,22,27,.76)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-xs font-extrabold text-[var(--ches-ink)] shadow-[0_10px_24px_rgb(0_0_0/0.18)] backdrop-blur">
                    <CategoryIcon category={activeSlide.category} />
                    {activeSlide.category}
                  </span>
                  <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 className="font-heading text-3xl font-semibold leading-tight md:text-5xl">{activeSlide.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/82">{activeSlide.alt}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSlideChange(-1)}
                        aria-label="Previous gallery photo"
                        className="grid size-11 place-items-center rounded-full border border-white/45 bg-black/25 text-white transition hover:border-[var(--ches-gold)] hover:text-[var(--ches-gold)]"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <span className="min-w-14 text-center text-xs font-extrabold text-white/82">
                        {(activeSlideIndex % carouselPhotos.length) + 1}/{carouselPhotos.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSlideChange(1)}
                        aria-label="Next gallery photo"
                        className="grid size-11 place-items-center rounded-full border border-white/45 bg-black/25 text-white transition hover:border-[var(--ches-gold)] hover:text-[var(--ches-gold)]"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="rounded-lg border border-[#d9e1df] bg-white p-4 shadow-[0_12px_30px_rgb(11_78_109/0.06)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--ches-orange)]">Featured Moments</p>
                    <h3 className="mt-1 font-heading text-2xl font-semibold text-[var(--ches-blue)]">Browse highlights</h3>
                  </div>
                  <span className="rounded-full bg-[#eef5f2] px-3 py-1 text-xs font-extrabold text-[var(--ches-green)]">
                    {filteredPhotos.length} photos
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 lg:grid-cols-2">
                  {carouselPhotos.slice(0, 6).map((photo, index) => {
                    const active = photo.image === activeSlide.image;

                    return (
                      <button
                        key={photo.image}
                        type="button"
                        onClick={() => setActiveSlideIndex(index)}
                        className={`group relative aspect-[4/3] overflow-hidden rounded-lg border transition ${
                          active
                            ? "border-[var(--ches-orange)] shadow-[0_8px_20px_rgb(216_154_43/0.22)]"
                            : "border-[#dfe8e3] hover:border-[var(--ches-orange)]"
                        }`}
                      >
                        <Image
                          src={photo.image}
                          alt={photo.alt}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 15vw, 30vw"
                        />
                        <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(4,16,19,.72))] px-2 pb-2 pt-8 text-left text-[0.68rem] font-extrabold leading-3 text-white">
                          {photo.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-10 flex flex-col gap-3 border-t border-[#e1e8e5] pt-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--ches-orange)]">Photo Wall</p>
              <h3 className="mt-1 font-heading text-3xl font-semibold text-[var(--ches-blue)]">Recent moments</h3>
            </div>
            <p className="text-sm font-medium text-[var(--ches-ink)]/70">
              Showing {visiblePhotos.length} of {filteredPhotos.length} photos
            </p>
          </div>

          <motion.div layout className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visiblePhotos.map((photo, index) => (
              <motion.article
                layout
                key={photo.image}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.16) }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#e7ece7] shadow-[0_8px_22px_rgb(11_78_109/0.07)]"
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(4,16,19,.54)_100%)] opacity-90" />
                <div className="absolute inset-x-3 bottom-3">
                  <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/94 px-3 py-1.5 text-[0.68rem] font-extrabold text-[var(--ches-ink)] shadow-[0_8px_20px_rgb(0_0_0/0.14)] backdrop-blur">
                    <CategoryIcon category={photo.category} />
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
                Show More Photos <ArrowDown className="size-4" />
              </button>
            </div>
          ) : showAll && filteredPhotos.length > initialVisibleCount ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#ccd8d7] bg-white px-7 text-sm font-extrabold text-[var(--ches-blue)] shadow-[0_8px_22px_rgb(11_78_109/0.06)] transition hover:-translate-y-0.5 hover:border-[var(--ches-orange)] hover:text-[var(--ches-orange)]"
              >
                Show Less Photos
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

function CategoryIcon({ category }: { category: Exclude<GalleryCategory, "All"> }) {
  return (
    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[var(--ches-gold)]/18 text-[var(--ches-orange)]">
      {category === "Education" ? (
        <BookOpenCheck className="size-3.5" />
      ) : category === "Health" ? (
        <Heart className="size-3.5" />
      ) : category === "Community" ? (
        <UserRoundCheck className="size-3.5" />
      ) : (
        <CameraDot />
      )}
    </span>
  );
}
