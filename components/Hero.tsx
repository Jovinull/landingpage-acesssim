"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileImage, Ruler, FlaskConical } from "lucide-react";
import PlanMockup from "@/components/PlanMockup";

const highlights = [
  { icon: FileImage, label: "Plantas em PNG e JPEG" },
  { icon: Ruler, label: "Critérios da ABNT NBR 9050" },
  { icon: FlaskConical, label: "Protótipo funcional em validação" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
        };

  return (
    <section id="inicio" className="relative isolate pt-16 sm:pt-24">
      {/* fundo: grade de planta + brilho */}
      <div className="bg-blueprint mask-radial pointer-events-none absolute inset-x-0 -top-16 -z-10 h-[820px]" />
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]" />

      <div className="container-x text-center">
        <motion.a
          {...fade(0)}
          href="#conquistas"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-zinc-300 transition hover:border-white/20"
        >
          <span className="rounded-full bg-accent-500/15 px-2 py-0.5 font-medium text-accent-300">Catalisa ICT + Centelha</span>
          Aprovada em programas nacionais de inovação
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          {...fade(0.08)}
          className="mx-auto mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-6xl md:text-7xl md:leading-[1.02]"
        >
          Analise a acessibilidade do seu projeto com <span className="text-gradient">Inteligência Artificial</span>
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 text-pretty sm:text-lg"
        >
          A AccessSim utiliza Inteligência Artificial para analisar plantas arquitetônicas e auxiliar na identificação
          de possíveis não conformidades relacionadas à acessibilidade, com base nos critérios da NBR 9050.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#sobre" className="btn-primary">
            Conheça a AccessSim
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contato" className="btn-secondary">
            Fale com nosso time
          </a>
        </motion.div>

        <motion.ul
          {...fade(0.32)}
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-zinc-500"
        >
          {highlights.map((h) => (
            <li key={h.label} className="inline-flex items-center gap-2">
              <h.icon className="h-4 w-4 text-zinc-400" />
              {h.label}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="container-x mt-16 sm:mt-20"
      >
        <PlanMockup />
      </motion.div>
    </section>
  );
}
