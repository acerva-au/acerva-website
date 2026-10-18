import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * The winnable one. "Salesforce admin" on its own is a job search — people
 * wanting to become one or be hired as one. "Outsourced Salesforce admin" is a
 * service a business buys, with far less competition and a clear problem
 * behind it: an org that needs maintaining and nobody to maintain it.
 */
export const metadata: Metadata = {
  title: "Outsourced Salesforce Admin Melbourne | Acerva",
  description:
    "On-demand Salesforce admin support for Melbourne businesses too small for a full-time hire. Day-to-day changes, user management, data hygiene. No minimum engagement.",
  alternates: { canonical: "/salesforce/admin-support" },
  openGraph: {
    title: "Outsourced Salesforce Admin Melbourne | Acerva",
    description:
      "On-demand Salesforce admin support for Melbourne businesses too small for a full-time hire.",
    url: "/salesforce/admin-support",
  },
};

const covers = [
  {
    title: "Day-to-day changes",
    body: "Fields, page layouts, list views, reports and dashboards. The small requests that otherwise pile up.",
  },
  {
    title: "Users & permissions",
    body: "Onboarding, offboarding, profiles and permission sets — done properly rather than by cloning someone.",
  },
  {
    title: "Data hygiene",
    body: "Duplicates, stale records, validation that never fired. Keeping the data worth reporting on.",
  },
  {
    title: "Keeping up with releases",
    body: "Three Salesforce releases a year. We watch what changes and what it breaks, so you don't have to.",
  },
];

export default function AdminSupportPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-36 pb-20 lg:pt-44" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Salesforce · Admin support · Melbourne
            </p>
            <h1
              className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              Outsourced Salesforce <span style={{ color: "var(--accent)" }}>admin</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Plenty of businesses need a Salesforce admin but not a full-time one. We cover the role
              on demand — the day-to-day changes, the tidying, the things that quietly rot when nobody
              owns them. No retainer, no minimum engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="font-medium px-7 py-3 rounded-lg text-center"
                style={{ backgroundColor: "var(--accent)", color: "#1b3a2b" }}
              >
                Get in touch
              </a>
              <Link
                href="/salesforce"
                className="font-medium px-7 py-3 rounded-lg text-center"
                style={{ color: "var(--text-primary)", border: "1px solid var(--border-light)" }}
              >
                Salesforce consulting
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
              What it covers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {covers.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm mt-8" style={{ color: "var(--text-tertiary)" }}>
              Need someone trained up internally instead?{" "}
              <Link href="/salesforce/training" style={{ color: "var(--accent)" }}>
                We run Salesforce training
              </Link>
              .
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
