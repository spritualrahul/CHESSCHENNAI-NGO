"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { footerSocials } from "@/data/home";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();
  const isDark = pathname === "/gallery" || pathname === "/contact";
  const isContact = pathname === "/contact";

  return (
    <footer
      className={cn(
        "px-5 pb-6 pt-10",
        isDark
          ? "bg-[linear-gradient(135deg,#053852_0%,#062b45_54%,#041f35_100%)] text-white"
          : "bg-white text-[var(--ches-ink)]",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-9 border-b pb-8",
          isContact ? "lg:grid-cols-[1.25fr_.7fr_.9fr_1.2fr_1fr]" : "md:grid-cols-[1.3fr_.75fr_1.1fr_1fr]",
          isDark ? "border-white/14" : "border-[#e4e9e7]",
        )}
      >
        <div>
          <Link href="/" aria-label="CHES home">
            <span className="flex items-center gap-2.5">
              <span className={cn("relative grid size-10 overflow-hidden rounded-full border bg-white", isDark ? "border-white/20" : "border-[var(--ches-blue)]/10")}>
                <Image src="/Assets/Donor logo/CHES LOGO.jpg" alt={`${site.fullName} logo`} fill className="object-cover p-0.5" />
              </span>
              <span>
                <span className={cn("block font-heading text-2xl font-semibold leading-none", isDark ? "text-white" : "text-[var(--ches-blue)]")}>CHES</span>
                <span className={cn("block max-w-[150px] text-[0.45rem] font-bold uppercase leading-[1.15] tracking-[0.1em]", isDark ? "text-white/70" : "text-[var(--ches-ink)]/70")}>Community Health Education Society</span>
              </span>
            </span>
          </Link>
          <p className={cn("mt-3 max-w-xs text-xs leading-5", isDark ? "text-white/76" : "text-[var(--ches-muted)]")}>CHES is committed to improving the lives of vulnerable children, women, and communities through healthcare, education, child protection, and empowerment programmes.</p>
          <div className="mt-4 flex gap-2">
            {footerSocials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={cn(
                  "grid size-8 place-items-center rounded-full transition hover:bg-[var(--ches-orange)] hover:text-white",
                  isDark ? "bg-white/8 text-white" : "bg-[#edf3f1] text-[var(--ches-blue)]",
                )}
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className={cn("text-sm font-bold", isDark ? "text-white" : "text-[var(--ches-blue)]")}>Quick Links</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={cn("text-sm transition hover:text-[var(--ches-orange)]", isDark ? "text-white/72" : "text-[var(--ches-muted)]")}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className={cn("text-sm font-bold", isDark ? "text-white" : "text-[var(--ches-blue)]")}>Our Focus</h2>
          <div className={cn("mt-4 grid gap-2 text-sm", isDark ? "text-white/72" : "text-[var(--ches-muted)]")}>
            <span>Health</span>
            <span>Education</span>
            <span>Child Protection</span>
            <span>Women Empowerment</span>
            <span>Community Development</span>
          </div>
        </div>

        <div>
          <h2 className={cn("text-sm font-bold", isDark ? "text-white" : "text-[var(--ches-blue)]")}>Get In Touch</h2>
          <div className={cn("mt-4 grid gap-3 text-xs leading-5", isDark ? "text-white/72" : "text-[var(--ches-muted)]")}>
            <p className="flex gap-2"><MapPin className={cn("mt-0.5 size-4 shrink-0", isDark ? "text-[var(--ches-gold)]" : "text-[var(--ches-blue)]")} /> {site.address}</p>
            <p className="flex gap-2"><Phone className={cn("mt-0.5 size-4 shrink-0", isDark ? "text-[var(--ches-gold)]" : "text-[var(--ches-blue)]")} /> {site.phone}</p>
            <p className="flex gap-2"><Mail className={cn("mt-0.5 size-4 shrink-0", isDark ? "text-[var(--ches-gold)]" : "text-[var(--ches-blue)]")} /> {site.email}</p>
          </div>
          {!isContact ? <form className="mt-5 flex overflow-hidden rounded-lg border border-[#dce5e2] bg-white p-1">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Enter your email" className="min-w-0 flex-1 px-3 text-xs outline-none" />
            <button type="submit" aria-label="Subscribe" className="grid size-8 place-items-center rounded-md bg-[var(--ches-blue)] text-white transition hover:bg-[var(--ches-orange)]"><ArrowRight className="size-4" /></button>
          </form> : null}
          {isDark && !isContact ? (
            <Link href="/donate" className="primary-cta mt-5 w-full">
              Donate Now
            </Link>
          ) : null}
        </div>

        {isContact ? (
          <div>
            <h2 className="text-sm font-bold text-white">Stay Updated</h2>
            <p className="mt-4 text-sm text-white/72">Subscribe to our newsletter</p>
            <form className="mt-4 flex overflow-hidden rounded-lg border border-white/20 bg-white p-1">
              <label className="sr-only" htmlFor="contact-newsletter-email">Email address</label>
              <input id="contact-newsletter-email" type="email" placeholder="Enter your email" className="min-w-0 flex-1 px-3 text-xs text-[#102433] outline-none" />
              <button type="submit" aria-label="Subscribe" className="grid size-8 place-items-center rounded-md bg-[#e67a12] text-white transition hover:bg-[#f08c26]"><ArrowRight className="size-4" /></button>
            </form>
            <p className="mt-4 font-script text-2xl leading-none text-white/76">Alone we can do so little;<br />together we can do so much.<br /><span className="text-base">– Helen Keller</span></p>
          </div>
        ) : null}
      </div>
      <div className={cn("mx-auto flex max-w-6xl flex-col gap-2 pt-5 text-[0.68rem] md:flex-row md:items-center md:justify-between", isDark ? "text-white/66" : "text-[var(--ches-muted)]")}>
        <p>© {new Date().getFullYear()} {site.fullName}. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
}
