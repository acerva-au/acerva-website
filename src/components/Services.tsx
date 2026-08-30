const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "AI Enablement",
    description: "Most teams have tried ChatGPT and stalled. We find where AI actually earns its keep in your business, set it up properly, and get your team using it with confidence. Practical, not hype.",
    tags: ["Claude", "Agents", "Workflows", "Training"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI-Assisted Development",
    description: "We build software with AI in the loop: faster, leaner, and still engineered properly. Custom apps, internal tools, websites, and the AI features inside them.",
    tags: ["Custom apps", "Internal tools", "Next.js", "LLM integration"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16M10 11h4" />
      </svg>
    ),
    title: "Integrations & Data",
    description: "Your tools should talk to each other and your data should be trustworthy. We connect systems, clean up what's broken, and automate the steps in between. It's also the groundwork AI needs.",
    tags: ["REST APIs", "Automation", "Data Quality", "Migration"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Salesforce Solutions",
    description: "Salesforce is powerful but easy to get tangled. We untangle it, build clean solutions that work, automate the tedious stuff, and bring AI into the CRM where it helps rather than where the brochure says.",
    tags: ["Salesforce", "Flows", "LWC", "Apex", "Agentforce"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI & Technical Strategy",
    description: "Where does AI fit? What's worth building, what's worth buying, and which vendor is telling the truth? Clear thinking on the decisions that matter. Without the consulting overhead.",
    tags: ["AI roadmap", "Architecture", "Review", "Vendor eval"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Quick Fixes",
    description: "Smaller problems need solving too. A broken form, a misconfigured field, a script that needs tweaking. Fast turnaround on scoped work.",
    tags: ["Ad Hoc", "One-off", "Small scope"],
    cta: { label: "Send us the details", href: "#contact" },
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl p-6 hover:border-opacity-100 transition-all duration-200 flex flex-col"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-opacity-100 transition-colors duration-200"
                style={{
                  backgroundColor: "rgba(251, 191, 36, 0.1)",
                  color: "var(--accent)",
                  border: "1px solid var(--border-light)",
                }}
              >
                {s.icon}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-secondary)" }}>
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-md px-2.5 py-1"
                    style={{
                      color: "var(--text-tertiary)",
                      backgroundColor: "var(--bg-tertiary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {"cta" in s && s.cta && (
                <a
                  href={s.cta.href}
                  className="self-start text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  style={{
                    color: "var(--accent)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  {s.cta.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
