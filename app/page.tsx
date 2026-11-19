import Image from "next/image";
import bg from "@/assets/bg.jpg";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative h-svh min-h-[560px] overflow-hidden">
      <Image src={bg} alt="" fill priority sizes="100vw" className="object-cover object-[50%_42%]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,9,7,.9),rgba(10,9,7,.5)_30%,transparent_62%),linear-gradient(to_bottom,rgba(10,9,7,.55),transparent_22%)]" />

      <Header />

      <div className="absolute bottom-14 left-6 w-[min(600px,calc(100%-3rem))] md:bottom-20 md:left-[6vw]">
        <Testimonials />
      </div>

      <p className="absolute bottom-5 left-6 text-[13px] text-white/60 md:left-[6vw]">
        © 2026 Dayo Fasehun Legal Practitioners. All rights reserved.
      </p>
    </main>
  );
}