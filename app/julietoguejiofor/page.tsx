import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import photo from "@/assets/image3.jpg";

export const metadata: Metadata = { title: "Juliet Oguejiofor | DFLEGAL" };

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

            <div className="mt-10 max-w-[60ch] space-y-[1.2em] text-base leading-[1.7] text-white/70">
              <p>
                Juliet Oguejiofor is a Partner at Dayo Fasehun Legal Practitioners, trusted by boards and executives
                on corporate governance, regulatory compliance and high-value commercial transactions.
              </p>
              <p>
                She led the team that secured the repatriation of US$45 million for a pharmaceutical client, and
                headed due diligence on a US$100 million M&amp;A transaction, uncovering hidden liabilities equivalent
                to 60% of the deal’s value and sparing her client a costly acquisition.
              </p>
              <p>
                Juliet brings rare commercial insight to her counsel, advising not only on what the law requires,
                but on what the business needs in order to grow.
              </p>
              <p>
                She holds an MBA from Washington University in St. Louis (Olin) and a law degree from the University
                of Lagos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-[1360px] px-5 pb-8 text-sm text-white/60 md:px-14">
        <p className="border-t border-white/20 pt-6">© 2026 Dayo Fasehun Legal Practitioners. All rights reserved.</p>
      </footer>
    </div>
  );
}