import { CircleDollarSign, Clock3, HandCoins, LogOut, RefreshCw, UsersRound } from "lucide-react";

import { logoutAction } from "@/app/admin/actions";
import { DonationTable } from "@/components/admin/donation-table";
import { requireAdmin } from "@/lib/auth";
import { getDonationDashboardData } from "@/lib/donations/database";

export const dynamic = "force-dynamic";

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });

export default async function AdminDashboardPage() {
  const session = await requireAdmin();
  let data;

  try {
    data = await getDonationDashboardData();
  } catch (error) {
    console.error("[admin] Donation dashboard unavailable", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : "Unknown database error",
    });

    return (
      <div className="min-h-[calc(100vh-5rem)] bg-[#f4f7f4] px-5 pb-20 pt-28">
        <div className="mx-auto max-w-4xl">
          <header className="flex flex-col gap-4 border-b border-[#d9e1dc] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">CHES Donation Administration</p><h1 className="mt-1 font-heading text-4xl font-semibold text-[#063d39]">Donor Dashboard</h1><p className="mt-2 text-sm text-[#5c6d67]">Signed in as {session.email}</p></div>
            <form action={logoutAction}><button type="submit" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#cad7d0] bg-white px-4 text-xs font-extrabold text-[#31574f] transition hover:border-[#d68d10] hover:text-[#a76c08]">Sign out <LogOut className="size-4" /></button></form>
          </header>

          <section className="mt-6 rounded-xl border border-[#eadcbf] bg-[#fffaf0] p-6 shadow-[0_10px_28px_rgb(94_67_34/0.06)]">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">Database connection</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-[#063d39]">Donation records could not load</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6e5a35]">Neon did not respond to the dashboard request. Your admin login is working; this is only the donation database read. Please try again in a moment.</p>
            <a href="/admin" className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#276047] px-4 text-xs font-extrabold text-white transition hover:bg-[#1f4f3a]">
              Retry dashboard
              <RefreshCw className="size-4" />
            </a>
          </section>
        </div>
      </div>
    );
  }

  const cards = [
    { label: "Total donors", value: data.totals.totalDonors.toLocaleString("en-IN"), icon: UsersRound, tone: "bg-[#e8f3ed] text-[#276047]" },
    { label: "Donation amount", value: currency.format(Number(data.totals.totalAmount)), icon: HandCoins, tone: "bg-[#f8ecd2] text-[#9b6509]" },
    { label: "Pending", value: data.totals.pendingDonations.toLocaleString("en-IN"), icon: Clock3, tone: "bg-[#fff1d8] text-[#a06b0d]" },
    { label: "Paid", value: data.totals.paidDonations.toLocaleString("en-IN"), icon: CircleDollarSign, tone: "bg-[#e4f3e7] text-[#27643b]" },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f4f7f4] px-5 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-[#d9e1dc] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">CHES Donation Administration</p><h1 className="mt-1 font-heading text-4xl font-semibold text-[#063d39]">Donor Dashboard</h1><p className="mt-2 text-sm text-[#5c6d67]">Signed in as {session.email}</p></div>
          <form action={logoutAction}><button type="submit" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#cad7d0] bg-white px-4 text-xs font-extrabold text-[#31574f] transition hover:border-[#d68d10] hover:text-[#a76c08]">Sign out <LogOut className="size-4" /></button></form>
        </header>

        <section className="my-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => { const Icon = card.icon; return <article key={card.label} className="rounded-xl border border-[#dce5df] bg-white p-5 shadow-[0_8px_22px_rgb(20_53_43/0.05)]"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.08em] text-[#6a7873]">{card.label}</p><p className="mt-2 text-2xl font-extrabold text-[#153e37]">{card.value}</p></div><span className={`grid size-10 shrink-0 place-items-center rounded-full ${card.tone}`}><Icon className="size-5" /></span></div></article>; })}
        </section>

        <DonationTable donations={data.donations} />
      </div>
    </div>
  );
}
