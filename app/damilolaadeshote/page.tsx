import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import photo from "@/assets/image2.jpg"; // correct this path

export const metadata: Metadata = { title: "Damilola Tosin Adeshote | DFLEGAL" };

const qualifications = ["B.Sc. (Hons) Accounting, University of Lagos", "ACCA member"];

const experience = ["Nokia", "MainOne Cable (an Equinix company)", "3Consulting"];

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-3 text-sm text-white/60">{title}</h2>
      <ul className="border-b border-white/20">
        {items.map((item) => (
          <li key={item} className="border-t border-white/20 py-3.5">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function DamilolaAdeshotePage() {
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
              alt="Damilola Tosin Adeshote, Operations & Accounts"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 460px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h1 className="text-[clamp(36px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em]">
              Damilola Tosin Adeshote
            </h1>
            <p className="mt-3 text-lg text-[#C9AA6B]">Operations &amp; Accounts</p>

            <p className="mt-10 max-w-[44ch] text-[clamp(20px,1.8vw,24px)] font-light leading-[1.4]">
              Damilola Tosin Adeshote heads Operations and Accounts, bringing precision, discipline and financial
              control to the firm’s day-to-day management.
            </p>

            <div className="mt-12 max-w-[60ch] space-y-[1.2em] text-white/70">
              <p>
                She has built a distinguished career in finance operations, audit and compliance. She is recognised
                for her accuracy, analytical rigour and ability to distil complex financial data into clear,
                actionable insight.
              </p>
            </div>

            <List title="Qualifications" items={qualifications} />
            <List title="Experience" items={experience} />
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-[1360px] px-5 pb-8 text-sm text-white/60 md:px-14">
        <p className="border-t border-white/20 pt-6">© 2026 Dayo Fasehun Legal Practitioners. All rights reserved.</p>
      </footer>
    </div>
  );
}