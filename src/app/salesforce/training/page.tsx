import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/** Nested under /salesforce so the two reinforce each other topically, and
 *  because "salesforce training melbourne" is its own search, not a scroll
 *  position on another page. */
export const metadata: Metadata = {
  title: "Salesforce Training Melbourne | Acerva",
  description:
    "Practical Salesforce training for teams and admins in Melbourne, run on your own org rather than a demo sandbox. Onsite or remote, one-off or ongoing.",
  alternates: { canonical: "/salesforce/training" },
  openGraph: {
    title: "Salesforce Training Melbourne | Acerva",
    description:
      "Practical Salesforce training for teams and admins in Melbourne, run on your own org rather than a demo sandbox.",
    url: "/salesforce/training",
  },
};

const sessions = [
  {
    title: "For the people using it",
    body: "Records, list views, reports — the things your team actually touches daily, done properly.",
  },
  {
    title: "For admins",
    body: "Flows, permissions and data hygiene. Enough to keep the org healthy without calling for help.",
  },
  {
    title: "For teams adding AI",
    body: "Agentforce and AI features in the CRM: what they do, where they help, where they don't.",
  },
  {
    title: "One-off or ongoing",
    body: "A single session to unblock a team, or a series as the org grows. No minimum engagement.",
  },
];

export default function SalesforceTrainingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-36 pb-20 lg:pt-44" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Salesforce · Training · Melbourne
            </p>
            <h1
              className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              Salesforce <span style={{ color: "var(--accent)" }}>training</span> that uses your org
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Plenty of Salesforce problems are really training problems — a team handed a system nobody
              showed them how to use. We run sessions on your own org, with your data and your processes,
              not a demo sandbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="font-medium px-7 py-3 rounded-lg text-center"
                style={{ backgroundColor: "var(--accent)", color: "#1b3a2b" }}
              >
                Talk to us about a session
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
              What we run
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sessions.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm mt-8" style={{ color: "var(--text-tertiary)" }}>
              Onsite around Melbourne, or remote.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
