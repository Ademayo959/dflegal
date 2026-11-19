import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";

export const metadata: Metadata = { title: "Our team | DFLEGAL" };

// Replace the names and titles; the photos come from the imports above.
const team = [
  { name: "Lawyer name", role: "Title", photo: image1 },
  { name: "Lawyer name", role: "Title", photo: image2 },
  { name: "Lawyer name", role: "Title", photo: image3 },
  { name: "Lawyer name", role: "Title", photo: image4 },
];

export default function TeamPage() {
  return (
    <div className="min-h-svh bg-[#12110E] text-white">
      <Header />

      <main className="mx-auto max-w-[1360px] px-5 pb-[72px] pt-[120px] md:px-14">
        <h1 className="mb-[clamp(48px,8vw,104px)] text-[clamp(44px,7vw,100px)] font-light leading-none tracking-[-0.03em]">
          Our team
        </h1>

        <ul className="grid gap-x-[clamp(20px,2.5vw,32px)] gap-y-[clamp(28px,3.5vw,48px)] sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={i}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/5">
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <h2 className="mt-3.5 text-xl font-medium">{m.name}</h2>
              <p className="text-sm text-white/60">{m.role}</p>
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