"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Barra fixa no celular: aparece depois do topo e some quando o formulário de contato está visível.
export default function StickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contato");
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { threshold: 0.1 });
    if (contact) observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const show = pastHero && !contactVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-ink-950/85 px-4 pt-3 backdrop-blur-xl md:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <a href="#contato" className="btn-primary w-full">
            Solicitar demonstração
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
