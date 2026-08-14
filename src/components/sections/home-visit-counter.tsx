"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

type VisitResponse = {
  count: number | null;
};

let homeVisitRequest: Promise<VisitResponse> | undefined;

function formatVisitCount(count: number) {
  return new Intl.NumberFormat("en-IN").format(count);
}

function recordHomeVisit() {
  if (!homeVisitRequest) {
    homeVisitRequest = fetch("/api/visits/home", {
      method: "POST",
      cache: "no-store",
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Unique visitor request failed.");
        }

        return (await response.json()) as VisitResponse;
      })
      .catch((error) => {
        homeVisitRequest = undefined;
        throw error;
      });
  }

  return homeVisitRequest;
}

export function HomeVisitCounter({ initialCount }: { initialCount: number | null }) {
  const [count, setCount] = useState(initialCount);
  const [status, setStatus] = useState<"ready" | "loading" | "unavailable">(initialCount === null ? "loading" : "ready");

  useEffect(() => {
    let active = true;

    void recordHomeVisit()
      .then((data) => {
        if (!active) return;

        if (typeof data.count === "number") {
          setCount(data.count);
          setStatus("ready");
        } else if (initialCount === null) {
          setStatus("unavailable");
        }
      })
      .catch(() => {
        if (active && initialCount === null) {
          setStatus("unavailable");
        }
      });

    return () => {
      active = false;
    };
  }, [initialCount]);

  return (
    <section className="border-y border-[#d6e7d9] bg-[#eaf4eb] px-5 py-9 text-[#063d39] md:py-10" aria-label="CHES community connection count">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
        <div className="flex items-start gap-4">
          <span className="mt-1 grid size-11 shrink-0 place-items-center rounded-full bg-[#063d39] text-[#e0aa42] shadow-[0_8px_18px_rgb(6_61_57/0.16)]">
            <Heart className="size-5 fill-current" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#a46d0b]">A growing circle of care</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold leading-tight md:text-3xl">Thank you for discovering CHES.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#31574f]">Every new connection helps carry care, education and hope further.</p>
          </div>
        </div>

        <div className="flex items-end gap-4 border-t border-[#c9ddce] pt-6 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#31574f]">Our growing circle</p>
            <p className="mt-1 flex items-baseline gap-2 text-[#063d39]" aria-live="polite">
              <span className="font-heading text-4xl font-semibold leading-none md:text-5xl">{status === "unavailable" ? "--" : count === null ? "..." : formatVisitCount(count)}</span>
              <span className="text-base font-extrabold tracking-normal text-[#a46d0b] md:text-lg">visitors</span>
            </p>
            <p className="mt-2 text-[0.68rem] leading-4 text-[#527269]">One anonymous count per browser/device</p>
          </div>
        </div>
      </div>
    </section>
  );
}
