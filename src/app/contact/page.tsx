import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Send, Share2, Users } from "lucide-react";

import { AnimatedSection } from "@/components/shared/animated-section";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { sectionImages, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact CHES for donations, volunteering, partnerships and program enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Start a conversation that can become care."
        body="Reach CHES for donations, volunteering, partnerships, visits and program enquiries."
        image={sectionImages.contact}
      />
      <AnimatedSection className="px-5">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Visit or write"
              title="We would love to hear from you."
              body="Use the contact details or send a message. Map and social links are placeholders ready for final CHES accounts."
            />
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: site.phone },
                { icon: Mail, label: site.email },
                { icon: MapPin, label: site.address },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-lg shadow-black/[0.04]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[var(--ches-orange)]/16 text-[#9b520b]">
                    <item.icon className="size-5" />
                  </span>
                  <p className="font-bold text-[var(--ches-charcoal)]">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {[Share2, MessageCircle, Users].map((Icon, index) => (
                <a key={index} href="#" aria-label="Social profile" className="grid size-12 place-items-center rounded-full bg-[var(--ches-blue)] text-white transition hover:bg-[var(--ches-orange)] hover:text-[#2d1b0d]">
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-black/[0.06] md:p-8">
            <form className="grid gap-4">
              <label>
                <span className="field-label">Name</span>
                <input className="field-control" required />
              </label>
              <label>
                <span className="field-label">Email</span>
                <input type="email" className="field-control" required />
              </label>
              <label>
                <span className="field-label">Phone</span>
                <input className="field-control" />
              </label>
              <label>
                <span className="field-label">Message</span>
                <textarea className="field-control min-h-36 resize-y" required />
              </label>
              <button type="submit" className="primary-cta w-full md:w-auto">
                Send Message
                <Send className="size-5" />
              </button>
            </form>
            <div className="mt-8 grid min-h-72 place-items-center rounded-[1.5rem] border border-dashed border-[var(--ches-blue)]/20 bg-[var(--ches-warm-white)] text-center">
              <div>
                <MapPin className="mx-auto size-12 text-[var(--ches-blue)]/64" />
                <p className="mt-3 font-heading text-2xl font-bold text-[var(--ches-blue)]">Google Map Placeholder</p>
                <p className="mt-2 text-sm font-semibold text-[var(--ches-charcoal)]/60">Embed the live CHES map here later.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <CtaBand title="Partner with CHES to protect more children." />
    </>
  );
}
