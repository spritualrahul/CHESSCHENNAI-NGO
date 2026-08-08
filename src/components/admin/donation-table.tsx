"use client";

import { ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { DonationListItem } from "@/lib/donations/database";
import type { DonationStatus } from "@/lib/donations/schema";

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });
const dateFormatter = new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" });

export function DonationTable({ donations }: { donations: DonationListItem[] }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"ALL" | DonationStatus>("ALL");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return donations.filter((donation) => {
      const matchesStatus = status === "ALL" || donation.paymentStatus === status;
      const matchesSearch = !query || [donation.donationId, donation.name, donation.email, donation.phone].some((value) => value.toLowerCase().includes(query));
      return matchesStatus && matchesSearch;
    });
  }, [donations, search, status]);

  return (
    <section className="overflow-hidden rounded-xl border border-[#dce5df] bg-white shadow-[0_10px_28px_rgb(20_53_43/0.06)]">
      <div className="flex flex-col gap-4 border-b border-[#e4e9e5] px-5 py-5 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">Donor records</p><h2 className="mt-1 font-heading text-2xl font-semibold text-[#063d39]">Recent donations</h2><p className="mt-1 text-xs text-[#6a7873]">Showing {filtered.length} of {donations.length} recent records.</p></div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative block min-w-64"><span className="sr-only">Search donors</span><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#73817d]" /><input value={search} onChange={(event) => setSearch(event.target.value)} className="h-10 w-full rounded-lg border border-[#d2ddd6] bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#8a9692] focus:border-[#d68d10] focus:ring-4 focus:ring-[#d68d10]/15" placeholder="Name, email, phone or reference" /></label>
          <label><span className="sr-only">Filter payment status</span><select value={status} onChange={(event) => setStatus(event.target.value as "ALL" | DonationStatus)} className="h-10 w-full rounded-lg border border-[#d2ddd6] bg-white px-3 text-sm font-semibold text-[#24443e] outline-none focus:border-[#d68d10] focus:ring-4 focus:ring-[#d68d10]/15 sm:w-36"><option value="ALL">All statuses</option><option value="PENDING">Pending</option><option value="PAID">Paid</option><option value="FAILED">Failed</option></select></label>
        </div>
      </div>

      {filtered.length ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] border-collapse text-left text-sm">
            <thead className="bg-[#f7faf7] text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-[#5d6f69]"><tr><th className="px-5 py-3">Donation ID</th><th className="px-5 py-3">Name</th><th className="px-5 py-3">Email</th><th className="px-5 py-3">Phone</th><th className="px-5 py-3">Amount</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Date</th><th className="px-5 py-3"><span className="sr-only">View</span></th></tr></thead>
            <tbody className="divide-y divide-[#e8ece9]">
              {filtered.map((donation) => (
                <tr key={donation.donationId} className="transition hover:bg-[#fbfcfa]">
                  <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-bold text-[#24564e]">{donation.donationId}</td>
                  <td className="px-5 py-4 font-bold text-[#173c36]">{donation.name}</td>
                  <td className="px-5 py-4 text-[#596a64]">{donation.email}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-[#596a64]">+91 {donation.phone}</td>
                  <td className="whitespace-nowrap px-5 py-4 font-extrabold text-[#173c36]">{currency.format(Number(donation.amount))}</td>
                  <td className="px-5 py-4"><StatusBadge status={donation.paymentStatus} /></td>
                  <td className="whitespace-nowrap px-5 py-4 text-xs text-[#65756f]">{dateFormatter.format(new Date(donation.createdAt))}</td>
                  <td className="px-5 py-4"><Link href={`/admin/donations/${donation.donationId}`} aria-label={`View ${donation.donationId}`} className="grid size-8 place-items-center rounded-full border border-[#d6e0da] text-[#285a50] transition hover:border-[#d68d10] hover:text-[#b5780d]"><ChevronRight className="size-4" /></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <p className="px-5 py-14 text-center text-sm text-[#697873]">No donor records match this search and filter.</p>}
    </section>
  );
}

export function StatusBadge({ status }: { status: DonationStatus }) {
  const style = status === "PAID" ? "bg-[#e5f5e9] text-[#23643b]" : status === "FAILED" ? "bg-[#fff0ed] text-[#a23d30]" : "bg-[#fff4dc] text-[#946208]";
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[0.65rem] font-extrabold tracking-[0.06em] ${style}`}>{status}</span>;
}
