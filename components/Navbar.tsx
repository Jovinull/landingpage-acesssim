"use client";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = navItems
        .map(n => document.querySelector(n.href) as HTMLElement)
        .filter(Boolean);
      let current = "#inicio";
      let minDist = Infinity;
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const dist = Math.abs(rect.top - 120);
        if (dist < minDist) { minDist = dist; current = "#" + sec.id; }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/60 dark:bg-black/30 border-b border-black/10 dark:border-white/10" : ""}`}>
      <nav className="container-x flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="AccessSim" className="h-8 w-8" />
          <span className="font-bold">AccessSim</span>
        </a>
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-xl text-sm transition ${
                active === item.href
                  ? "bg-[var(--brand-50)] text-[var(--brand-800)] dark:bg-white/10 dark:text-white"
                  : "hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a href="#contato" className="ml-2 btn-primary">
            Fale com a gente
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur">
          <div className="container-x py-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-xl text-sm hover:bg-black/5 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#contato" className="mt-2 text-center btn-primary" onClick={() => setOpen(false)}>
              Fale com a gente
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
