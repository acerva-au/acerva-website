"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";

// Absolute, not bare "#anchors": these have to work from sub-pages too,
// where a bare hash would just jump nowhere on the wrong page.
const links = [
  { href: "/salesforce", label: "Salesforce" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header
      data-scrolled={isScrolled}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(27, 58, 43, 0.9)" : "transparent",
        borderBottom: isScrolled ? "1px solid var(--border)" : "none",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Acerva home" className="flex items-center">
            {/* Two cuts of the same wordmark; CSS picks one by theme and scroll
                state, so there is no flash while the theme resolves. */}
            <Image
              src="/brand/wordmark-white.png"
              alt="Acerva"
              width={960}
              height={129}
              priority
              className="nav-wordmark nav-wordmark--white"
            />
            <Image
              src="/brand/wordmark-green.png"
              alt=""
              aria-hidden="true"
              width={960}
              height={129}
              priority
              className="nav-wordmark nav-wordmark--green"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: isScrolled ? "#e8eae7" : "var(--text-secondary)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
              style={{
                backgroundColor: "var(--accent)",
                color: "#1b3a2b",
              }}
            >
              Get in touch
            </Link>
          </div>

          <button
            className="md:hidden p-1 transition-colors"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ color: isScrolled ? "#e8eae7" : "var(--text-secondary)" }}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "256px" : "0",
          borderBottom: isOpen ? "1px solid var(--border)" : "none",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="block py-3 text-base transition-colors border-b last:border-0"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--border-light)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={close}
            className="block text-center py-3 rounded-lg mt-3 text-sm font-medium transition-colors"
            style={{
              backgroundColor: "var(--accent)",
              color: "#1b3a2b",
            }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
