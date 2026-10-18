import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * A page of its own, because Google ranks pages rather than businesses. On the
 * homepage this was one card in a grid, competing with five other services and
 * a title tag about AI — nothing a search for "salesforce consultant melbourne"
 * could match.
 */
export const metadata: Metadata = {
  title: "Salesforce Consultant Melbourne | Acerva",
  description:
    "Melbourne Salesforce consulting and development. Flows, Apex, LWC, integrations and Agentforce — plus ad hoc help on small, scoped jobs.",
  alternates: { canonical: "/salesforce" },
  openGraph: {
    title: "Salesforce Consultant Melbourne | Acerva",
    description:
      "Melbourne Salesforce consulting and development. Flows, Apex, LWC, integrations and Agentforce — plus ad hoc help on small, scoped jobs.",
    url: "/salesforce",
  },
};

const capabilities = [
  {
    title: "Build & configure",
    body: "Flows, Apex, Lightning Web Components, custom objects. Built clean so the next person can follow it.",
  },
  {
    title: "Untangle what drifted",
    body: "Orgs that grew sideways, automation nobody understands, data you can't trust. We straighten it out.",
  },
  {
    title: "Integrate",
    body: "Salesforce talking to accounting, quoting, and whatever else runs the business, without manual re-entry.",
  },
  {
    title: "AI in the CRM",
    body: "Agentforce and LLM features where they genuinely help, rather than where the brochure says.",
  },
];

export default function SalesforcePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-36 pb-20 lg:pt-44" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Salesforce · Melbourne
            </p>
            <h1
              className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              Salesforce consulting in <span style={{ color: "var(--accent)" }}>Melbourne</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Salesforce is powerful but easy to get tangled. We untangle it, build clean solutions that
              work, automate the tedious stuff, and bring AI into the CRM where it helps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="font-medium px-7 py-3 rounded-lg text-center"
                style={{ backgroundColor: "var(--accent)", color: "#1b3a2b" }}
              >
                Get in touch
              </a>
              <a
                href="#ad-hoc"
                className="font-medium px-7 py-3 rounded-lg text-center"
                style={{ color: "var(--text-primary)", border: "1px solid var(--border-light)" }}
              >
                Just need a small fix?
              </a>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
              What we help with
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {capabilities.map((c) => (
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
          </div>
        </section>

        <section id="ad-hoc" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Ad hoc
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              No project, just a problem
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              A broken form, a misconfigured field, a script that needs tweaking. Fast turnaround on
              scoped work — no retainer, no minimum engagement.
            </p>
            <a
              href="#contact"
              className="inline-block text-sm font-medium px-5 py-2.5 rounded-lg"
              style={{ color: "var(--accent)", border: "1px solid var(--border-light)" }}
            >
              Send us the details →
            </a>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Recent work
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              Salesforce &amp; accounting integration
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Three teams wasting time manually re-entering data across systems. We built a sync between
              Salesforce, quoting, and accounting. Stopped the waste.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
