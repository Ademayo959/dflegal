import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import data from "@/assets/practice/data.jpeg";
import corporate from "@/assets/practice/corporate.jpeg";
import property from "@/assets/practice/property.jpeg";
import regulatory from "@/assets/practice/regulatory.jpeg";
import will from "@/assets/practice/will.jpeg";
import electricity from "@/assets/practice/electricity.jpeg";

export const metadata: Metadata = { title: "Practice areas | DFLEGAL" };

const areas = [
  { title: "Real Estate & Property", img: property },
  { title: "Regulatory & Compliance", img: regulatory },
  { title: "Corporate & Commercial", img: corporate },
  { title: "Data & Startups", img: data },
  { title: "Infrastructure & Electricity", img: electricity },
  { title: "Wills & Probate", img: will },
];

export default function PracticeAreasPage() {
  return (
    <div className="min-h-svh bg-[#12110E] text-white">
      <Header />

      <main className="mx-auto max-w-[1360px] px-5 pb-[72px] pt-[120px] md:px-14">
        <h1 className="mb-[clamp(48px,8vw,104px)] text-[clamp(44px,7vw,100px)] font-light leading-none tracking-[-0.03em]">
          Practice areas
        </h1>

        <ul className="grid gap-x-[clamp(20px,2.5vw,32px)] gap-y-[clamp(28px,3.5vw,48px)] sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.title}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-3.5 text-xl font-medium">{a.title}</h2>
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