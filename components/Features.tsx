"use client";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Sparkles } from "lucide-react";

const features = [
  { title: "[Benefício 1]", desc: "[Explique o benefício de forma objetiva.]", icon: CheckCircle },
  { title: "[Benefício 2]", desc: "[Explique outro benefício com clareza.]", icon: Shield },
  { title: "[Benefício 3]", desc: "[Mais um diferencial da solução.]", icon: Sparkles },
];

export default function Features() {
  return (
    <section id="solucao" className="py-16 md:py-24">
      <div className="container-x">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Como nossa solução ajuda</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            [Texto sobre o problema e como a solução resolve, com prova ou evidência resumida.]
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur shadow-soft"
            >
              <f.icon className="mb-3" />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
