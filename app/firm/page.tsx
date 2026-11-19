import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import statue from "@/assets/statue.jpeg"; // your Madam Justice photo

export const metadata: Metadata = { title: "Our firm | DFLEGAL" };

export default function FirmPage() {
  return (
    <div className="min-h-svh bg-[#12110E] text-white">
      <Header />

      <main className="mx-auto max-w-[1360px] px-5 pb-[72px] pt-[120px] md:px-14">
        <h1 className="mb-[clamp(48px,8vw,104px)] text-[clamp(44px,7vw,100px)] font-light leading-none tracking-[-0.03em]">
          Our firm
        </h1>

        <div className="grid items-start gap-[clamp(32px,6vw,96px)] md:grid-cols-[7fr_5fr]">
          <div className="max-w-[56ch] text-white/65">
            <p className="text-[clamp(22px,2.2vw,30px)] font-light leading-[1.35] tracking-[-0.01em] text-white">
              Dayo Fasehun Legal Practitioners is a law firm built for clients who cannot afford uncertainty.
            </p>

            <p className="mt-[1.6em]">
              We advise multinationals, investors, and high-net-worth individuals on the transactions that matter
              most to them, with precision, discretion, and the commercial instinct that high-value work demands.
            </p>

            <p className="my-[clamp(32px,4vw,56px)] max-w-[20ch] text-[clamp(28px,3.4vw,46px)] font-light leading-[1.15] tracking-[-0.02em] text-[#C9AA6B]">
              We do not merely advise on the law. We design outcomes.
            </p>

            <p>
              Our work begins at first contact, well before a document is drafted. We anticipate risk, structure
              against it, and guide every transaction from first conversation to completion—so our clients can
              move with confidence.
            </p>
          </div>

          <div className="relative aspect-[2/3] w-full max-w-[420px] overflow-hidden bg-[#E3DFD6] md:max-w-none">
            <Image
              src={statue}
              alt="Statues of Lady Justice holding scales"
              fill
              sizes="(min-width: 768px) 40vw, 420px"
              className="object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-[1360px] px-5 pb-8 text-sm text-white/60 md:px-14">
        <p className="border-t border-white/20 pt-6">© 2026 Dayo Fasehun Legal Practitioners. All rights reserved.</p>
      </footer>
    </div>
  );
}