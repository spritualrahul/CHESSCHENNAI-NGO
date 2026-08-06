"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Heart,
  HeartHandshake,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { site } from "@/data/site";

const trustItems = [
  { icon: ShieldCheck, title: "Give with confidence", body: "Your support is handled with care and transparency." },
  { icon: HeartHandshake, title: "Join the work", body: "Connect with our team about partnerships and programmes." },
  { icon: BadgeCheck, title: "Make an impact", body: "Every conversation can help a child move forward." },
];

const donorAssurances = [
  { icon: ShieldCheck, title: "Secure Donations", body: "100% safe and secure donations" },
  { icon: HeartHandshake, title: "Transparent Impact", body: "Regular updates on how your support helps" },
  { icon: BadgeCheck, title: "Trusted NGO", body: "30+ years of trust and compassion" },
];

export function ContactPageContent() {
  const [activeContact, setActiveContact] = useState<string | null>(null);

  return (
    <div className="contact-page overflow-hidden bg-[#fffdf8] text-[#2f261b]">
      <section className="contact-hero relative isolate overflow-hidden bg-[var(--ches-sky)] pt-20 text-[#2f261b]">
        <Image
          src="/placeholders/contact-hero-fresh.png"
          alt="Smiling children gathered at a CHES community learning space"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,249,252,.98)_0%,rgba(242,249,252,.94)_34%,rgba(242,249,252,.58)_66%,rgba(242,249,252,.1)_100%)]" />
        <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center px-5 py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-[600px]">
            <div className="mb-4 flex items-center gap-3 text-[var(--ches-orange)]">
              <Heart className="size-7 rotate-[-12deg]" />
              <p className="font-script text-3xl font-semibold">We&apos;re here for you</p>
            </div>
            <h1 className="font-heading text-5xl font-semibold leading-[.98] md:text-[4.6rem]">Let&apos;s Connect<br />&amp; Create Change</h1>
            <p className="mt-6 max-w-[440px] text-base leading-7 text-[#463d31]/82 md:text-lg">Whether you want to collaborate, volunteer, donate or learn more about our work, we would love to hear from you.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/donate" className="primary-cta h-12 px-6">Donate Now <Heart className="size-4 fill-current" /></Link>
              <Link href="/projects" className="inline-flex h-12 items-center gap-3 rounded-full px-3 text-sm font-bold text-[#4a3a26] transition hover:text-[var(--ches-orange)]">
                <span className="grid size-9 place-items-center rounded-full border border-[var(--ches-orange)] text-[var(--ches-orange)]"><Sparkles className="size-4" /></span>
                See Our Impact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-[1180px] px-5 pb-14 md:-mt-16 md:pb-20">
        <div className="overflow-hidden rounded-[1.5rem] border border-[#eadfcb] bg-white shadow-[0_22px_60px_rgb(94_67_34/0.10)]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative overflow-hidden bg-[var(--ches-sky)] p-7 text-[#2f261b] md:p-11">
              <div className="absolute -right-20 -top-24 size-64 rounded-full border border-[#d89a2b]/20" />
              <div className="absolute -bottom-32 -left-20 size-72 rounded-full border border-[#47785b]/18" />
              <div className="relative">
                <p className="eyebrow text-[#c87517]">A direct line to care</p>
                <h2 className="mt-3 max-w-[510px] font-heading text-4xl font-semibold leading-[1.04] md:text-[3.35rem]">Every conversation can open a door to hope.</h2>
                <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#4b4033]/78 md:text-base">Whether you are planning a donation, exploring a partnership or simply want to understand our work, our team is ready to speak with you.</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <ContactAction icon={Phone} label="Call CHES" href="tel:04424726655" value="044 - 24726655" onActivate={() => setActiveContact("phone")} active={activeContact === "phone"} />
                  <ContactAction icon={Mail} label="Email CHES" href="mailto:ches_cheschennai@yahoo.co.in" value="ches_cheschennai@yahoo.co.in" onActivate={() => setActiveContact("email")} active={activeContact === "email"} />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5f5245]">
                  <span className="font-extrabold uppercase tracking-[0.12em] text-[#c87517]">Other office lines</span>
                  <a href="tel:04424731283" className="font-semibold transition hover:text-[#c87517]">044 - 24731283</a>
                  <a href="tel:9940033249" className="font-semibold transition hover:text-[#c87517]">9940033249</a>
                </div>

                <div className="mt-7 rounded-xl border border-[#e6d7bd] bg-white/65 p-4 shadow-[0_12px_32px_rgb(115_82_39/0.08)]">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#c87517]">Call Dr. P. Manorama</p>
                  <p className="mt-2 text-sm font-bold text-[#2f261b]">MD; DCH; DM(Gastro)</p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#4b4033]/78">
                    <a href="tel:+919444077177" className="font-semibold transition hover:text-[#c87517]">+91 - 9444077177</a>
                    <a href="mailto:pmanorama54@gmail.com" className="font-semibold transition hover:text-[#c87517]">pmanorama54@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fffaf0] p-7 md:p-11">
              <div className="relative h-36 overflow-hidden rounded-xl bg-[#efe6d2]">
                <Image src="/Assets/About/ches-children-care.jpeg" alt="Children receiving care and support through CHES" fill className="object-cover object-center" sizes="(min-width: 1024px) 40vw, 100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(77,57,31,.78),rgba(77,57,31,.06))]" />
                <div className="absolute inset-x-5 bottom-4">
                  <p className="font-script text-3xl font-semibold text-white">Come and meet the work.</p>
                </div>
              </div>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#e58218] text-white"><MapPin className="size-5" /></span>
                <div>
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#e58218]">Visit Us</p>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-[#3c3020]">Our Chennai office</h3>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <AddressCard
                  title="Sakthi Illam"
                  lines={site.addressLines}
                  visitLabel="Office visits"
                  visitValue="Mon to Saturday"
                />
                <AddressCard
                  title="Anandha Illam"
                  lines={site.anandhaIllamAddressLines}
                  visitLabel="Anandha Illam visits"
                  visitValue="Throughout the week"
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <ContactDetail icon={Clock3} label="Working hours" value="10 am to 5 pm" />
                <ContactDetail icon={HeartHandshake} label="Visit information" value="Prior information requested" />
              </div>
              <div className="mt-3 rounded-lg border border-[#e8d6bd] bg-white/75 p-3">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#e58218]">Prior information</p>
                <p className="mt-1 text-sm font-bold leading-5 text-[#3c3020]">Mr. P. Muthupandian</p>
                <a href="tel:+919791655519" className="mt-1 inline-block text-sm font-semibold text-[#3c3020] transition hover:text-[#e58218]">+91 - 9791655519</a>
              </div>
              <a href="https://maps.google.com/?q=Sakthi+Illam+21%2F8+5th+Cross+Street+United+India+Colony+Kodambakkam+Chennai+600024" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#3c3020] transition hover:text-[#e58218]">
                Open directions <Navigation className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid border-t border-[#eadfcb] bg-[#fff8ec] sm:grid-cols-3">
            {donorAssurances.map((item) => (
              <div key={item.title} className="flex gap-3 border-b border-[#eadfcb] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-7">
                <item.icon className="mt-0.5 size-7 shrink-0 text-[#e58218]" />
                <div><h3 className="text-sm font-extrabold text-[#3c3020]">{item.title}</h3><p className="mt-1 text-xs leading-5 text-[#4b4033]/68">{item.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#eadfce] bg-[#f8f0e2] px-5 py-0">
        <div className="mx-auto grid max-w-[1180px] items-center lg:grid-cols-[.8fr_1.05fr_1.2fr]">
          <div className="relative min-h-[290px] overflow-hidden lg:min-h-[305px]">
            <Image src="/Assets/Galary/Seed balls planting (4).jpeg" alt="CHES children planting a seedling together" fill className="object-cover object-center" sizes="(min-width: 1024px) 30vw, 100vw" />
          </div>
          <div className="py-9 lg:px-8">
            <h2 className="max-w-[330px] font-heading text-4xl font-semibold leading-[1.03] md:text-[2.55rem]">Your Kindness<br />Can Change a Life</h2>
            <p className="mt-4 max-w-[350px] text-sm leading-6 text-[#4b4033]/82">Every contribution helps us provide healthcare, education, protection and hope to children who need it the most.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/donate" className="primary-cta">Donate Now <Heart className="size-4 fill-current" /></Link>
              <Link href="/projects" className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#8c6e40] px-5 text-sm font-bold text-[#5a4428] transition hover:bg-[#8c6e40] hover:text-white">See Our Impact <ArrowRight className="size-4" /></Link>
            </div>
          </div>
          <div className="grid gap-x-7 gap-y-7 border-t border-[#d9ccb9] py-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="size-8 shrink-0 text-[#e67a12]" />
                <div><h3 className="text-sm font-bold">{item.title}</h3><p className="mt-1 text-xs leading-5 text-[#4b4033]/76">{item.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AddressCard({ title, lines, visitLabel, visitValue }: { title: string; lines: string[]; visitLabel: string; visitValue: string }) {
  return (
    <div className="rounded-lg border border-[#e8d6bd] bg-white/75 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#e58218]">{title}</p>
          <address className="mt-2 not-italic text-sm font-bold leading-6 text-[#3c3020]">
            {lines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
        </div>
        <MapPin className="mt-1 size-5 shrink-0 text-[#e58218]" />
      </div>
      <div className="mt-3 rounded-md bg-[#fff7e8] px-3 py-2 text-xs font-bold text-[#5a4428]">
        <span className="text-[#c87517]">{visitLabel}:</span> {visitValue}
      </div>
    </div>
  );
}

function ContactAction({
  icon: Icon,
  label,
  href,
  value,
  onActivate,
  active,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
  value: string;
  onActivate: () => void;
  active: boolean;
}) {
  return (
    <a href={href} onClick={onActivate} className={`group min-w-0 rounded-xl border p-4 shadow-[0_10px_26px_rgb(112_78_36/0.06)] transition hover:-translate-y-0.5 hover:border-[#d89a2b] ${active ? "border-[#d89a2b] bg-white/90" : "border-[#e6d7bd] bg-white/62"}`}>
      <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#c87517]"><Icon className="size-4" />{label}</span>
      <span className="mt-2 block break-words text-sm font-bold leading-5 text-[#3c3020] group-hover:text-[#c87517]">{value}</span>
    </a>
  );
}

function ContactDetail({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#e8d6bd] bg-white/75 p-3">
      <div className="flex items-center gap-2 text-[#e58218]"><Icon className="size-4" /><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em]">{label}</p></div>
      <p className="mt-2 text-sm font-bold leading-5 text-[#3c3020]">{value}</p>
    </div>
  );
}
