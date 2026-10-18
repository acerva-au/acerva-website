import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE_URL } from "@/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const TITLE = "Acerva | AI Enablement & Development";
const DESCRIPTION =
  "Acerva is a Melbourne-based consultancy. We help businesses put AI to work, and build the software, integrations and CRM solutions around it.";

export const metadata: Metadata = {
  // Without this, every relative URL below would need the origin spelled out,
  // and Next refuses to build if one is missing.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["AI enablement", "AI consulting", "AI development", "automation", "Salesforce", "web development", "Melbourne"],
  // Pins the preferred URL so www/apex and any query-string variants do not
  // get indexed as separate pages competing with each other.
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: TITLE,
    description:
      "Melbourne-based consultancy. AI enablement, AI-assisted development, integrations, CRM, and straight technical advice.",
    url: "/",
    siteName: "Acerva",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Melbourne-based consultancy. AI enablement, AI-assisted development, integrations, CRM, and straight technical advice.",
  },
};

/** Tells search engines what this business is, rather than making them infer
 *  it from prose. Only facts the site already states. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Acerva",
  url: SITE_URL,
  description: DESCRIPTION,
  email: "hello@acerva.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: { "@type": "Country", name: "Australia" },
  knowsAbout: [
    "AI enablement",
    "AI-assisted development",
    "Software integrations",
    "CRM implementation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  );
}
