import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the CHES website and online donation information.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#fffdf8] px-5 pb-20 pt-28 text-[#3b3023]">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#eadfcb] bg-white shadow-[0_14px_36px_rgb(94_67_34/0.07)]">
        <header className="border-b border-[#eadfcb] bg-[#fff8ec] px-6 py-8 md:px-10">
          <p className="eyebrow text-[#c87517]">Website terms</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-[#3c3020] md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-sm leading-6 text-[#635747]">These terms apply to your use of the Community Health Education Society (CHES) website and its online donation information.</p>
          <p className="mt-4 text-xs font-bold text-[#786a57]">Last updated {site.privacyEffectiveDate}</p>
        </header>

        <div className="space-y-8 px-6 py-8 text-sm leading-7 md:px-10">
          <TermsSection title="1. About this website"><p>CHES provides information about its work, programmes, contact channels and donation methods. You may use the website for lawful, personal and charitable purposes. Content may change as programmes, bank details, tax requirements or contact information are updated.</p></TermsSection>
          <TermsSection title="2. Donations and payment"><p>Donation details are provided for convenience. Before transferring funds, verify the account name and current details shown on the website. A static QR or bank transfer does not by itself confirm that payment was received. A donation record created through the website is marked pending until CHES manually reconciles the payment.</p><p className="mt-3">CHES does not collect your bank login, card number or UPI PIN through this website. You are responsible for checking the recipient in your bank or UPI app before confirming a payment. Tax benefits and receipts are subject to applicable law and CHES’s eligibility and documentation requirements.</p></TermsSection>
          <TermsSection title="3. Information you submit"><p>Only provide information that is accurate and necessary for the requested service. Do not submit a child’s personal, medical, HIV, safeguarding or case information through a public form. Do not email Aadhaar or other identity documents unless CHES has verified the need and provided a secure submission method.</p><p className="mt-3">Our collection and use of personal data is described in the <Link className="font-extrabold text-[#276047] underline underline-offset-2" href="/privacy">Privacy Notice</Link>, which forms part of these terms.</p></TermsSection>
          <TermsSection title="4. Acceptable use"><p>You must not misuse the website, attempt unauthorised access, introduce malicious code, interfere with its availability, impersonate another person, submit false donation information, or use content in a way that harms CHES or the people it serves.</p></TermsSection>
          <TermsSection title="5. Content and third-party links"><p>CHES owns or is authorised to use the website text, branding, photographs and other content unless otherwise stated. You may view and share links to public pages for non-commercial purposes with appropriate attribution. Do not copy, alter or commercially exploit content without written permission.</p><p className="mt-3">The website may link to banks, UPI services, maps, government pages or other third parties. CHES does not control those services and is not responsible for their content, availability, security or privacy practices. Review their terms before using them.</p></TermsSection>
          <TermsSection title="6. Availability and disclaimers"><p>We work to keep the website accurate, secure and available, but we do not promise that it will always be uninterrupted or error-free. Website information is general information about CHES and is not medical, financial, tax or legal advice. Do not use the website for an emergency; contact the appropriate emergency or public service.</p></TermsSection>
          <TermsSection title="7. Changes and governing law"><p>We may update these terms when the website or applicable requirements change. The current version is published on this page. These terms are governed by the laws of India, subject to any mandatory rights or remedies available under applicable law.</p></TermsSection>
          <TermsSection title="8. Contact"><p>Questions about these terms may be sent to <a className="font-extrabold text-[#276047] underline underline-offset-2" href={`mailto:${site.email}`}>{site.email}</a>. Privacy requests and complaints should follow the process in the <Link className="font-extrabold text-[#276047] underline underline-offset-2" href="/privacy">Privacy Notice</Link>.</p></TermsSection>
        </div>
      </article>
    </main>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="font-heading text-2xl font-semibold leading-tight text-[#3c3020]">{title}</h2><div className="mt-3 text-[#635747]">{children}</div></section>;
}
