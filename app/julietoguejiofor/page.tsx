import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import photo from "@/assets/image3.jpg"; // correct this path

export const metadata: Metadata = { title: "Juliet Oguejiofor | DFLEGAL" };

const highlights = [
  { value: "US$45 million", label: "Repatriation secured for a pharmaceutical client" },
  { value: "US$100 million", label: "M&A due diligence that uncovered hidden liabilities equal to 60% of the deal’s value" },
];

const qualifications = [
  "MBA, Washington University in St. Louis (Olin)",
  "Law degree, University of Lagos",
];

export default function JulietOguejioforPage() {
  return (
    <div className="min-h-svh bg-[#12110E] text-white">
      <Header />

      <main className="mx-auto max-w-[1360px] px-5 pb-[72px] pt-[120px] md:px-14">
        <Link href="/team" className="text-sm text-white/60 transition-colors hover:text-white">
          ← Back to team
        </Link>

        <div className="mt-10 grid items-start gap-[clamp(32px,6vw,96px)] md:grid-cols-[5fr_7fr]">
          <div className="relative aspect-[4/5] w-full max-w-[460px] overflow-hidden bg-white/5 md:sticky md:top-28 md:max-w-none">
            <Image
              src={photo}
              alt="Juliet Oguejiofor, Partner"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 460px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h1 className="text-[clamp(36px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em]">Juliet Oguejiofor</h1>
            <p className="mt-3 text-lg text-[#C9AA6B]">Partner</p>

            <p className="mt-10 max-w-[44ch] text-[clamp(20px,1.8vw,24px)] font-light leading-[1.4]">
              Juliet Oguejiofor is a Partner at Dayo Fasehun Legal Practitioners, trusted by boards and executives
              on corporate governance, regulatory compliance and high-value commercial transactions.
            </p>

            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.value} className="border-t border-white/20 pt-4">
                  <dt className="text-[clamp(30px,3.6vw,48px)] font-light leading-none tracking-[-0.02em]">{h.value}</dt>
                  <dd className="mt-3 text-sm text-white/60">{h.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 max-w-[60ch] space-y-[1.2em] text-white/70">
              <p>
                She led the team that secured the repatriation of US$45 million for a pharmaceutical client, and
                headed due diligence on a US$100 million M&amp;A transaction, uncovering hidden liabilities equivalent
                to 60% of the deal’s value and sparing her client a costly acquisition.
              </p>
              <p>
                Juliet brings rare commercial insight to her counsel, advising not only on what the law requires,
                but on what the business needs in order to grow.
              </p>
            </div>

            <section className="mt-12">
              <h2 className="mb-3 text-sm text-white/60">Qualifications</h2>
              <ul className="border-b border-white/20">
                {qualifications.map((q) => (
                  <li key={q} className="border-t border-white/20 py-3.5">
                    {q}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-[1360px] px-5 pb-8 text-sm text-white/60 md:px-14">
        <p className="border-t border-white/20 pt-6">© 2026 Dayo Fasehun Legal Practitioners. All rights reserved.</p>
      </footer>
    </div>
  );
}