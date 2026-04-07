"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#3B0B58] text-white px-6 md:px-12 flex justify-between items-center sticky top-0 z-[100] h-14 md:h-16 shadow-sm">
      <div className="font-serif text-xl md:text-2xl tracking-tighter font-medium">TÚTÙ</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-[9px] font-bold tracking-[0.25em] uppercase">
        <Link href="/" className="border-b border-white pb-0.5">Home</Link>
        <Link href="#services" className="opacity-70 hover:opacity-100 transition-opacity">Services</Link>
        <Link href="#testimonials" className="opacity-70 hover:opacity-100 transition-opacity">Testimonials</Link>
        <Link href="#blogs" className="opacity-70 hover:opacity-100 transition-opacity">Blogs</Link>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden flex flex-col gap-1 p-1" onClick={() => setIsOpen(!isOpen)}>
        <div className={`w-5 h-[1.5px] bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-5 h-[1.5px] bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-5 h-[1.5px] bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#3B0B58] flex flex-col items-center py-6 gap-6 text-[9px] font-bold tracking-[0.2em] uppercase border-t border-white/5 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="#blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
        </div>
      )}
    </nav>
  );
}
