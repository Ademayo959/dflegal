import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const font = Hanken_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = { title: "DFLEGAL" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#12110E] text-white antialiased`}>{children}</body>
    </html>
  );
}