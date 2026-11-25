"use client";
import { useState } from "react";

const items = [
  { q: "The firm handled our matter with professionalism and gave us exceptional results.", by: "A & O Holdings Limited" },
  { q: "They explained every step clearly and in plain language.", by: "M.K" },
  { q: "They handled my matter with dedication and personal attention.", by: "Mr. O.S" },
  { q: "I have complete confidence in their legal expertise and integrity.", by: "Mrs. D.T" },
  { q: "The firm guided us through Nigeria’s regulatory landscape. Approvals that once seemed uncertain were secured efficiently, allowing us to establish our operations without delay.", by: "General Counsel, T & O" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((n) => (n + 1) % items.length);

  return (
    <div className="group" role="group" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="grid">
        {items.map((t, k) => (
          <figure
            key={k}
            aria-hidden={k !== i}
            className={`col-start-1 row-start-1 transition-opacity duration-700 ${k === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <blockquote className="text-[clamp(21px,2.5vw,32px)] font-light leading-[1.35] tracking-[-0.01em] text-pretty">
              “{t.q}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-[#C9AA6B]">{t.by}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex gap-2.5">
        {items.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} className="flex h-5 w-14 shrink items-center">
            <span className="relative block h-0.5 w-full bg-white/30">
              <span
                onAnimationEnd={k === i ? next : undefined}
                className={`absolute inset-y-0 left-0 bg-white ${
                  k < i
                    ? "w-full"
                    : k === i
                    ? "animate-[fill_7s_linear_forwards] group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none"
                    : "w-0"
                }`}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}