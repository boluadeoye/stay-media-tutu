import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  weight:['300', '400', '500', '600', '700'],
  style:['normal', 'italic']
});

export const metadata: Metadata = { title: "TÚTÙ | Premium Cocktails" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-[#FDFCFD] text-[#1A1A1A]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
