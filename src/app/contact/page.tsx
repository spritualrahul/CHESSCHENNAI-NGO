import type { Metadata } from "next";
import { ContactPageContent } from "@/components/sections/contact-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact CHES for donations, volunteering, partnerships and program enquiries.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
