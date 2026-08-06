import {
  CheckCircle2,
  FileBadge2,
  HandHeart,
  Heart,
  Landmark,
  Mail,
  ReceiptText,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as QRCode from "qrcode";

import { donationDetails } from "@/data/site";

const heroImage = "/Assets/donation-hero-watercolor.jpg";
const donorImage = "/Assets/About/ches-children-meal.jpeg";
const impactImage = "/Assets/Galary/Seed balls planting (2).jpeg";
const upiPaymentUrl = "upi://pay?pa=ches@upi&pn=CHES";

const trustItems = [
  { icon: ShieldCheck, label: "100% Secure Donations" },
  { icon: ReceiptText, label: "80G Tax Benefits" },
  { icon: HandHeart, label: "Transparent & Trusted" },
];

const localBankRows = [
  ["Receiving Bank Name", donationDetails.domestic.bankName],
  ["Receiving Bank Address", donationDetails.domestic.bankAddress],
  ["Receiving Bank City, Country", donationDetails.domestic.cityCountry],
  ["IFS Code", donationDetails.domestic.ifsc],
  ["Swift code", donationDetails.domestic.swift],
  ["Recipient Account Name", donationDetails.domestic.accountName],
  ["Recipient Account Number", donationDetails.domestic.accountNumber],
] as const;

const internationalBankRows = [
  ["Receiving Bank Name", donationDetails.international.bankName],
  ["Receiving Bank Address", donationDetails.international.bankAddress],
  ["Receiving Bank City, Country", donationDetails.international.cityCountry],
  ["IFS Code", donationDetails.international.ifsc],
  ["Swiftcode", donationDetails.international.swift],
  ["Recipient Account Name", donationDetails.international.accountName],
  ["Recipient Account Number", donationDetails.international.accountNumber],
] as const;

const donorDocuments = [
  "PAN card scanned copy or number",
  "Aadhar Card scanned copy or number",
  "Driving license scanned copy or number",
];

const taxSteps = [
  "To qualify for tax exemption on your donations, you need to obtain a 10BE.",
  "This can be done by filing your 80G claims for donations made during the Financial Year (FY). An 80G certificate is granted to eligible not-for-profit organisations, allowing donors to avail a tax deduction on donations.",
  "You can get your 10BE for donations made only for the last year and not the previous years.",
  "You will get your 10BE for the current year only after the financial year ends. For example, if you made donations between April 2023 and March 2024 (FY 2023-24), you will get your 10BE by 31 May 2024, provided you need to claim 80G for these donations.",
  "Please note that you cannot claim 80G for donations made for the previous year once the claim window has closed. For example, donations made between April 2022 and March 2023 (FY 2022-23) cannot be claimed anymore.",
];

export async function DonationForm() {
  const qrSource = await QRCode.toDataURL(upiPaymentUrl, {
    errorCorrectionLevel: "H",
    margin: 1,
    width: 300,
    color: { dark: "#073f3b", light: "#ffffff" },
  });

  return (
    <main className="overflow-hidden bg-[#fffefa] text-[#122d2d]">
      <section className="relative isolate overflow-hidden bg-[#f8f0dd] pt-20">
        <Image src={heroImage} alt="A watering can nurturing a seedling growing from a jar" fill preload className="object-contain object-right" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,254,250,.98)_0%,rgba(255,254,250,.94)_30%,rgba(255,254,250,.55)_51%,rgba(255,254,250,.1)_75%,rgba(255,254,250,.03)_100%)]" />
        <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center px-5 py-14 md:min-h-[500px]">
          <div className="max-w-[560px]">
            <h1 className="font-heading text-4xl font-semibold leading-[.95] text-[#063d39] md:text-[4.25rem]">
              <span className="block whitespace-nowrap">Together, We Can</span>
              <span className="block whitespace-nowrap">Change Lives</span>
            </h1>
            <p className="mt-6 max-w-[430px] text-base leading-7 text-[#162b2b] md:text-lg">Your kindness helps us provide healthcare, education, protection and a life filled with dignity and hope for children in need.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return <div key={item.label} className="flex items-center gap-3"><Icon className="size-7 shrink-0 text-[#d68d10]" strokeWidth={1.7} /><span className="text-xs font-extrabold leading-4 text-[#163330]">{item.label}</span></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="donate-payment" className="scroll-mt-24 px-5 py-11 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="inline-flex items-center gap-3 font-heading text-4xl font-semibold text-[#063d39] md:text-5xl">Ways to Donate <Heart className="size-7 text-[#d68d10]" strokeWidth={1.5} /></h2>
            <span className="mx-auto mt-2 block h-0.5 w-10 bg-[#d68d10]" />
            <p className="mt-3 text-sm font-semibold text-[#172d2b]">Donate either by cheque or NEFT or QR code</p>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            <DonationMethodCard number="1" icon={ReceiptText} title="Details for cheque donation" body="Cheque to be drawn in the name of" emphasis={donationDetails.chequePayableTo} />
            <DonationMethodCard number="2" icon={Landmark} title="Details for NEFT transfer" body="You can transfer directly to our bank account." href="#local-bank" />
            <section className="relative overflow-hidden rounded-xl border border-[#f1e1c3] bg-[#fff6e3] px-6 py-7 text-center shadow-[0_8px_20px_rgb(89_64_24/0.06)]">
              <Heart className="absolute right-5 top-4 size-8 fill-[#d68d10] text-[#d68d10]" strokeWidth={1.2} />
              <h3 className="font-heading text-2xl font-semibold text-[#063d39]">Scan &amp; Donate</h3>
              <p className="mx-auto mt-2 max-w-52 text-xs leading-5 text-[#263937]">Scan the QR code using any UPI app to make a secure donation.</p>
              <div className="mx-auto mt-4 w-fit rounded-lg bg-white p-2.5 shadow-[0_8px_18px_rgb(31_42_41/0.12)]"><QrArt source={qrSource} /></div>
              <p className="mt-3 text-xs font-extrabold text-[#063d39]">UPI ID: {donationDetails.upiId}</p>
              <a href={upiPaymentUrl} className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-[#a26806] transition hover:text-[#063d39]">Open UPI app <ScanLine className="size-4" /></a>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <Image src="/Assets/payment-logos/google-pay.svg" alt="Google Pay" width={65} height={22} className="h-6 w-[65px] object-contain" />
                <Image src="/Assets/payment-logos/paytm.svg" alt="Paytm" width={60} height={22} className="h-6 w-[60px] object-contain" />
                <Image src="/Assets/payment-logos/phonepe.svg" alt="PhonePe" width={72} height={25} className="h-7 w-[72px] object-contain" />
                <Image src="/Assets/payment-logos/bhim.svg" alt="BHIM UPI" width={74} height={22} className="h-6 w-[74px] object-contain" />
              </div>
            </section>
          </div>

          <div id="bank-details" className="mt-5 grid scroll-mt-24 gap-5 lg:grid-cols-2">
            <BankDetailsCard id="local-bank" title="CHES Banking Details" subtitle="Local Fund Transfer" rows={localBankRows} tone="teal" />
            <BankDetailsCard title="CHES Banking Details" subtitle="for International / Overseas Fund Transfer" rows={internationalBankRows} tone="gold" />
          </div>
          <p className="mt-4 flex items-start gap-2 rounded-lg bg-[#edf5ef] px-4 py-3 text-xs leading-5 text-[#1c453f]"><Mail className="mt-0.5 size-4 shrink-0 text-[#d68d10]" /><span>Kindly share the payment receipt with <a className="font-extrabold underline underline-offset-2" href="mailto:ches_cheschennai@yahoo.co.in">ches_cheschennai@yahoo.co.in</a> or <a className="font-extrabold underline underline-offset-2" href="mailto:pmanorama54@gmail.com">pmanorama54@gmail.com</a> for acknowledgement.</span></p>
        </div>
      </section>

      <section className="px-5 pb-10 md:pb-14">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-xl border border-[#e8e4da] bg-white lg:grid-cols-[.88fr_1.55fr]">
          <article className="p-6 md:p-7">
            <div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#246247] text-white"><FileBadge2 className="size-6" /></span><h2 className="font-heading text-2xl font-semibold leading-tight text-[#063d39]">Request to donors<br />who donate:</h2></div>
            <p className="mt-5 text-sm leading-6 text-[#273b38]">As per Income Tax guidelines kindly provide any one of the following documents during fund transfer:</p>
            <ol className="mt-5 grid gap-3">
              {donorDocuments.map((document, index) => <li key={document} className="flex gap-3 text-sm leading-5 text-[#173531]"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#063d39] text-[0.68rem] font-bold text-white">{index + 1}</span><span>{document}</span></li>)}
            </ol>
          </article>
          <article className="relative border-t border-[#e8e4da] bg-[#fffdf8] p-6 md:p-7 lg:border-l lg:border-t-0 lg:pr-[260px]">
            <div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#d68d10] text-white"><ReceiptText className="size-6" /></span><h2 className="font-heading text-2xl font-semibold leading-tight text-[#063d39]">For donors<br />who need 10BE:</h2></div>
            <ol className="mt-5 grid gap-3">
              {taxSteps.map((step, index) => <li key={step} className="flex gap-3 text-xs leading-5 text-[#263b38]"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#d68d10] text-[0.68rem] font-bold text-white">{index + 1}</span><span>{step}</span></li>)}
            </ol>
            <div className="relative mt-6 aspect-[1.7] overflow-hidden rounded-lg lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[235px] lg:rounded-l-none"><Image src={donorImage} alt="Children receiving nourishment through CHES care" fill className="object-cover object-center" sizes="(min-width: 1024px) 235px, 100vw" /></div>
          </article>
        </div>
      </section>

      <section className="border-y border-[#ece2cf] bg-[#faf5e9] px-5 py-0">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-[260px_minmax(0,1fr)_220px]">
          <div className="relative min-h-[220px] overflow-hidden"><Image src={impactImage} alt="CHES children planting seeds together" fill className="object-cover object-[center_57%]" sizes="(min-width: 1024px) 260px, 100vw" /></div>
          <div className="py-8 lg:px-8"><h2 className="font-heading text-3xl font-semibold text-[#063d39] md:text-4xl">Your Support Creates a Better Tomorrow</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#263b38]">Every contribution, big or small, brings hope, heals, and helps a child build a brighter future.</p><p className="mt-3 font-script text-2xl font-semibold text-[#c98211]">Thank you for being a part of this beautiful journey.</p></div>
          <div className="flex min-h-[170px] items-center justify-center px-6 pb-8 lg:min-h-[220px] lg:pb-0">
            <SupportHandsIcon />
          </div>
        </div>
      </section>
    </main>
  );
}

function DonationMethodCard({ number, icon: Icon, title, body, emphasis, href }: { number: string; icon: typeof ReceiptText; title: string; body: string; emphasis?: string; href?: string }) {
  const content = <><span className="grid size-14 place-items-center rounded-full bg-[#2d664a] text-white shadow-[0_6px_14px_rgb(28_62_45/0.14)]"><Icon className="size-7" strokeWidth={1.6} /></span><h3 className="mt-6 font-heading text-2xl font-semibold leading-tight text-[#063d39]"><span className="mr-2 inline-grid size-6 place-items-center rounded-full bg-[#063d39] align-middle font-sans text-xs font-bold text-white">{number}</span>{title}</h3><p className="mt-8 text-sm leading-6 text-[#283a37]">{body}</p>{emphasis ? <p className="mt-2 font-heading text-3xl font-semibold text-[#063d39]">{emphasis}</p> : null}</>;

  return href ? <Link href={href} className="group relative overflow-hidden rounded-xl border border-[#e6ebe5] bg-[#f5f8f4] p-7 shadow-[0_8px_20px_rgb(20_49_37/0.05)] transition hover:-translate-y-0.5 hover:border-[#c9d8cc]">{content}<Landmark className="absolute -bottom-8 -right-7 size-40 text-[#dfe9df]" strokeWidth={1} /></Link> : <section className="rounded-xl border border-[#e6ebe5] bg-[#f5f8f4] p-7 shadow-[0_8px_20px_rgb(20_49_37/0.05)]">{content}</section>;
}

function BankDetailsCard({ id, title, subtitle, rows, tone }: { id?: string; title: string; subtitle: string; rows: ReadonlyArray<readonly [string, string]>; tone: "teal" | "gold" }) {
  const isGold = tone === "gold";

  return (
    <article id={id} className="scroll-mt-24 overflow-hidden rounded-xl border border-[#e6e5dc] bg-white shadow-[0_8px_20px_rgb(25_53_43/0.06)]">
      <div className={`flex items-center gap-3 px-5 py-4 text-white ${isGold ? "bg-[#d38b0f]" : "bg-[#063f3b]"}`}><Landmark className="size-8 shrink-0" strokeWidth={1.5} /><div><h3 className="text-sm font-extrabold uppercase tracking-[0.04em]">{title}</h3><p className="text-xs font-semibold text-white/90">{subtitle}</p></div></div>
      <div className="px-5 pb-4 pt-2">
        {rows.map(([label, value]) => <div key={label} className="grid gap-2 border-b border-[#edeae2] py-3 last:border-b-0 sm:grid-cols-[.93fr_1.07fr] sm:gap-4"><p className="text-[0.7rem] font-extrabold leading-4 text-[#2c3c39]">{label}</p><p className="break-words text-xs font-medium leading-5 text-[#1d3531]">{value}</p></div>)}
      </div>
      {!isGold ? <p className="mx-5 mb-5 flex items-center gap-2 rounded-md bg-[#eef6ef] px-3 py-2 text-[0.68rem] font-medium text-[#24533d]"><CheckCircle2 className="size-4 shrink-0" /> All donations are eligible for tax benefits under 80G.</p> : null}
    </article>
  );
}

function QrArt({ source }: { source: string }) {
  return <div className="relative size-40 overflow-hidden bg-white sm:size-44"><Image src={source} alt="Scannable CHES UPI QR code" fill unoptimized className="object-contain" sizes="176px" /><div className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_0_0_4px_white]"><div className="relative size-8 overflow-hidden rounded-full"><Image src="/Assets/Donor logo/CHES LOGO.jpg" alt="CHES logo" fill className="object-cover" sizes="32px" /></div></div></div>;
}

function SupportHandsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 190" className="h-36 w-44 text-[#cf8b12] md:h-40 md:w-52">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
        <path d="M120 74c-11.5-15.5-35.5-13-43 5.5-5.5 13.5 2 27 16.5 38.5L120 140l26.5-22c14.5-11.5 22-25 16.5-38.5-7.5-18.5-31.5-21-43-5.5Z" />
        <path d="M63 160c-18-16.5-30-35-30-59V67c0-7 4.5-12 10.5-12S54 60 54 67v41" />
        <path d="M82 160v-26c0-12-3-21-11-29L53 87c-4.5-4.5-4.5-11.5 0-16s11-4 16 1l21 21" />
        <path d="M53 109c4 9 10.5 18 20 27" />
        <path d="M177 160c18-16.5 30-35 30-59V67c0-7-4.5-12-10.5-12S186 60 186 67v41" />
        <path d="M158 160v-26c0-12 3-21 11-29l18-18c4.5-4.5 4.5-11.5 0-16s-11-4-16 1l-21 21" />
        <path d="M187 109c-4 9-10.5 18-20 27" />
      </g>
    </svg>
  );
}
