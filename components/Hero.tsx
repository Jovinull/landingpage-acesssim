"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="container-x py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="badge">✅ Aprovada no Catalisa Sebrae</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">[TÍTULO FORTE DA SUA STARTUP]</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            [Slogan/Proposta de Valor do Produto/Serviço]. Explique, em 1–2 frases, o problema que você resolve e o impacto para seu público.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contato" className="btn-primary">Quero falar com o time</a>
            <a href="#solucao" className="px-6 py-3 rounded-2xl border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10">Ver como funciona</a>
          </div>
          <div className="text-xs text-gray-500">
            * Programa Catalisa Sebrae: inovação e aceleração de negócios — orgulhosamente aprovados.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl border border-black/10 dark:border-white/10 grid place-items-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[color-mix(in_srgb,var(--accent-400)_20%,transparent)] to-[color-mix(in_srgb,var(--brand-600)_20%,transparent)]">
            <span className="text-sm text-gray-600 dark:text-gray-300">[Mockup/Ilustração do produto]</span>
          </div>
          <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <div className="text-xs text-gray-500">Destaque</div>
            <div className="font-semibold">[Métrica/Benefício chave]</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
