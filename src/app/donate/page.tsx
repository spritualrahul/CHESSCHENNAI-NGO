import type { Metadata } from "next";

import { DonationForm } from "@/components/sections/donation-form";

export const metadata: Metadata = {
  title: "Donate",
  description: "Donate to CHES and support vulnerable children through health, education, shelter and family care.",
};

export default function DonatePage() {
  return <DonationForm />;
}
