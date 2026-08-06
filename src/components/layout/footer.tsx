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
  const isContact = pathname === "/contact";

  return (
    <footer className="bg-white px-5 pb-6 pt-10 text-[var(--ches-ink)]">
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-9 border-b border-[#e4e9e7] pb-8",
          isContact ? "lg:grid-cols-[1.05fr_.55fr_.75fr_1.8fr_.9fr]" : "md:grid-cols-[1.05fr_.65fr_.85fr_1.6fr]",
        )}
      >
        <div>
          <Link href="/" aria-label="CHES home">
            <span className="flex items-center gap-2.5">
              <span className="relative grid size-10 overflow-hidden rounded-full border border-[var(--ches-blue)]/10 bg-white">
                <Image src="/Assets/Donor logo/CHES LOGO.jpg" alt={`${site.fullName} logo`} fill className="object-cover p-0.5" />
              </span>
              <span>
                <span className="block font-heading text-2xl font-semibold leading-none text-[var(--ches-blue)]">CHES</span>
                <span className="block max-w-[150px] text-[0.45rem] font-bold uppercase leading-[1.15] tracking-[0.1em] text-[var(--ches-ink)]/70">Community Health Education Society</span>
              </span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-xs leading-5 text-[var(--ches-muted)]">CHES is committed to improving the lives of vulnerable children, women, and communities through healthcare, education, child protection, and empowerment programmes.</p>
          <div className="mt-4 flex gap-2">
            {footerSocials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid size-8 place-items-center rounded-full bg-[#edf3f1] text-[var(--ches-blue)] transition hover:bg-[var(--ches-orange)] hover:text-white"
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-[var(--ches-blue)]">Quick Links</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-[var(--ches-muted)] transition hover:text-[var(--ches-orange)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-[var(--ches-blue)]">Our Focus</h2>
          <div className="mt-4 grid gap-2 text-sm text-[var(--ches-muted)]">
            <span>Health</span>
            <span>Education</span>
            <span>Child Protection</span>
            <span>Women Empowerment</span>
            <span>Community Development</span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-[var(--ches-blue)]">Get In Touch</h2>
          <div className="mt-4 grid gap-3 text-xs leading-5 text-[var(--ches-muted)]">
            <address className="not-italic">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-[#e4ece8] bg-[#fbfdfc] p-3 shadow-[0_8px_22px_rgb(11_78_109/0.04)]">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--ches-blue)]/8 text-[var(--ches-blue)]">
                      <MapPin className="size-3.5" />
                    </span>
                    <span className="font-bold text-[var(--ches-blue)]">Sakthi Illam</span>
                  </div>
                  {site.addressLines.slice(1).map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </div>
                <div className="rounded-lg border border-[#eadfcb] bg-[#fffaf0] p-3 shadow-[0_8px_22px_rgb(94_67_34/0.04)]">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--ches-orange)]/12 text-[var(--ches-orange)]">
                      <MapPin className="size-3.5" />
                    </span>
                    <span className="font-bold text-[var(--ches-blue)]">Anandha Illam</span>
                  </div>
                  {site.anandhaIllamAddressLines.slice(1).map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </div>
              </div>
            </address>
            <p className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-[var(--ches-blue)]" /> {site.phone}</p>
            <p className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0 text-[var(--ches-blue)]" /> {site.email}</p>
          </div>
          {!isContact ? <form className="mt-5 flex overflow-hidden rounded-lg border border-[#dce5e2] bg-white p-1">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Enter your email" className="min-w-0 flex-1 px-3 text-xs outline-none" />
            <button type="submit" aria-label="Subscribe" className="grid size-8 place-items-center rounded-md bg-[var(--ches-blue)] text-white transition hover:bg-[var(--ches-orange)]"><ArrowRight className="size-4" /></button>
          </form> : null}
        </div>

        {isContact ? (
          <div>
            <h2 className="text-sm font-bold text-[var(--ches-blue)]">Stay Updated</h2>
            <p className="mt-4 text-sm text-[var(--ches-muted)]">Subscribe to our newsletter</p>
            <form className="mt-4 flex overflow-hidden rounded-lg border border-[#dce5e2] bg-white p-1">
              <label className="sr-only" htmlFor="contact-newsletter-email">Email address</label>
              <input id="contact-newsletter-email" type="email" placeholder="Enter your email" className="min-w-0 flex-1 px-3 text-xs text-[#102433] outline-none" />
              <button type="submit" aria-label="Subscribe" className="grid size-8 place-items-center rounded-md bg-[#e67a12] text-white transition hover:bg-[#f08c26]"><ArrowRight className="size-4" /></button>
            </form>
            <p className="mt-4 font-script text-2xl leading-none text-[var(--ches-green)]">Alone we can do so little;<br />together we can do so much.<br /><span className="text-base text-[var(--ches-muted)]">- Helen Keller</span></p>
          </div>
        ) : null}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 pt-5 text-[0.68rem] text-[var(--ches-muted)] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.fullName}. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
}
