"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { site } from "@/data/site";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["No. 2, McNichols Road,", "Chetpet, Chennai – 600 031,", "Tamil Nadu, India"],
    accent: "navy",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 44 2836 1904", "+91 44 2836 2994"],
    accent: "orange",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email, "programs@ches.org.in"],
    accent: "navy",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:30 AM – 6:30 PM", "Sunday: Closed"],
    accent: "orange",
  },
] as const;

const trustItems = [
  { icon: ShieldCheck, title: "Secure Donations", body: "100% safe and secure donations" },
  { icon: Building2, title: "Transparent Impact", body: "Regular updates on how your support helps" },
  { icon: MessageCircle, title: "Tax Benefits", body: "80G certified. Avail tax exemptions." },
  { icon: UsersRound, title: "Trusted NGO", body: "30+ years of trust and compassion" },
];

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page overflow-hidden bg-[#fffdf9] text-[#102433]">
      <section className="contact-hero relative isolate overflow-hidden pt-20 text-white">
        <Image
          src="/placeholders/contact-hero-fresh.png"
          alt="Smiling children gathered at a CHES community learning space"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,41,57,.96)_0%,rgba(0,44,61,.86)_29%,rgba(0,44,61,.2)_62%,rgba(0,0,0,.03)_100%)]" />
        <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center px-5 py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-[600px]">
            <div className="mb-4 flex items-center gap-3 text-[var(--ches-orange)]">
              <Heart className="size-7 rotate-[-12deg]" />
              <p className="font-script text-3xl font-semibold">We&apos;re here for you</p>
            </div>
            <h1 className="font-heading text-5xl font-semibold leading-[.98] md:text-[4.6rem]">Let&apos;s Connect<br />&amp; Create Change</h1>
            <p className="mt-6 max-w-[440px] text-base leading-7 text-white/90 md:text-lg">Whether you want to collaborate, volunteer, donate or learn more about our work, we would love to hear from you.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/donate" className="primary-cta h-12 bg-[#f17616] px-6 hover:bg-[#df5f0c]">Donate Now <Heart className="size-4 fill-current" /></Link>
              <Link href="/projects" className="inline-flex h-12 items-center gap-3 rounded-full px-3 text-sm font-bold text-white transition hover:text-[var(--ches-orange)]">
                <span className="grid size-9 place-items-center rounded-full border border-[var(--ches-orange)] text-[var(--ches-orange)]"><Sparkles className="size-4" /></span>
                See Our Impact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-9 max-w-[1180px] px-5">
        <div className="grid overflow-hidden rounded-[1.4rem] border border-[#e8dfd3] bg-[#fffaf2] shadow-[0_18px_48px_rgb(10_34_43/0.12)] md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <div key={card.title} className="flex min-h-[142px] items-start gap-4 border-b border-[#eadfd2] px-6 py-6 last:border-0 md:border-r md:[&:nth-child(2n)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2n)]:border-r xl:last:border-r-0">
              <span className={`grid size-12 shrink-0 place-items-center rounded-full text-white ${card.accent === "orange" ? "bg-[#e58218]" : "bg-[#003b53]"}`}>
                <card.icon className="size-6" />
              </span>
              <div>
                <h2 className="text-base font-bold">{card.title}</h2>
                <div className="mt-2 grid gap-1 text-xs leading-5 text-[#17262e]/76">
                  {card.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-8 md:py-14">
        <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[1.4rem] border border-[#eee7df] bg-[#fffdf9] shadow-[0_12px_42px_rgb(17_41_50/0.06)] lg:grid-cols-[1fr_1fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <p className="eyebrow text-[#e66f10]">Let&apos;s talk</p>
            <h2 className="mt-2 font-heading text-4xl font-semibold leading-tight md:text-[2.8rem]">Send Us a Message</h2>
            <span className="mt-3 block h-0.5 w-10 bg-[#e66f10]" />
            <p className="mt-6 text-sm leading-6 text-[#182a34]/85">Have a question or want to get involved?<br />Fill out the form and our team will get back to you.</p>

            <form className="mt-6 grid gap-2.5" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="contact-name">Your Name</label>
              <input id="contact-name" name="name" required placeholder="Your Name *" className="contact-field" />
              <label className="sr-only" htmlFor="contact-email">Your Email</label>
              <input id="contact-email" name="email" required type="email" placeholder="Your Email *" className="contact-field" />
              <label className="sr-only" htmlFor="contact-phone">Phone Number</label>
              <input id="contact-phone" name="phone" placeholder="Phone Number" className="contact-field" />
              <label className="sr-only" htmlFor="contact-topic">I want to connect about</label>
              <select id="contact-topic" name="topic" defaultValue="" className="contact-field appearance-none">
                <option value="" disabled>I want to connect about...</option>
                <option>Volunteering</option>
                <option>Donations</option>
                <option>Partnerships</option>
                <option>Program enquiries</option>
              </select>
              <label className="sr-only" htmlFor="contact-message">Your Message</label>
              <textarea id="contact-message" name="message" required placeholder="Your Message *" className="contact-field min-h-[112px] resize-y" />
              <label className="mt-1 flex items-start gap-2 text-xs leading-5 text-[#182a34]/78">
                <input type="checkbox" required className="mt-1 size-4 accent-[#e66f10]" />
                <span>I agree to the <Link href="#privacy" className="text-[#e66f10]">Privacy Policy</Link> and <Link href="#terms" className="text-[#e66f10]">Terms of Use.</Link></span>
              </label>
              <div className="mt-2 flex items-center justify-between gap-4">
                <button type="submit" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#003b53] px-5 text-sm font-bold text-white transition hover:bg-[#00506c]">
                  <Send className="size-4" /> Send Message
                </button>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.p initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-1.5 text-xs font-semibold text-[#47785b]">
                      <CheckCircle2 className="size-4" /> Thanks, we&apos;ll be in touch.
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </form>
          </div>

          <div className="border-t border-[#eee7df] p-7 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <p className="eyebrow text-[#e66f10]">Our Chennai office</p>
            <h2 className="mt-2 font-heading text-4xl font-semibold leading-tight md:text-[2.8rem]">Find Us</h2>
            <span className="mt-3 block h-0.5 w-10 bg-[#e66f10]" />
            <div className="contact-map mt-6 overflow-hidden rounded-xl border border-[#e8e3dc]">
              <div className="contact-map-labels" aria-hidden="true">
                <span className="left-[12%] top-[28%]">Government College of Fine Arts</span>
                <span className="left-[42%] top-[76%]">Chetpet</span>
                <span className="right-[8%] top-[18%]">Chennai Central</span>
                <span className="right-[10%] bottom-[24%] text-[#0a76c1]">Spencer Plaza</span>
              </div>
              <div className="contact-map-pin"><MapPin className="size-8 fill-[#003b53] text-[#003b53]" /></div>
              <div className="contact-map-card">
                <p className="font-bold">CHES</p>
                <p className="mt-1 text-[10px] leading-4">No. 2, McNichols Road,<br />Chetpet, Chennai – 600 031,<br />Tamil Nadu, India</p>
              </div>
              <div className="contact-map-zoom" aria-hidden="true"><span>+</span><span>−</span></div>
            </div>
            <div className="mt-0 rounded-b-xl bg-[#003b53] p-6 text-white md:p-7">
              <div className="flex gap-5">
                <Building2 className="mt-1 size-10 shrink-0 text-[#ef7b12]" />
                <div>
                  <h3 className="font-heading text-2xl font-semibold">Our Office</h3>
                  <p className="mt-3 text-sm leading-6 text-white/82">We&apos;d love to meet you! Visit our office to learn more about our programs, partnerships, or how you can help.</p>
                  <a href="https://maps.google.com/?q=CHES+McNichols+Road+Chennai" target="_blank" rel="noreferrer" className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg border border-[#e88118] px-4 text-xs font-bold text-white transition hover:bg-[#e88118]">
                    Get Directions <Navigation className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#eadfce] bg-[#f8f0e2] px-5 py-0">
        <div className="mx-auto grid max-w-[1180px] items-center lg:grid-cols-[.8fr_1.05fr_1.2fr]">
          <div className="relative min-h-[290px] overflow-hidden lg:min-h-[305px]">
            <Image src="/placeholders/contact-kindness-fresh.png" alt="A child caring for a young plant" fill className="object-cover object-left" sizes="(min-width: 1024px) 30vw, 100vw" />
          </div>
          <div className="py-9 lg:px-8">
            <h2 className="max-w-[330px] font-heading text-4xl font-semibold leading-[1.03] md:text-[2.55rem]">Your Kindness<br />Can Change a Life</h2>
            <p className="mt-4 max-w-[350px] text-sm leading-6 text-[#182a34]/82">Every contribution helps us provide healthcare, education, protection and hope to children who need it the most.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/donate" className="primary-cta bg-[#ed7912] hover:bg-[#d96309]">Donate Now <Heart className="size-4 fill-current" /></Link>
              <Link href="/projects" className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#152b36] px-5 text-sm font-bold text-[#152b36] transition hover:bg-[#152b36] hover:text-white">See Our Impact <ArrowRight className="size-4" /></Link>
            </div>
          </div>
          <div className="grid gap-x-7 gap-y-7 border-t border-[#d9ccb9] py-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="size-8 shrink-0 text-[#e67a12]" />
                <div><h3 className="text-sm font-bold">{item.title}</h3><p className="mt-1 text-xs leading-5 text-[#182a34]/76">{item.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
