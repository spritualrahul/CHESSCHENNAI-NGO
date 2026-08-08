"use client";

import { LoaderCircle, LockKeyhole, LogIn } from "lucide-react";
import { useActionState } from "react";

import { loginAction, type LoginState } from "@/app/admin/actions";

const initialState: LoginState = { error: null };
const fieldClassName = "mt-2 w-full rounded-lg border border-[#cfdcd5] bg-white px-4 py-3 text-sm text-[#183632] outline-none transition placeholder:text-[#82908c] focus:border-[#d68d10] focus:ring-4 focus:ring-[#d68d10]/15";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="mt-7">
      <div>
        <label htmlFor="email" className="text-sm font-extrabold text-[#173f39]">Email address</label>
        <input id="email" name="email" type="email" autoComplete="username" required maxLength={254} className={fieldClassName} placeholder="admin@example.org" aria-invalid={Boolean(state.fieldErrors?.email)} aria-describedby={state.fieldErrors?.email ? "login-email-error" : undefined} />
        {state.fieldErrors?.email?.[0] ? <p id="login-email-error" className="mt-1.5 text-xs font-semibold text-[#a23b2d]">{state.fieldErrors.email[0]}</p> : null}
      </div>

      <div className="mt-5">
        <label htmlFor="password" className="text-sm font-extrabold text-[#173f39]">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required maxLength={200} className={fieldClassName} placeholder="Enter your password" aria-invalid={Boolean(state.fieldErrors?.password)} aria-describedby={state.fieldErrors?.password ? "login-password-error" : undefined} />
        {state.fieldErrors?.password?.[0] ? <p id="login-password-error" className="mt-1.5 text-xs font-semibold text-[#a23b2d]">{state.fieldErrors.password[0]}</p> : null}
      </div>

      {state.error ? <p role="alert" className="mt-5 rounded-lg border border-[#efc5bc] bg-[#fff5f2] px-4 py-3 text-sm font-semibold text-[#9d3729]">{state.error}</p> : null}

      <button type="submit" disabled={pending} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#063d39] px-5 text-sm font-extrabold text-white shadow-[0_8px_18px_rgb(6_61_57/0.2)] transition hover:bg-[#0b514b] disabled:cursor-not-allowed disabled:opacity-70">
        {pending ? <><LoaderCircle className="size-4 animate-spin" /> Signing in...</> : <>Sign in securely <LogIn className="size-4" /></>}
      </button>

      <p className="mt-5 flex items-start gap-2 text-[0.72rem] leading-5 text-[#667570]"><LockKeyhole className="mt-0.5 size-4 shrink-0 text-[#27604c]" />Access is restricted to authorised CHES staff. Sessions expire automatically after 8 hours.</p>
    </form>
  );
}
