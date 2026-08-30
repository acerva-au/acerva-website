"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              Let's build something together
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Tell us what you're working on, where you think AI might fit, or what's in the way. We'll get back within one business day.
            </p>

            <div className="space-y-4">
              <InfoRow
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />}
                label="Melbourne, Victoria, Australia"
              />
              <InfoRow
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                label="Response within 1 business day"
              />
            </div>
          </div>

          <div>
            {status === "sent" ? (
              <div className="rounded-xl p-10 text-center h-full flex flex-col items-center justify-center gap-4" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid rgba(34, 197, 94, 0.3)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#22c55e" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Message received
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      First name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={set("firstName")}
                      placeholder="Will"
                      style={{
                        width: "100%",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                        borderRadius: "0.5rem",
                        padding: "0.75rem",
                        fontSize: "0.875rem",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      Last name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={set("lastName")}
                      placeholder="Dewit"
                      style={{
                        width: "100%",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                        borderRadius: "0.5rem",
                        padding: "0.75rem",
                        fontSize: "0.875rem",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@company.com"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      fontSize: "0.875rem",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="0412 345 678 (optional)"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      fontSize: "0.875rem",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={set("company")}
                    placeholder="Your company (optional)"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      fontSize: "0.875rem",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Tell us what's happening *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="What are you building? Where could AI help? What would change if your systems just worked?"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      fontSize: "0.875rem",
                      resize: "none",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full font-medium py-3.5 rounded-lg transition-colors duration-200 text-sm"
                  style={{
                    backgroundColor: status === "sending" ? "rgba(251, 191, 36, 0.6)" : "var(--accent)",
                    color: "#1b3a2b",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-center" style={{ color: "#ef4444" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(251, 191, 36, 0.1)", border: "1px solid var(--border-light)" }}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
          {icon}
        </svg>
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
