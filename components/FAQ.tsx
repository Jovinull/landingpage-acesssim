"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site";


export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
          <p className="mt-5 text-sm text-zinc-400">
            Não encontrou o que procurava?{" "}
            <a href="#contato" className="inline-flex items-center gap-1 text-white underline-offset-4 hover:underline">
              Fale com nosso time <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>

        <div className="border-t border-white/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium text-zinc-100 transition-colors hover:text-white sm:text-lg"
                >
                  {f.q}
                  <Plus
                    className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-45 text-white" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
