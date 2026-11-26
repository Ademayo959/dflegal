import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import photo from "@/assets/image1.jpg";

export const metadata: Metadata = { title: "Dayo Fasehun | DFLEGAL" };

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

            <div className="mt-10 max-w-[60ch] space-y-[1.2em] text-base leading-[1.7] text-white/70">
              <p>
                Dayo Fasehun is the Managing Partner of Dayo Fasehun Legal Practitioners, with more than ten years’
                experience across litigation, corporate and property law. He is especially sought after for advice on
                high-stakes property investment transactions.
              </p>
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
              <p>
                He holds an LL.B. from the University of Lagos, is a Member of the Chartered Institute of
                Arbitrators, and has completed a certification at Harvard Law School. He also holds a CompTIA
                Security+ certification.
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