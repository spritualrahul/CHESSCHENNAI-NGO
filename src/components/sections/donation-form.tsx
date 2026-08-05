import { CalendarHeart, Copy, Landmark, QrCode, ShieldCheck } from "lucide-react";

import { donationDetails, trustBadges } from "@/data/site";

export function DonationForm() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
      <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-black/[0.06] md:p-8">
        <form className="grid gap-4">
          {["Name", "Email", "Phone", "Donation Amount"].map((label) => (
            <label key={label}>
              <span className="field-label">{label}</span>
              <input className="field-control" type={label === "Email" ? "email" : "text"} required={label !== "Phone"} />
            </label>
          ))}
          <button type="submit" className="primary-cta mt-2 w-full">
            Continue to Donate
          </button>
        </form>
      </div>
      <div className="grid gap-5">
        <div className="rounded-[2rem] bg-[var(--ches-blue)] p-7 text-white shadow-2xl shadow-[#0b4f6c]/16">
          <QrCode className="size-10 text-[var(--ches-orange)]" />
          <h2 className="mt-5 font-heading text-3xl font-bold">Scan or transfer</h2>
          <p className="mt-3 text-white/72">UPI: {donationDetails.upiId}</p>
        </div>
        <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-black/[0.04]">
          <Landmark className="size-9 text-[var(--ches-orange)]" />
          <h2 className="mt-5 font-heading text-2xl font-bold text-[var(--ches-blue)]">{donationDetails.domestic.bankName}</h2>
          <p className="mt-3 leading-8 text-[var(--ches-charcoal)]/70">
            Account: {donationDetails.domestic.accountNumber}<br />
            IFSC: {donationDetails.domestic.ifsc}<br />
            Branch: {donationDetails.domestic.branch}
          </p>
          <button className="mt-5 inline-flex items-center gap-2 font-extrabold text-[var(--ches-blue)]" type="button">
            <Copy className="size-4" /> Copy details
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[...trustBadges, { icon: CalendarHeart, label: "Long-term care" }, { icon: ShieldCheck, label: "Child-first" }].slice(0, 4).map((badge) => (
            <div key={badge.label} className="rounded-2xl bg-white p-4 font-bold text-[var(--ches-blue)] shadow-lg shadow-black/[0.035]">
              <badge.icon className="mb-2 size-5 text-[var(--ches-orange)]" /> {badge.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
