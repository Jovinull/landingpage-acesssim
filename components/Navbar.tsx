"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const desktopItems = navItems.filter((i) => i.href !== "#inicio" && i.href !== "#contato");

// base = "" na página inicial (âncoras locais) e "/" nas páginas internas
export default function Navbar({ base = "" }: { base?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (base) return;
      // seção ativa = última cujo topo já passou da navbar
      let current = "#inicio";
      for (const item of navItems) {
        const el = document.querySelector<HTMLElement>(item.href);
        if (el && el.getBoundingClientRect().top <= 120) current = item.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [base]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href={base ? "/" : "#inicio"} aria-label="AccessSim — página inicial">
          <Logo />
        </a>

        <div className="hidden items-center gap-0.5 xl:flex">
          {desktopItems.map((item) => (
            <a
              key={item.href}
              href={base + item.href}
              aria-current={!base && active === item.href ? "true" : undefined}
              className={`rounded-full px-3 py-1.5 text-[13px] whitespace-nowrap transition-colors ${
                !base && active === item.href ? "bg-white/[0.06] text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />
          <a href={`${base}#contato`} className="btn-primary !h-9 !px-4 !text-[13px]">
            Solicitar demonstração
          </a>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <ThemeToggle />
          <button
            className="-mr-2 rounded-lg p-2 text-zinc-300 hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 pb-5 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={base + item.href}
                  className="border-b border-white/[0.06] py-3 text-sm text-zinc-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href={`${base}#contato`} className="btn-primary mt-4" onClick={() => setOpen(false)}>
                Solicitar demonstração
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
