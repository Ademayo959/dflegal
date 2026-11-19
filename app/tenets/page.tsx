import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = { title: "Our tenets | DFLEGAL" };

const tenets = [
  {
    title: "Strategy",
    text: "Every mandate is approached with a clear, result-oriented mindset, not just a legal process.",
  },
  {
    title: "Meticulous",
    text: "We pay attention to the details others miss, because in high-value transactions, detail is where value is protected—or lost.",
  },
  {
    title: "Discreet",
    text: "Our clients trust us with their most sensitive mandates. We treat that trust as our highest obligation.",
  },
];

export default function TenetsPage() {
  return (
    <div className="min-h-svh bg-[#12110E] text-white">
      <Header />

      <main className="mx-auto max-w-[1360px] px-5 pb-[72px] pt-[120px] md:px-14">
        <h1 className="mb-[clamp(48px,8vw,104px)] text-[clamp(44px,7vw,100px)] font-light leading-none tracking-[-0.03em]">
          Our tenets
        </h1>

        <ul className="border-b border-white/20">
          {tenets.map((t) => (
            <li
              key={t.title}
              className="grid gap-[clamp(16px,3vw,80px)] border-t border-white/20 py-[clamp(28px,4vw,48px)] md:grid-cols-[5fr_7fr]"
            >
              <h2 className="text-[clamp(30px,4vw,56px)] font-light leading-[1.05] tracking-[-0.02em]">
                {t.title}
              </h2>
              <p className="max-w-[48ch] text-[clamp(17px,1.5vw,20px)] text-white/65">{t.text}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="mx-auto max-w-[1360px] px-5 pb-8 text-sm text-white/60 md:px-14">
        <p className="border-t border-white/20 pt-6">© 2026 Dayo Fasehun Legal Practitioners. All rights reserved.</p>
      </footer>
    </div>
  );
}