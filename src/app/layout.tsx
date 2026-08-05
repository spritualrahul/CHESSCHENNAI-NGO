import type { Metadata } from "next";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
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
    images: [{ url: "/Assets/Galary/06367698-b922-469b-a84b-268e6e1edade.jpg", width: 1600, height: 1200 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Hope for Children and Families`,
    description: "Health, education and hope for vulnerable children.",
    images: ["/Assets/Galary/06367698-b922-469b-a84b-268e6e1edade.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          id="ches-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
