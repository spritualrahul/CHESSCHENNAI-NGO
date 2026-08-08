import { ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";

import { LoginForm } from "@/app/admin/login/login-form";
import { getAdminSession } from "@/lib/auth";

export default async function AdminLoginPage() {
  if (await getAdminSession()) {
    redirect("/admin");
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[linear-gradient(135deg,#eef5ef_0%,#fffefa_50%,#faf0dc_100%)] px-5 pb-20 pt-32">
      <section className="mx-auto max-w-md overflow-hidden rounded-2xl border border-[#dbe5de] bg-white shadow-[0_24px_60px_rgb(21_55_45/0.12)]">
        <div className="border-b border-[#e2e8e3] bg-[#f7faf7] px-7 py-7 text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-[#063d39] text-white"><ShieldCheck className="size-6" /></span>
          <p className="mt-4 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">CHES Chennai</p>
          <h1 className="mt-1 font-heading text-3xl font-semibold text-[#063d39]">Donation Administration</h1>
          <p className="mt-2 text-sm leading-6 text-[#5a6964]">Sign in to review donor records and payment status.</p>
        </div>
        <div className="px-7 pb-8"><LoginForm /></div>
      </section>
    </div>
  );
}
