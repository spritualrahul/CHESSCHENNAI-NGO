"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { storyImages } from "@/data/home";
import { duration, ease, stagger } from "@/lib/motion-tokens";

type CtaBandProps = {
  title?: string;
  body?: string;
  image?: {
    src: string;
    alt: string;
    position?: string;
  };
};

export function CtaBand({
  title = "Your Kindness Can Change a Child's Tomorrow",
  body = "Every contribution helps provide education, healthcare, protection, and hope to children who need it most.",
  image = storyImages.cta,
}: CtaBandProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[var(--ches-blue)] px-5 py-12 text-white md:py-14">
      <motion.div
        className="absolute inset-0"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <Image src={image.src} alt={image.alt} fill className="object-cover opacity-45" style={{ objectPosition: image.position }} sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,47,65,.98),rgba(7,47,65,.88)_42%,rgba(7,47,65,.26))]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: stagger.medium,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {/* Heart icon with subtle pulse */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: duration.medium, ease: ease.smooth }}
          >
            <Heart className="size-9 fill-[var(--ches-gold)] text-[var(--ches-gold)]" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="mt-4 max-w-xl font-heading text-4xl font-semibold leading-[1.04] md:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: duration.slow, ease: ease.smooth }}
          >
            {title}
          </motion.h2>

          {/* Body */}
          <motion.p
            className="mt-4 max-w-lg text-sm leading-6 text-white/85 md:text-base"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: duration.medium, ease: ease.out }}
          >
            {body}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: duration.medium, ease: ease.out }}
          >
            <Link href="/donate" className="primary-cta">
              Donate Now <Heart className="size-4 fill-current" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
