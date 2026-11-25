import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import photo from "@/assets/image4.jpg"; // correct this path

export const metadata: Metadata = { title: "Abidemi M. Olowolagba | DFLEGAL" };

const qualifications = [
  "WIPO Certificate in Intellectual Property",
  "Trained with the Nigerian Institute of Chartered Arbitrators",
  "GDPR Data Protection Officer expertise",
];

export default function AbidemiOlowolagbaPage() {
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
              alt="Abidemi M. Olowolagba, Associate"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 460px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h1 className="text-[clamp(36px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em]">
              Abidemi M. Olowolagba
            </h1>
            <p className="mt-3 text-lg text-[#C9AA6B]">Associate</p>

            <p className="mt-10 max-w-[44ch] text-[clamp(20px,1.8vw,24px)] font-light leading-[1.4]">
              Abidemi M. Olowolagba is an Associate at Dayo Fasehun Legal Practitioners, advising businesses on the
              protection of their most valuable assets: their brands, ideas and data.
            </p>

            <div className="mt-12 max-w-[60ch] space-y-[1.2em] text-white/70">
              <p>
                She counsels on trademark strategy and brand protection, leads anti-counterfeiting initiatives that
                safeguard clients’ market position and reputation, and designs data protection and compliance
                frameworks that keep organisations ahead of evolving regulation.
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