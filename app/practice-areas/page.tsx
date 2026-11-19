import type { Metadata } from "next";
import Header from "@/components/Header";
import bg from "@/assets/bg.jpg";

export const metadata: Metadata = { title: "Practice areas | DFLEGAL" };

// Each tile shows a different crop of bg.jpg until you have real photos.
// To swap in a photo, add an `image` import per area and use it in place of the crop.
const areas = [
  { title: "Real Estate & Property", pos: "100% 74%" },
  { title: "Regulatory & Compliance", pos: "0% 43%" },
  { title: "Corporate & Commercial", pos: "20% 69%" },
  { title: "Data & Startups", pos: "60% 80%" },
  { title: "Infrastructure & Electricity", pos: "100% 18%" },
  { title: "Wills & Probate", pos: "40% 92%" },
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
              <div
                role="img"
                aria-label={a.title}
                className="aspect-[4/5] w-full bg-no-repeat"
                style={{
                  backgroundImage: `url(${bg.src})`,
                  backgroundSize: "200% auto",
                  backgroundPosition: a.pos,
                }}
              />
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