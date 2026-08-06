"use client";

import {
  Building2,
  HandHeart,
  Heart,
  Landmark,
  Mail,
  ReceiptText,
  ShieldCheck,
  UserRoundCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";

import { donationDetails } from "@/data/site";

const heroImage = "/placeholders/contact-hero-fresh.png";
const impactImage = "/Assets/Galary/Seed balls planting (4).jpeg";

const trustItems = [
  { icon: HandHeart, label: "Trusted & Transparent" },
  { icon: ReceiptText, label: "80G Tax Benefits" },
  { icon: ShieldCheck, label: "Secure Donations" },
  { icon: Users, label: "Every Contribution Creates Impact" },
];

const supportOptions = [
  "Child health care",
  "Education support",
  "Nutrition support",
  "Shelter and protection",
  "Community programs",
];

const impactStats = [
  { value: "30+", label: "Years of Service" },
  { value: "10000+", label: "Lives Impacted" },
  { value: "500+", label: "Communities Reached" },
  { value: "100%", label: "Commitment to Change" },
];

const bankRows = [
  { icon: UserRoundCheck, label: "Account Name", value: donationDetails.domestic.accountName },
  { icon: Landmark, label: "Bank Name", value: donationDetails.domestic.bankName },
  { icon: ReceiptText, label: "Account Number", value: donationDetails.domestic.accountNumber },
  { icon: ShieldCheck, label: "IFSC Code", value: donationDetails.domestic.ifsc },
  { icon: Building2, label: "Branch", value: donationDetails.domestic.branch },
];

const paymentLogos = [
  { name: "Google Pay", src: "/Assets/payment-logos/google-pay.svg", width: 96, height: 30, className: "h-8 w-[96px]" },
  { name: "Paytm", src: "/Assets/payment-logos/paytm.svg", width: 82, height: 30, className: "h-8 w-[82px]" },
  { name: "PhonePe", src: "/Assets/payment-logos/phonepe.svg", width: 108, height: 36, className: "h-9 w-[108px]" },
  { name: "BHIM UPI", src: "/Assets/payment-logos/bhim.svg", width: 104, height: 30, className: "h-8 w-[104px]" },
  { name: "Amazon Pay", src: "/Assets/payment-logos/amazon-pay.svg", width: 112, height: 30, className: "h-8 w-[112px]" },
];

export function DonationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="bg-[var(--ches-warm-white)]">
      <section className="relative isolate overflow-hidden bg-[var(--ches-ink)] px-5 pt-28 text-white lg:pt-24">
        <Image
          src={heroImage}
          alt="A smiling child with friends, representing CHES donor support"
          fill
          priority
          className="object-cover object-[center_38%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,19,.94)_0%,rgba(7,20,18,.78)_42%,rgba(7,20,18,.22)_72%,rgba(7,20,18,.08)_100%)]" />
        <div className="relative mx-auto grid min-h-[410px] max-w-7xl items-center gap-8 pb-14 lg:grid-cols-[1fr_.86fr]">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-base font-extrabold text-[var(--ches-orange)]">
              Your Kindness, Their Tomorrow <Heart className="size-5" strokeWidth={1.8} />
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] md:text-6xl">
              Thank You for Choosing
              <br />
              to Make a Difference
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/92 md:text-lg">
              Your support helps us provide healthcare, education, protection and hope to children who need it the most.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon className="size-6 shrink-0 text-[var(--ches-orange)]" strokeWidth={1.8} />
                    <span className="text-xs font-extrabold leading-4 text-white">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden self-end justify-self-end rounded-lg bg-[var(--ches-blue)]/95 p-5 shadow-[0_18px_40px_rgb(0_0_0/0.22)] lg:flex lg:w-[360px] lg:items-center lg:gap-4">
            <ShieldCheck className="size-10 shrink-0 text-[var(--ches-orange)]" strokeWidth={1.7} />
            <p className="text-lg font-extrabold leading-7">
              Every child deserves a chance
              <br />
              Every donation brings hope
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-8 pt-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg border border-[#eadfca] bg-white shadow-[0_22px_70px_rgb(11_78_109/0.11)] lg:grid-cols-2">
          <div className="border-b border-[#eadfca] px-6 py-8 md:px-8 lg:border-b-0 lg:border-r">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#f0dac4] bg-white text-[#e06f12]">
                <UserRoundCheck className="size-6" strokeWidth={1.7} />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[var(--ches-blue)]">Your Details</h2>
                <p className="mt-2 text-xs font-medium leading-5 text-[var(--ches-ink)]/72">
                  Please provide your details so we can acknowledge your support.
                </p>
              </div>
            </div>

            <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
              <TextField label="Full Name" placeholder="Enter your full name" required />
              <TextField label="Email Address" placeholder="Enter your email address" type="email" required />
              <TextField label="Phone Number" placeholder="Enter your phone number" type="tel" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField label="City" placeholder="Enter your city" required />
                <TextField label="State" placeholder="Enter your state" required />
              </div>
              <label>
                <span className="field-label">
                  I want to support as <span className="text-[#dc5f10]">*</span>
                </span>
                <select required defaultValue="" className="field-control h-11 appearance-none bg-[linear-gradient(45deg,transparent_50%,#9aa2a0_50%),linear-gradient(135deg,#9aa2a0_50%,transparent_50%)] bg-[length:6px_6px,6px_6px] bg-[position:calc(100%-18px)_18px,calc(100%-13px)_18px] bg-no-repeat text-sm">
                  <option value="" disabled>
                    - Select an option
                  </option>
                  {supportOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="field-label">Message for us (Optional)</span>
                <textarea className="field-control min-h-24 resize-y text-sm" placeholder="Write a message of hope..." />
              </label>
              <label className="mt-1 flex items-start gap-3 text-xs font-medium leading-5 text-[var(--ches-ink)]">
                <input type="checkbox" required className="mt-1 size-4 rounded border-[#df7d21] accent-[#df7d21]" />
                <span>
                  I agree to the{" "}
                  <Link href="#" className="font-semibold text-[#cc5c0c] underline underline-offset-2">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="font-semibold text-[#cc5c0c] underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                  .
                </span>
              </label>
              <button type="submit" className="primary-cta mt-2 h-12 w-full bg-[var(--ches-blue)] hover:bg-[#083d56]">
                <Heart className="size-4" /> Proceed to Donate
              </button>
              <p className="flex items-center justify-center gap-2 text-center text-xs text-[var(--ches-ink)]/70">
                <ShieldCheck className="size-4 text-[#dc7516]" /> Your information is safe with us. We never share your details.
              </p>
            </form>
          </div>

          <div id="donate-payment" className="scroll-mt-28 px-6 py-8 md:px-8">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#f0dac4] bg-white text-[#e06f12]">
                <Heart className="size-6" strokeWidth={1.7} />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[var(--ches-blue)]">Scan & Pay</h2>
                <p className="mt-2 text-xs font-medium leading-5 text-[var(--ches-ink)]/72">
                  Scan the QR code using any UPI app to make a secure donation.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center">
              <div className="rounded-lg border border-[#ddd8cf] bg-white p-4 shadow-[0_8px_24px_rgb(0_0_0/0.08)]">
                <QrArt />
              </div>
              <p className="mt-3 text-sm font-extrabold text-[var(--ches-blue)]">UPI ID: {donationDetails.upiId}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {paymentLogos.map((logo) => (
                  <span key={logo.name} className="inline-flex h-10 items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className={`${logo.className} object-contain`}
                    />
                  </span>
                ))}
              </div>
            </div>

            <div className="my-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#eadfca]" />
              <span className="text-xs font-extrabold uppercase text-[var(--ches-blue)]">Or Donate Via Bank Transfer</span>
              <span className="h-px flex-1 bg-[#eadfca]" />
            </div>

            <div className="overflow-hidden rounded-lg border border-[#eadfca]">
              {bankRows.map((row) => {
                const Icon = row.icon;

                return (
                  <div key={row.label} className="grid grid-cols-[minmax(128px,.44fr)_1fr] border-b border-[#eadfca] last:border-b-0">
                    <div className="flex items-center gap-2 bg-[var(--ches-blue)] px-4 py-3 text-xs font-extrabold text-white">
                      <Icon className="size-4 shrink-0" strokeWidth={1.8} />
                      {row.label}
                    </div>
                    <div className="px-4 py-3 text-sm font-medium text-[var(--ches-ink)]">{row.value}</div>
                  </div>
                );
              })}
            </div>
            <p className="mt-5 flex items-start gap-3 text-sm leading-6 text-[var(--ches-ink)]/82">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#df6f16] text-white">
                <Mail className="size-4" />
              </span>
              <span>
                Kindly share the payment receipt with us on{" "}
                <a className="font-semibold text-[var(--ches-blue)]" href="mailto:info@ches.org.in">
                  info@ches.org.in
                </a>{" "}
                for acknowledgement.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg bg-[#f2ecdf] lg:grid-cols-[280px_1fr_280px]">
          <div className="relative min-h-56">
            <Image src={impactImage} alt="Children planting a sapling as a symbol of hope" fill className="object-cover object-[center_34%]" sizes="(min-width: 1024px) 280px, 100vw" />
          </div>
          <div className="px-7 py-7">
            <h2 className="font-heading text-3xl font-semibold leading-tight text-[var(--ches-blue)] md:text-4xl">
              Your Support Creates Real Impact
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--ches-ink)]/78">
              Together, we can build a healthier, safer and brighter future for vulnerable children, women and communities.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className="border-[#dacdbb] sm:border-r sm:last:border-r-0">
                  <p className="text-2xl font-extrabold text-[var(--ches-blue)]">{stat.value}</p>
                  <p className="mt-1 text-[0.68rem] leading-4 text-[var(--ches-ink)]/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="m-6 flex flex-col justify-center rounded-lg bg-[var(--ches-blue)] p-7 text-white">
            <p className="font-heading text-5xl leading-none text-[var(--ches-orange)]">&quot;</p>
            <p className="text-sm font-semibold leading-6">Alone we can do so little; together we can do so much.</p>
            <p className="mt-4 font-script text-xl text-white/90">- Helen Keller</p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#063f43,#00535a_48%,#063f43)] px-5 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="grid size-16 shrink-0 place-items-center rounded-full border border-white/30">
              <HandHeart className="size-9" strokeWidth={1.5} />
            </span>
            <div>
              <h2 className="font-heading text-3xl font-semibold">Be the reason for a child&apos;s smile today.</h2>
              <p className="mt-2 text-sm text-white/82">Your kindness can build a brighter, healthier and safer tomorrow.</p>
            </div>
          </div>
          <div className="text-left md:text-center">
            <Link href="#donate-payment" className="primary-cta h-12 px-10">
              Donate Now <Heart className="size-4 fill-current" />
            </Link>
            <p className="mt-3 font-script text-2xl leading-none text-[var(--ches-orange)]">Thank you for your kindness!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function TextField({
  label,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label>
      <span className="field-label">
        {label} {required ? <span className="text-[#dc5f10]">*</span> : null}
      </span>
      <input className="field-control h-11 text-sm" type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

function QrArt() {
  return (
    <div className="relative grid size-64 grid-cols-[repeat(29,minmax(0,1fr))] gap-0.5 bg-white p-1">
      {Array.from({ length: 29 * 29 }, (_, index) => {
        const row = Math.floor(index / 29);
        const col = index % 29;
        const dark = isQrDark(row, col);

        return <span key={`${row}-${col}`} className={dark ? "bg-black" : "bg-white"} />;
      })}
      <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_0_0_6px_white]">
        <div className="relative size-14 overflow-hidden rounded-full">
          <Image src="/Assets/Donor logo/CHES LOGO.jpg" alt="CHES logo" fill className="object-cover" sizes="56px" />
        </div>
      </div>
    </div>
  );
}

function isQrDark(row: number, col: number) {
  const inTopLeft = row < 7 && col < 7;
  const inTopRight = row < 7 && col > 21;
  const inBottomLeft = row > 21 && col < 7;
  const inFinder = inTopLeft || inTopRight || inBottomLeft;

  if (inFinder) {
    const localRow = row > 21 ? row - 22 : row;
    const localCol = col > 21 ? col - 22 : col;
    const onOuter = localRow === 0 || localRow === 6 || localCol === 0 || localCol === 6;
    const onInner = localRow >= 2 && localRow <= 4 && localCol >= 2 && localCol <= 4;

    return onOuter || onInner;
  }

  if (row >= 10 && row <= 18 && col >= 10 && col <= 18) return false;
  if (row % 6 === 0 || col % 6 === 0) return (row + col) % 3 !== 0;

  const pattern = (row * 17 + col * 31 + row * col * 7) % 13;

  return pattern === 0 || pattern === 2 || pattern === 5 || pattern === 8 || pattern === 11;
}
