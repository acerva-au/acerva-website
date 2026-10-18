import Link from "next/link";
const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: "var(--text-primary)" }}>
              Acerva
            </span>
            <p className="text-xs mt-3" style={{ color: "var(--text-tertiary)" }}>
              Melbourne, Victoria, Australia
            </p>
            <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
              ABN 88 697 684 049
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
              Contact
            </p>
            <a
              href="mailto:hello@acerva.com.au"
              className="text-xs transition-colors duration-200 hover:opacity-80 block"
              style={{ color: "var(--text-tertiary)" }}
            >
              hello@acerva.com.au
            </a>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "var(--border)" }} />

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            © {new Date().getFullYear()} Acerva Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
