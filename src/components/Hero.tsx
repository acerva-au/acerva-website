"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, var(--border-light) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(251, 191, 36, 0.08)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-4 py-1.5 mb-10" style={{ color: "var(--accent)", backgroundColor: "rgba(251, 191, 36, 0.1)", border: "1px solid var(--border-light)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
          Melbourne, Australia
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-10 leading-[1.08]" style={{ color: "var(--text-primary)" }}>
          Putting <span style={{ color: "var(--accent)" }}>AI to work</span> in your business,
          <br />
          so you can do what you're <span style={{ color: "var(--accent)" }}>good</span> at.
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 text-base"
            style={{ backgroundColor: "var(--accent)", color: "#1b3a2b" }}
          >
            Let's build
          </a>
          <a
            href="#work"
            className="font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 text-base"
            style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
          >
            See our work →
          </a>
        </div>

        <button
          onClick={() => window.scrollBy({ top: 400, behavior: "smooth" })}
          className="mt-24 flex flex-col items-center gap-2 cursor-pointer transition-colors duration-200 hover:opacity-70 mx-auto"
          style={{ color: "var(--text-tertiary)" }}
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
