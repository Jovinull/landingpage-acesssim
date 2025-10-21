"use client";
import { motion } from "framer-motion";
const team = [
  { name: "[Nome 1]", role: "[Cargo]", bio: "[Mini-bio/experiência]", img: "/avatar1.png" },
  { name: "[Nome 2]", role: "[Cargo]", bio: "[Mini-bio/experiência]", img: "/avatar2.png" },
  { name: "[Nome 3]", role: "[Cargo]", bio: "[Mini-bio/experiência]", img: "/avatar3.png" },
];

export default function Team() {
  return (
    <section id="equipe" className="py-16 md:py-24">
      <div className="container-x">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Equipe</h2>
          <p className="text-gray-600 dark:text-gray-300">[Fale da equipe, advisors e mentores.]</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-black/40 backdrop-blur shadow-soft"
            >
              <div className="aspect-square rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 mb-4 overflow-hidden grid place-items-center">
                <span className="text-xs text-gray-500">[Foto]</span>
              </div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500">{p.role}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
