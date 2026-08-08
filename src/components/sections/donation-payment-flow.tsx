"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Heart, LoaderCircle, LockKeyhole, ScanLine, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { createDonationSchema } from "@/lib/donations/schema";

type FieldErrors = Partial<Record<"name" | "pan" | "email" | "phone" | "address" | "amount", string[]>>;

type DonationPaymentFlowProps = {
  panRequired: boolean;
  qrSource: string;
  upiId: string;
  upiPaymentUrl: string;
};

const fieldClassName =
  "mt-2 w-full rounded-lg border border-[#cfdcd5] bg-white px-3.5 py-3 text-sm text-[#183632] outline-none transition placeholder:text-[#82908c] focus:border-[#d68d10] focus:ring-4 focus:ring-[#d68d10]/15 disabled:bg-[#f4f6f4]";
const qrRevealSeconds = 15;

export function DonationPaymentFlow({ panRequired, qrSource, upiId, upiPaymentUrl }: DonationPaymentFlowProps) {
  const [submitting, setSubmitting] = useState(false);
  const [donationId, setDonationId] = useState<string | null>(null);
  const [qrVisible, setQrVisible] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const idempotencyKey = useRef<string | null>(null);
  const qrCard = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!donationId) return;

    qrCard.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    qrCard.current?.focus({ preventScroll: true });
  }, [donationId]);

  useEffect(() => {
    if (!donationId || !qrVisible || remainingSeconds <= 0) return;

    const timer = window.setInterval(() => {
      setRemainingSeconds((seconds) => {
        if (seconds <= 1) {
          setQrVisible(false);
          return 0;
        }

        return seconds - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [donationId, qrVisible, remainingSeconds]);

  function revealQr() {
    if (!donationId) return;

    setQrVisible(true);
    setRemainingSeconds(qrRevealSeconds);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting || donationId) return;

    setFormError(null);
    setFieldErrors({});

    const form = new FormData(event.currentTarget);
    const candidate = {
      name: form.get("name"),
      pan: form.get("pan") ?? "",
      email: form.get("email"),
      phone: form.get("phone"),
      address: form.get("address"),
      amount: form.get("amount"),
    };
    const parsed = createDonationSchema(panRequired).safeParse(candidate);

    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors as FieldErrors);
      setFormError("Please check the highlighted fields.");
      return;
    }

    setSubmitting(true);
    const storedIdempotencyKey = window.sessionStorage.getItem("ches-donation-idempotency-key");
    idempotencyKey.current ??= storedIdempotencyKey || window.crypto.randomUUID();
    window.sessionStorage.setItem("ches-donation-idempotency-key", idempotencyKey.current);

    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey.current,
        },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as {
        donationId?: string;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !result.donationId) {
        setFieldErrors(result.fieldErrors ?? {});
        setFormError(result.error ?? "Something went wrong while saving your details. Please try again.");
        return;
      }

      window.sessionStorage.removeItem("ches-donation-idempotency-key");
      setQrVisible(true);
      setRemainingSeconds(qrRevealSeconds);
      setDonationId(result.donationId);
    } catch {
      setFormError("We could not reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const locked = !donationId || !qrVisible;
  const qrExpired = Boolean(donationId) && !qrVisible;

  return (
    <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,.92fr)]">
      <section className="overflow-hidden rounded-xl border border-[#dfe7df] bg-white shadow-[0_14px_34px_rgb(25_53_43/0.07)]">
        <div className="border-b border-[#e1e7e2] bg-[#f7faf7] px-5 py-5 sm:px-7">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#b5780d]">Step 1 of 2</p>
          <h2 className="mt-1 font-heading text-3xl font-semibold text-[#063d39]">Make a Donation</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#566761]">
            Tell us who is making the donation. Your reference and secure payment QR will appear after your details are saved.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-7">
          <fieldset disabled={submitting || Boolean(donationId)} className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            <FormField label="Full name" name="name" error={fieldErrors.name?.[0]}>
              <input className={fieldClassName} id="name" name="name" autoComplete="name" maxLength={120} required placeholder="Your full name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
            </FormField>

            <FormField label="Email address" name="email" error={fieldErrors.email?.[0]}>
              <input className={fieldClassName} id="email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
            </FormField>

            <FormField label="Phone number" name="phone" error={fieldErrors.phone?.[0]}>
              <input className={fieldClassName} id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={16} required placeholder="10-digit Indian mobile number" aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} />
            </FormField>

            <FormField label={`PAN ${panRequired ? "" : "(optional)"}`} name="pan" error={fieldErrors.pan?.[0]}>
              <input className={`${fieldClassName} uppercase`} id="pan" name="pan" autoCapitalize="characters" autoComplete="off" maxLength={10} required={panRequired} placeholder="ABCDE1234F" aria-invalid={Boolean(fieldErrors.pan)} aria-describedby={fieldErrors.pan ? "pan-error" : "pan-help"} />
              {!fieldErrors.pan ? <p id="pan-help" className="mt-1.5 text-[0.7rem] leading-4 text-[#73817d]">Used only for eligible donation and tax records.</p> : null}
            </FormField>

            <FormField label="Full address" name="address" error={fieldErrors.address?.[0]} wide>
              <textarea className={`${fieldClassName} min-h-24 resize-y`} id="address" name="address" autoComplete="street-address" maxLength={500} required placeholder="House / street, area, city, state and PIN code" aria-invalid={Boolean(fieldErrors.address)} aria-describedby={fieldErrors.address ? "address-error" : undefined} />
            </FormField>

            <FormField label="Donation amount" name="amount" error={fieldErrors.amount?.[0]} wide>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute inset-y-0 left-0 grid w-11 place-items-center border-r border-[#d9e2dd] text-sm font-extrabold text-[#27604c]">₹</span>
                <input className={`${fieldClassName} mt-0 pl-14`} id="amount" name="amount" type="number" inputMode="decimal" min="1" step="0.01" required placeholder="Enter amount" aria-invalid={Boolean(fieldErrors.amount)} aria-describedby={fieldErrors.amount ? "amount-error" : undefined} />
              </div>
            </FormField>
          </fieldset>

          {formError ? <p role="alert" className="mt-5 rounded-lg border border-[#efc5bc] bg-[#fff5f2] px-4 py-3 text-sm font-semibold text-[#9d3729]">{formError}</p> : null}

          {donationId ? (
            <div role="status" className="mt-5 flex items-start gap-3 rounded-lg border border-[#bcd9c4] bg-[#eff8f1] px-4 py-3 text-sm text-[#194c36]">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
              <span><strong className="block font-extrabold">Your details have been saved.</strong>Your payment QR is available for 15 seconds at a time.</span>
            </div>
          ) : null}

          <button type="submit" disabled={submitting || Boolean(donationId)} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#d68d10] px-5 text-sm font-extrabold text-white shadow-[0_8px_18px_rgb(182_116_7/0.22)] transition hover:bg-[#bd7909] disabled:cursor-not-allowed disabled:opacity-70">
            {submitting ? <><LoaderCircle className="size-4 animate-spin" /> Saving your details...</> : donationId ? <><CheckCircle2 className="size-4" /> Details saved</> : <>Continue to Payment <ScanLine className="size-4" /></>}
          </button>

          <p className="mt-4 flex items-start gap-2 text-[0.72rem] leading-5 text-[#667570]"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#27604c]" />Your information is transmitted securely and used only for donation records, receipts and applicable compliance.</p>
        </form>
      </section>

      <section ref={qrCard} tabIndex={-1} aria-live="polite" className="relative overflow-hidden rounded-xl border border-[#ecd9b1] bg-[#fff8e9] text-center shadow-[0_14px_32px_rgb(89_64_24/0.09)] outline-none">
        <div className="relative bg-[#2d52a2] px-5 py-3 text-white">
          <div className="mx-auto flex max-w-64 items-center justify-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-[#f0cf39] font-heading text-lg font-bold text-[#2d52a2]">IB</span>
            <div className="text-left"><p className="text-sm font-extrabold leading-none">Indian Bank</p><p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/78">UPI Donation</p></div>
          </div>
        </div>

        <div className="relative px-6 py-6">
          <Heart className="absolute right-5 top-4 size-8 fill-[#d68d10] text-[#d68d10]" strokeWidth={1.2} />
          <p className="mx-auto max-w-60 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#063d39]/70">Step 2 of 2 · Payment QR</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[#063d39]">{locked ? "Complete your details" : "Scan to Pay"}</h2>
          <p className="mx-auto mt-2 max-w-64 text-xs leading-5 text-[#42534f]">{!donationId ? "The secure QR unlocks after your information is recorded." : qrExpired ? "The QR is hidden again. Reveal it when you are ready to scan." : "Scan with any UPI app before the timer ends."}</p>

          {donationId ? (
            <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-[#e4d5ad] bg-white px-3 py-1.5 text-xs font-extrabold text-[#7a5a1d]" role="timer" aria-live="polite">
              <Clock3 className="size-4 text-[#b5780d]" />
              {qrVisible ? `QR hides in ${remainingSeconds}s` : "QR hidden"}
            </div>
          ) : null}

          <div className="relative mx-auto mt-5 w-fit overflow-hidden rounded-xl border border-[#efe1c5] bg-white p-3 shadow-[0_10px_22px_rgb(31_42_41/0.12)]">
            <motion.div
              aria-hidden={locked}
              animate={{ filter: locked ? "blur(16px)" : "blur(0px)", opacity: locked ? 0.16 : 1, scale: locked ? 0.93 : 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative size-56 overflow-hidden bg-white sm:size-64"
            >
              <Image src={qrSource} alt={locked ? "" : `Scannable CHES UPI QR code for ${upiId}`} fill unoptimized className="object-contain" sizes="256px" />
            </motion.div>

            {locked ? (
              <div className="absolute inset-0 grid place-items-center bg-[#fffaf0]/88 p-6 backdrop-blur-sm">
                <div><span className="mx-auto grid size-12 place-items-center rounded-full bg-[#063d39] text-white shadow-lg"><LockKeyhole className="size-5" /></span><p className="mt-3 text-sm font-extrabold text-[#063d39]">{qrExpired ? "Payment QR hidden" : "Payment QR locked"}</p><p className="mt-1 max-w-44 text-[0.7rem] leading-4 text-[#5c6a66]">{qrExpired ? "Reveal it again when you are ready to scan." : "Submit the donor form to reveal the scannable code."}</p>{qrExpired ? <button type="button" onClick={revealQr} className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#276047] px-4 text-xs font-extrabold text-white transition hover:bg-[#1f4f3a]"><ScanLine className="size-4" />Show QR again</button> : null}</div>
              </div>
            ) : null}
          </div>

          {donationId ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <p className="mt-4 text-xs font-extrabold text-[#063d39]">UPI ID: {upiId}</p>
              {qrVisible ? <a href={upiPaymentUrl} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#d9bd83] bg-white px-4 py-2 text-xs font-extrabold text-[#a26806] transition hover:border-[#063d39] hover:text-[#063d39]">Open UPI app <ScanLine className="size-4" /></a> : <button type="button" onClick={revealQr} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#d9bd83] bg-white px-4 py-2 text-xs font-extrabold text-[#a26806] transition hover:border-[#063d39] hover:text-[#063d39]">Reveal QR for 15s <ScanLine className="size-4" /></button>}
              <div className="mx-auto mt-4 max-w-72 rounded-lg bg-[#eef6ef] px-4 py-3 text-[#194c36]"><p className="text-[0.68rem] font-bold uppercase tracking-[0.1em]">Donation Reference</p><p className="mt-1 font-mono text-sm font-extrabold tracking-wide">{donationId}</p></div>
              <p className="mx-auto mt-3 max-w-72 text-[0.7rem] leading-4 text-[#667570]">Please include this reference when sharing your payment receipt.</p>
            </motion.div>
          ) : (
            <p className="mt-4 text-xs font-semibold text-[#6f6250]">Your UPI details remain hidden until Step 1 is complete.</p>
          )}
        </div>
      </section>
    </div>
  );
}

function FormField({ children, error, label, name, wide = false }: { children: React.ReactNode; error?: string; label: string; name: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label htmlFor={name} className="text-sm font-extrabold text-[#173f39]">{label}</label>
      {children}
      {error ? <p id={`${name}-error`} className="mt-1.5 text-xs font-semibold text-[#a23b2d]">{error}</p> : null}
    </div>
  );
}
