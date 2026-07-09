"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const links = [
  { href: "#rooms", label: "Stay" },
  { href: "#dine", label: "Dine" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-foam/95 py-3.5 shadow-soft backdrop-blur" : "py-6"
      }`}
    >
      <nav className="wrap flex items-center justify-between">
        <a
          href="#arrival"
          className={`flex flex-col leading-tight font-display italic text-xl transition-colors duration-300 ${
            solid ? "text-estuary-dark" : "text-foam"
          }`}
        >
          {site.name}
          <span className="mt-0.5 font-mono text-[10px] not-italic uppercase tracking-[0.18em] text-brass">
            Real, Quezon
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[14px] font-medium transition-colors hover:text-brass ${
                solid ? "text-basalt/80" : "text-foam/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#booking" className="btn btn-primary hidden md:inline-flex text-[13px] px-6 py-3.5">
          Check availability
        </a>

        <a
          href="#booking"
          className={`md:hidden text-[13px] font-semibold underline underline-offset-4 ${
            solid ? "text-estuary" : "text-foam"
          }`}
        >
          Book
        </a>
      </nav>
    </header>
  );
}
