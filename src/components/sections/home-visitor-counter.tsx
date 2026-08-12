"use client";

import { HeartHandshake, LoaderCircle, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";

const storageKey = "ches-home-visitor-id";

type VisitorState = {
  count: number | null;
  error: string | null;
  loading: boolean;
};

function getVisitorId() {
  const stored = window.localStorage.getItem(storageKey);

  if (stored) {
    return stored;
  }

  const next = window.crypto.randomUUID();
  window.localStorage.setItem(storageKey, next);

  return next;
}

export function HomeVisitorCounter() {
  const [state, setState] = useState<VisitorState>({
    count: null,
    error: null,
    loading: true,
  });
  const visitorLabel = state.count === 1 ? "visitor" : "visitors";

  useEffect(() => {
    let cancelled = false;

    async function recordVisit() {
      try {
        const response = await fetch("/api/visitors/home", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitorId: getVisitorId() }),
        });
        const result = (await response.json()) as {
          totalVisitors?: number;
          error?: string;
        };

        if (cancelled) {
          return;
        }

        if (!response.ok || typeof result.totalVisitors !== "number") {
          setState({
            count: null,
            error: result.error ?? "Visitor count is temporarily unavailable.",
            loading: false,
          });
          return;
        }

        setState({ count: result.totalVisitors, error: null, loading: false });
      } catch {
        if (!cancelled) {
          setState({
            count: null,
            error: "Visitor count is temporarily unavailable.",
            loading: false,
          });
        }
      }
    }

    recordVisit();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-[var(--ches-paper)] px-5 py-7">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg border border-[#dde8e2] bg-white shadow-[0_12px_30px_rgb(11_78_109/0.07)] md:grid-cols-[1fr_0.58fr]">
        <div className="flex items-center gap-4 p-5 sm:p-6">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#edf6f2] text-[var(--ches-green)] ring-1 ring-[#d8e8df]">
            {state.loading ? <LoaderCircle className="size-5 animate-spin" /> : <UsersRound className="size-5" />}
          </span>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--ches-orange)]">Community reach</p>
            <h2 className="mt-1 font-heading text-3xl font-semibold leading-none text-[var(--ches-blue)] sm:text-4xl">
              {state.loading ? "Counting visits" : state.error ? "Count unavailable" : `${state.count?.toLocaleString("en-IN")} ${visitorLabel}`}
            </h2>
            <p className="mt-2 text-sm font-medium leading-6 text-[var(--ches-muted)]">
              {state.error ?? "Thank you for being part of the CHES journey online."}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-[#e4ece8] bg-[#f7fbf8] p-5 md:border-l md:border-t-0">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[var(--ches-orange)] ring-1 ring-[#eadfcb]">
            <HeartHandshake className="size-5" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-[var(--ches-blue)]">Growing every day</p>
            <p className="mt-1 text-xs font-semibold leading-5 text-[var(--ches-muted)]">Each visit helps more people discover our work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
