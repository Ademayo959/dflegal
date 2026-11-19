"use client";
import { useState } from "react";
import Header from "@/components/Header";

const areas = [
  "Real Estate & Property",
  "Regulatory & Compliance",
  "Corporate & Commercial",
  "Data & Startups",
  "Infrastructure & Electricity",
  "Wills & Probate",
  "Not sure yet",
];

const field =
  "w-full rounded-none border-0 border-b border-white/50 bg-transparent py-2.5 text-base text-white outline-none transition-colors focus:border-white";

function Row({ icon, label, children }: { icon?: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-t border-white/20 py-5 last:border-b">
      <span className="mt-1 w-[22px] shrink-0 text-[#C9AA6B]">{icon}</span>
      <div>
        <small className="block text-sm text-white/60">{label}</small>
        <span className="text-[clamp(18px,1.7vw,22px)]">{children}</span>
      </div>
    </div>
  );
}

const svg = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, "aria-hidden": true } as const;

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send new FormData(e.currentTarget) to an API route or email service
    setSent(true);
  }

  return (
    <div className="min-h-svh bg-[#12110E] text-white [color-scheme:dark]">
      <Header />

      <main className="mx-auto max-w-[1360px] px-5 pb-[72px] pt-[120px] md:px-14">
        <h1 className="mb-[clamp(48px,8vw,104px)] text-[clamp(44px,7vw,100px)] font-light leading-none tracking-[-0.03em]">
          Contact
        </h1>

        <div className="grid gap-[clamp(32px,6vw,96px)] md:grid-cols-[7fr_5fr]">
          <div>
            <Row
              label="Email"
              icon={
                <svg {...svg}>
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
                </svg>
              }
            >
              Email address to be added
            </Row>
            <Row label="Phone">
              <a href="tel:07036555635">0703 655 5635</a>
            </Row>
            <Row
              label="Visit us"
              icon={
                <svg {...svg}>
                  <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              }
            >
              229, Herbert Macaulay, Yaba, Lagos State, Nigeria.
            </Row>
          </div>

          {sent ? (
            <p role="status" className="max-w-[30ch] text-[clamp(20px,2vw,26px)] font-light leading-snug">
              Thank you. A member of the firm will be in touch.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Full name</label>
                <input id="name" name="name" autoComplete="name" required className={field} />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required className={field} />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="area" className="text-sm font-medium">Area of advice</label>
                <select id="area" name="area" className={field}>
                  {areas.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                <textarea id="message" name="message" rows={5} required className={`${field} resize-y`} />
              </div>
              <button
                type="submit"
                className="justify-self-start rounded-sm bg-white px-[34px] py-[15px] text-[15px] font-medium text-black transition-opacity hover:opacity-85"
              >
                <p className="text-black">Send message</p>
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="mx-auto max-w-[1360px] px-5 pb-8 text-sm text-white/60 md:px-14">
        <p className="border-t border-white/20 pt-6">© 2026 Dayo Fasehun Legal Practitioners. All rights reserved.</p>
      </footer>
    </div>
  );
}