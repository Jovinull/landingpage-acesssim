"use client";
import { motion } from "framer-motion";

const milestones = [
  { title: "Ideação", desc: "[Validação do problema e entrevistas iniciais]", date: "Q1" },
  { title: "Protótipo", desc: "[MVP navegável e testes com beta-users]", date: "Q2" },
  { title: "Catalisa", desc: "[Aprovação e plano de aceleração]", date: "Q3" },
  { title: "Go-to-Market", desc: "[Pilotos pagos e primeiros contratos]", date: "Q4" },
];

export default function Timeline() {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre a empresa</h2>
        <p className="max-w-3xl text-gray-700 dark:text-gray-300 mb-10">
          [Missão, visão e proposta central. Público atendido e impacto esperado.]
        </p>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-[2px] bg-gradient-to-b from-[color-mix(in_srgb,var(--brand-400)_70%,transparent)] to-[color-mix(in_srgb,var(--brand-600)_70%,transparent)] -z-10" />
          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${i % 2 === 0 ? "" : "md:translate-y-12"}`}
              >
                <div className="text-xs text-gray-500">{m.date}</div>
                <h3 className="font-semibold text-lg">{m.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
