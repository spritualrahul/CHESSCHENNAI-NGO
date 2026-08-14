import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "CHES Privacy Notice explaining how personal data is collected, used, protected and deleted.",
};

const rightsEmail = `mailto:${site.email}?subject=DPDP%20data%20request`;

export default function PrivacyPage() {
  return (
    <main className="bg-[#f7fbf8] px-5 pb-20 pt-28 text-[#193f38]">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#dce8df] bg-white shadow-[0_14px_36px_rgb(20_53_43/0.06)]">
        <header className="border-b border-[#e1e9e3] bg-[#f1f8f2] px-6 py-8 md:px-10">
          <p className="eyebrow text-[#b5780d]">Privacy and data protection</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-[#063d39] md:text-5xl">Privacy Notice</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#53635d]">This notice explains how Community Health Education Society (CHES) handles personal data on this website and through the online donation flow.</p>
          <p className="mt-4 text-xs font-bold text-[#667570]">Version {site.privacyNoticeVersion} · Effective {site.privacyEffectiveDate}</p>
        </header>

        <div className="space-y-9 px-6 py-8 text-sm leading-7 md:px-10">
          <PolicySection title="1. Who is responsible for your data?">
            <p>Community Health Education Society (CHES) is the Data Fiduciary for personal data that we decide to collect and use through this website. CHES is based in Chennai, Tamil Nadu, India.</p>
            <p className="mt-3">For privacy questions, requests, withdrawals of consent, or complaints to CHES, contact the authorised privacy contact at <a className="font-extrabold text-[#276047] underline underline-offset-2" href={rightsEmail}>{site.email}</a> or write to Sakthi Illam, 21/8, 5th Cross Street, United India Colony, Kodambakkam, Chennai - 600 024.</p>
          </PolicySection>

          <PolicySection title="2. What personal data do we collect?"><p>Depending on what you choose to do, we may process:</p><ul><li>Your name, email address, Indian mobile number and postal address when you use the online donation form.</li><li>Your donation amount, donation reference, payment status and payment receipt details that you choose to send to us.</li><li>Your PAN only when you choose to provide it or when it is required for a tax receipt or other lawful compliance purpose. PAN is not required for every donation.</li><li>Your consent record, including the privacy notice version and time at which you accepted the donation notice.</li><li>A random first-party visitor identifier stored in an HttpOnly cookie for up to twelve months, used only to prevent the public homepage counter from counting the same browser or device repeatedly.</li><li>Limited technical information needed to deliver and protect the website, such as request time, device or browser information and security logs maintained by our hosting or infrastructure providers.</li></ul><p className="mt-3">We do not collect card numbers, UPI PINs, bank login credentials or Aadhaar numbers through this website. Please do not email Aadhaar or other identity documents to CHES.</p></PolicySection>

          <PolicySection title="3. Why do we use it?"><p>We use the listed information only for specific purposes:</p><ul><li>To record and reconcile a donation and create a donation reference.</li><li>To acknowledge a donation and issue receipts or tax documentation where applicable.</li><li>To prevent duplicate submissions, fraud and misuse of the donation flow.</li><li>To answer your programme, partnership, donation or privacy enquiry when you contact us.</li><li>To count approximate unique homepage visitors without using the counter for advertising, profiling or identity recognition.</li><li>To meet applicable tax, accounting, audit, legal and regulatory obligations.</li><li>To maintain the security, availability and integrity of our website and systems.</li></ul><p className="mt-3">We do not sell personal data and we do not use it for behavioural advertising. The visitor counter uses only a random first-party cookie, does not read local storage, does not collect IP addresses or user-agent details for the counter, and does not identify a human being. Different browsers or devices are counted separately; clearing cookies may cause a browser to be counted again.</p></PolicySection>

          <PolicySection title="4. Consent and withdrawal">
            <p>Before an online donation record is created, the donor must actively accept the donation-specific notice on the form. You may refuse consent, but CHES will then be unable to create or process that online donation record.</p>
            <p className="mt-3">You may withdraw consent or ask us to stop a consent-based use at any time by emailing <a className="font-extrabold text-[#276047] underline underline-offset-2" href={rightsEmail}>{site.email}</a> with the subject “DPDP data request”. Withdrawal does not undo processing already completed lawfully and does not require CHES to delete information that we must retain for tax, accounting, audit, legal or fraud-prevention purposes.</p>
          </PolicySection>

          <PolicySection title="5. Who may receive the data?"><p>Access is limited to authorised CHES personnel and service providers who need the information for the purposes above, such as hosting, database, security, payment or professional compliance services. They may process the data only for authorised services and must apply appropriate confidentiality and security controls.</p><p className="mt-3">The donation page does not take payment credentials. When you pay through a bank or UPI app, that payment is handled by your bank or payment provider under its own notice. If a service provider processes data outside India, CHES will apply the safeguards and restrictions required by applicable law.</p></PolicySection>

          <PolicySection title="6. How long do we keep it?"><p>We keep personal data only for as long as it is needed for the purpose for which it was collected and for applicable tax, accounting, audit, legal, fraud-prevention or dispute-resolution requirements. When it is no longer required, we delete it or irreversibly anonymise it through our operational retention process. A deletion request may therefore be limited where a legal or compliance record must be retained.</p><p className="mt-3">The anonymous visitor cookie expires after twelve months. The matching visitor record stores only the random identifier and first/last seen timestamps for the homepage counter. The in-progress donation flow may use short-lived browser session storage only to prevent accidental duplicate submissions. It is not used for advertising or profiling.</p></PolicySection>

          <PolicySection title="7. Your rights and how to use them"><p>Subject to applicable law and reasonable identity verification, you may ask CHES to:</p><ul><li>Confirm whether we process your personal data and provide a summary or copy.</li><li>Correct, complete or update inaccurate or incomplete information.</li><li>Erase personal data when the purpose is no longer served or retention is not legally required.</li><li>Withdraw consent for consent-based processing.</li><li>Provide information about how your data is being used or shared for the purposes stated here.</li><li>Recognise a nominee to exercise your rights where permitted by law.</li></ul><p className="mt-3">Send your request to <a className="font-extrabold text-[#276047] underline underline-offset-2" href={rightsEmail}>{site.email}</a>. Include your name, the email or donation reference connected with the request, the right you want to exercise, and any correction needed. Do not send PAN, Aadhaar or other identity documents by ordinary email unless CHES first gives you a verified secure method. CHES will acknowledge requests as soon as reasonably practicable and handle them within the period required by applicable law, which the DPDP Rules describe as up to ninety days for rights requests.</p></PolicySection>

          <PolicySection title="8. Grievance and breach response"><p>For an internal privacy grievance, email <a className="font-extrabold text-[#276047] underline underline-offset-2" href={`mailto:${site.email}?subject=Privacy%20grievance`}>{site.email}</a> with “Privacy grievance” in the subject. We will investigate, keep you informed where appropriate, and provide a response through the contact details you give us.</p><p className="mt-3">If a personal data breach is likely to affect you, CHES will take steps to contain and remedy it and notify affected individuals without delay where required. A breach message will explain what happened, the likely impact, steps taken, and how to get help.</p><p className="mt-3">If you remain dissatisfied after using the CHES process, you may approach the Data Protection Board of India through the official information published by the Ministry of Electronics and Information Technology at <a className="font-extrabold text-[#276047] underline underline-offset-2" href="https://www.meity.gov.in/data-protection-board-of-india" target="_blank" rel="noreferrer">meity.gov.in/data-protection-board-of-india</a>.</p></PolicySection>

          <PolicySection title="9. Children and safeguarding"><p>CHES works with children, but this website is not designed for children to submit personal data independently. Where CHES processes a child’s personal data in its programmes or publishes a photograph or story, it follows its safeguarding and permission processes and applies the additional protections required for children. Please do not submit a child’s name, health information, HIV status, photograph or case details through a public form or email unless CHES has specifically requested it through a verified channel.</p></PolicySection>

          <PolicySection title="10. Security and updates"><p>CHES uses server-side validation, access controls, secure transmission, restricted administrator access, HTTP-only administrator sessions, and limited data access for the donation system. No internet transmission or storage system can be guaranteed to be completely secure, so please share only information that is necessary.</p><p className="mt-3">We may update this notice when our processing, services or legal obligations change. The current version and effective date will always be published on this page. Material changes will be highlighted where appropriate.</p></PolicySection>

          <div className="border-t border-[#e1e9e3] pt-6 text-xs leading-5 text-[#667570]"><p>This notice is written for transparency and operational guidance and is not a substitute for legal advice. Please also read our <Link className="font-bold text-[#276047] underline underline-offset-2" href="/terms">Terms of Use</Link>.</p></div>
        </div>
      </article>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="font-heading text-2xl font-semibold leading-tight text-[#063d39]">{title}</h2><div className="mt-3 text-[#4e615b] [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-1 [&_li]:before:top-3 [&_li]:before:size-1.5 [&_li]:before:rounded-full [&_li]:before:bg-[#d68d10] [&_ul]:mt-3 [&_ul]:grid [&_ul]:gap-2">{children}</div></section>;
}
