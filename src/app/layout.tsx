import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { FooterShell } from "@/components/layout/footer-shell";
import { Navbar } from "@/components/layout/navbar";
import { RouteScrollReset } from "@/components/layout/route-scroll-reset";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Hope for Children and Families`,
    template: `%s | ${site.name}`,
  },
  description:
    "Community Health Education Society supports vulnerable children and families through health, education, protection and hope in Chennai.",
  openGraph: {
    title: `${site.fullName} | Hope for Children and Families`,
    description:
      "Support vulnerable children through health, education, shelter and family care.",
    url: site.url,
    siteName: site.fullName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.fullName} | Hope for Children and Families`,
    description: "Health, education and hope for vulnerable children.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: site.address,
    description: site.tagline,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${caveat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--ches-warm-white)] font-sans text-[var(--ches-charcoal)]">
        <RouteScrollReset />
        <Navbar />
        <main>{children}</main>
        <FooterShell />
        <Script
          id="ches-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
