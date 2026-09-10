"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems, site } from "@/data/site";
import { duration, ease, stagger } from "@/lib/motion-tokens";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const donateHref = pathname === "/donate" ? "#donate-payment" : "/donate";
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 32);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        prefersReducedMotion ? "" : "duration-500 ease-out",
        scrolled
          ? "bg-white/95 shadow-[0_2px_18px_rgb(15_23_42/0.08)] backdrop-blur-md"
          : "bg-white shadow-[0_2px_18px_rgb(15_23_42/0.08)]",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height]",
          prefersReducedMotion ? "" : "duration-500 ease-out",
          scrolled ? "h-16" : "h-20",
        )}
        aria-label="Primary"
      >
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
                  "nav-link relative py-2 text-sm font-medium transition hover:text-[var(--ches-orange)]",
                  active ? "text-[var(--ches-orange)]" : "text-[var(--ches-ink)]/78",
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--ches-orange)]"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                  />
                ) : null}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: ease.out }}
            className="overflow-hidden border-t border-[var(--ches-blue)]/10 bg-white lg:hidden"
          >
            <motion.div
              className="mx-auto grid max-w-7xl gap-2 px-5 py-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: stagger.fast,
                    delayChildren: 0.08,
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: duration.fast, ease: ease.out }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 font-heading text-xl font-bold transition hover:bg-[#f2f8f8]",
                      pathname === item.href ? "text-[var(--ches-orange)]" : "text-[var(--ches-blue)]",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="px-5 pb-6">
              <Link href={donateHref} onClick={() => setOpen(false)} className="primary-cta w-full">
                Donate Now <Heart className="size-4 fill-current" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
