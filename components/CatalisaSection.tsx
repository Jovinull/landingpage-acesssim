"use client";
import { motion } from "framer-motion";

export default function CatalisaSection() {
  return (
    <section id="catalisa" className="py-16 md:py-24">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Aprovados no <span className="text-brand-600">Catalisa Sebrae</span></h2>
          <p className="text-gray-700 dark:text-gray-300">
            [Conte a história: o que é o Catalisa, o que significa para a startup, próximos passos e metas.]
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
            <li>[Destaque 1 da aprovação]</li>
            <li>[Destaque 2: mentoring, networking, etc.]</li>
            <li>[Destaque 3: resultados esperados]</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="aspect-video rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 grid place-items-center shadow-soft">
            <span className="text-sm text-gray-500">[Imagem/Badge do programa]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
