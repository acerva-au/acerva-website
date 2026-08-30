import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acerva | AI Enablement & Development",
  description:
    "Acerva is a Melbourne-based consultancy. We help businesses put AI to work, and build the software, integrations and CRM solutions around it.",
  keywords: ["AI enablement", "AI consulting", "AI development", "automation", "Salesforce", "web development", "Melbourne"],
  openGraph: {
    title: "Acerva | AI Enablement & Development",
    description:
      "Melbourne-based consultancy. AI enablement, AI-assisted development, integrations, CRM, and straight technical advice.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        {children}
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  );
}
