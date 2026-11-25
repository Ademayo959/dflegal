import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import photo from "@/assets/image1.jpg"; // correct this path

export const metadata: Metadata = { title: "Dayo Fasehun | DFLEGAL" };

const highlights = [
  { value: "US$30 million", label: "Investment recovered in full for a multinational from a failed construction company" },
  { value: "10+ years", label: "Across litigation, corporate and property law" },
];

const qualifications = [
  "LL.B., University of Lagos",
  "Member, Chartered Institute of Arbitrators",
  "Certification, Harvard Law School",
  "CompTIA Security+ certification",
];

export default function DayoFasehunPage() {
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
              alt="Dayo Fasehun, Managing Partner"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 460px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h1 className="text-[clamp(36px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em]">Dayo Fasehun</h1>
            <p className="mt-3 text-lg text-[#C9AA6B]">Managing Partner</p>

            <p className="mt-10 max-w-[44ch] text-[clamp(20px,1.8vw,24px)] font-light leading-[1.4]">
              Dayo Fasehun is the Managing Partner of Dayo Fasehun Legal Practitioners, with more than ten years’
              experience across litigation, corporate and property law. He is especially sought after for advice on
              high-stakes property investment transactions.
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
                He devised and executed the strategy that enabled a multinational to recover its full US$30 million
                investment from a failed construction company, turning a near-total loss into complete recovery. He
                has structured and negotiated complex, high-value, multi-party transactions in which capital, control
                and risk were all at stake, crafting bespoke frameworks that protected his clients’ investments,
                secured their exits and withstood intense commercial and legal scrutiny.
              </p>
              <p>
                He has also guided foreign investors through Nigeria’s regulatory landscape, enabling them to
                establish operations lawfully and to bring in and retain the international talent their businesses
                depend on. For more than ten property companies, he has resolved stalled developments and cleared
                regulatory bottlenecks, moving major projects from deadlock to delivery.
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