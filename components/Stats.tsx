"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "[Clientes/Usuários]", value: "—" },
  { label: "[Economia média]", value: "—" },
  { label: "[Satisfação NPS]", value: "—" },
  { label: "[Tempo de implantação]", value: "—" },
];

export default function Stats() {
  return (
    <section className="py-10">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur text-center"
          >
            <div className="text-2xl md:text-3xl font-extrabold">{s.value}</div>
            <div className="text-xs text-gray-600 dark:text-gray-300">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
