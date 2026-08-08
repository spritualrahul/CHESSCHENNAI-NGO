import { ArrowLeft, CalendarDays, CheckCircle2, CircleDollarSign, Clock3, Contact, Hourglass, Mail, MapPin, Phone, ReceiptText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { updateDonationStatusAction } from "@/app/admin/actions";
import { StatusBadge } from "@/components/admin/donation-table";
import { requireAdmin } from "@/lib/auth";
import { getDonationByReference } from "@/lib/donations/database";

export const dynamic = "force-dynamic";

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });
const dateFormatter = new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeStyle: "short" });

export default async function DonationDetailPage({ params }: { params: Promise<{ donationId: string }> }) {
  await requireAdmin();
  const { donationId } = await params;
  const donation = await getDonationByReference(donationId);

  if (!donation) {
    notFound();
  }

  const fields = [
    { label: "Full name", value: donation.name, icon: Contact },
    { label: "PAN", value: donation.pan ?? "Not provided", icon: ReceiptText },
    { label: "Email", value: donation.email, icon: Mail },
    { label: "Phone", value: `+91 ${donation.phone}`, icon: Phone },
    { label: "Donation amount", value: currency.format(Number(donation.amount)), icon: CircleDollarSign },
    { label: "Created", value: dateFormatter.format(new Date(donation.createdAt)), icon: CalendarDays },
    { label: "Last updated", value: dateFormatter.format(new Date(donation.updatedAt)), icon: Clock3 },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f4f7f4] px-5 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#315b52] transition hover:text-[#b5780d]"><ArrowLeft className="size-4" /> Back to donor dashboard</Link>

        <section className="mt-5 overflow-hidden rounded-xl border border-[#dce5df] bg-white shadow-[0_14px_36px_rgb(20_53_43/0.07)]">
          <header className="flex flex-col gap-4 border-b border-[#e1e7e2] bg-[#f8faf8] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">Donation record</p><h1 className="mt-1 font-heading text-3xl font-semibold text-[#063d39]">{donation.name}</h1><p className="mt-2 font-mono text-xs font-bold tracking-wide text-[#47665f]">{donation.donationId}</p></div>
            <StatusBadge status={donation.paymentStatus} />
          </header>

          <form action={updateDonationStatusAction} className="flex flex-col gap-4 border-b border-[#e1e7e2] bg-white px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <input type="hidden" name="donationId" value={donation.donationId} />
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">Payment verification</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-[#52635e]">Update this record after manually confirming the bank or UPI payment.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button type="submit" name="paymentStatus" value="PENDING" disabled={donation.paymentStatus === "PENDING"} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#d6e0da] bg-white px-4 text-sm font-extrabold text-[#345a53] transition hover:border-[#d68d10] hover:text-[#b5780d] disabled:cursor-not-allowed disabled:border-[#eadcbf] disabled:bg-[#fff8e8] disabled:text-[#946208]">
                <Hourglass className="size-4" />
                Set Pending
              </button>
              <button type="submit" name="paymentStatus" value="PAID" disabled={donation.paymentStatus === "PAID"} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#276047] px-4 text-sm font-extrabold text-white shadow-[0_8px_18px_rgb(39_96_71/0.18)] transition hover:bg-[#1e4c38] disabled:cursor-not-allowed disabled:bg-[#dce9df] disabled:text-[#23643b] disabled:shadow-none">
                <CheckCircle2 className="size-4" />
                Mark Paid
              </button>
            </div>
          </form>

          <div className="grid gap-px bg-[#e6ebe7] sm:grid-cols-2">
            {fields.map((field) => { const Icon = field.icon; return <div key={field.label} className="bg-white px-6 py-5"><div className="flex gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#edf4ef] text-[#276047]"><Icon className="size-4" /></span><div className="min-w-0"><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-[#71807b]">{field.label}</p><p className="mt-1 break-words text-sm font-bold leading-6 text-[#193f38]">{field.value}</p></div></div></div>; })}
            <div className="bg-white px-6 py-5 sm:col-span-2"><div className="flex gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#edf4ef] text-[#276047]"><MapPin className="size-4" /></span><div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-[#71807b]">Full address</p><p className="mt-1 whitespace-pre-line text-sm font-bold leading-6 text-[#193f38]">{donation.address}</p></div></div></div>
          </div>
        </section>

        <p className="mt-4 rounded-lg border border-[#eadcbf] bg-[#fffaf0] px-4 py-3 text-xs leading-5 text-[#6e5a35]">This record contains personal donor information. Use it only for authorised donation administration, receipts and compliance.</p>
      </div>
    </div>
  );
}
