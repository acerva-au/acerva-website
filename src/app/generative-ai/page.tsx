import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Image & Video Production Melbourne | Acerva",
  description:
    "Generative AI for image and video — brand, product and campaign work, plus the pipeline to produce it repeatedly rather than one piece at a time.",
  alternates: { canonical: "/generative-ai" },
  openGraph: {
    title: "AI Image & Video Production Melbourne | Acerva",
    description:
      "Generative AI for image and video — brand, product and campaign work, plus the pipeline to produce it repeatedly.",
    url: "/generative-ai",
  },
};

const work = [
  {
    title: "Image",
    body: "Brand, product and campaign visuals. Generated to a consistent look rather than whatever the model felt like that day.",
  },
  {
    title: "Video",
    body: "Short-form and explainer pieces, built from the same source material as the stills so the set holds together.",
  },
  {
    title: "Pipelines",
    body: "The part most people skip: wiring generation into your own tools so the tenth asset costs what the second did.",
  },
  {
    title: "Straight advice",
    body: "Which models are worth paying for, what still needs a human, and where the demo quietly differs from production.",
  },
];

export default function GenerativeAiPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-36 pb-20 lg:pt-44" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Generative media · Melbourne
            </p>
            <h1
              className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              Generative AI for <span style={{ color: "var(--accent)" }}>image and video</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Visual work made with generative models, for brand, product and campaign use — and the
              pipeline to keep producing it, so it does not become a one-off that nobody can repeat.
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
                href="/#services"
                className="font-medium px-7 py-3 rounded-lg text-center"
                style={{ color: "var(--text-primary)", border: "1px solid var(--border-light)" }}
              >
                Everything else we do
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
              What we make
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {work.map((w) => (
                <div
                  key={w.title}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
