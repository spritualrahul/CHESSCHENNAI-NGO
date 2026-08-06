"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const donateHref = pathname === "/donate" ? "#donate-payment" : "/donate";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_2px_18px_rgb(15_23_42/0.08)]"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5" aria-label="Primary">
        <Link href="/" className="flex items-center" aria-label="CHES home">
          <span className="flex items-center gap-2.5">
            <span className="relative grid size-10 overflow-hidden rounded-full border border-[var(--ches-blue)]/10 bg-white">
              <Image src="/Assets/Donor logo/CHES LOGO.jpg" alt={`${site.fullName} logo`} fill priority sizes="40px" className="object-cover p-0.5" />
            </span>
            <span>
              <span className="block font-heading text-[1.65rem] font-semibold leading-none text-[var(--ches-blue)]">CHES</span>
              <span className="block max-w-[142px] text-[0.45rem] font-bold uppercase leading-[1.15] tracking-[0.12em] text-[var(--ches-ink)]/70">Community Health Education Society</span>
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition hover:text-[var(--ches-orange)]",
                  active ? "text-[var(--ches-orange)]" : "text-[var(--ches-ink)]/78",
                )}
              >
                {item.label}
                {active ? <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--ches-orange)]" /> : null}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link href={donateHref} className="primary-cta h-12 px-6">
            Donate Now <Heart className="size-4 fill-current" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "grid size-11 place-items-center rounded-full border lg:hidden",
            "border-[var(--ches-blue)]/15 bg-white text-[var(--ches-blue)]",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-[var(--ches-blue)]/10 bg-white px-5 pb-6 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 font-heading text-xl font-bold transition hover:bg-[#f2f8f8]",
                    pathname === item.href ? "text-[var(--ches-orange)]" : "text-[var(--ches-blue)]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href={donateHref} onClick={() => setOpen(false)} className="primary-cta w-full">
              Donate Now <Heart className="size-4 fill-current" />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
