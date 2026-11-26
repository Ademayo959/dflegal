"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/logo2.png"

const links = [
  { href: "/firm", label: "Our firm" },
  { href: "/tenets", label: "Our tenets" },
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/team", label: "Our team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-[18px] md:px-14 bg-linear-to-b from-black/70 to-black/0">
        <Link href="/" className="flex gap-2 items-center">
          <Image src={logo} alt="logo " className="h-18 w-26 max-sm:h-10 max-sm:w-18" />
          <Link href="/" aria-label="DFLEGAL home" className="text-[16px] font-semibold tracking-[0.28em] max-sm:text-[0.9rem]">
            DAYO FASEHUN LEGAL PRACTITIONERS
          </Link>
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu"
          className="flex items-center gap-3.5 py-2 text-sm font-medium"
        >
          {open ? "Close" : "Menu"}
          <span className="relative block h-[9px] w-[26px]">
            <span className={`absolute inset-x-0 top-0 h-[1.5px] bg-current transition-transform duration-300 ${open ? "translate-y-[3.75px] rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-current transition-transform duration-300 ${open ? "-translate-y-[3.75px] -rotate-45" : ""}`} />
          </span>
        </button>
      </header>

      <nav
        id="menu"
        aria-label="Main"
        className={`fixed inset-0 z-20 flex flex-col items-end justify-center bg-[#0E0D0A]/[.97] px-6 transition-opacity duration-300 md:px-[8vw] ${open ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-[clamp(30px,5.5vw,64px)] font-light leading-[1.3] tracking-[-0.02em] transition-colors hover:text-[#C9AA6B] focus-visible:text-[#C9AA6B]"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  );
}