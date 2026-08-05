"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { donors } from "@/data/donors";

export function DonorPartners() {
  return (
    <section className="border-t border-[#e7eceb] bg-white px-5 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-heading text-3xl font-semibold text-[var(--ches-blue)] md:text-4xl">Trusted by Leading Organizations</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--ches-muted)]">
            For over three decades, CHES has worked alongside respected organizations committed to improving children&apos;s lives.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {donors.map((donor, index) => (
            <motion.div
              key={donor.logo}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.24) }}
              className="group flex h-16 items-center justify-center px-2"
            >
              <Image
                src={donor.logo}
                alt={`${donor.name} logo`}
                width={180}
                height={80}
                loading="lazy"
                className="max-h-14 w-auto max-w-full object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
