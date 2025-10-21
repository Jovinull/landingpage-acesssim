"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-brand-400/10 to-brand-600/10 shadow-soft"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Pronto para conversar?</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mt-2">
            [Chamada para ação—agende uma demo, mande um email, preencha o formulário.]
          </p>
          <form className="mt-6 grid md:grid-cols-3 gap-3">
            <input className="px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40" placeholder="Seu nome"/>
            <input className="px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40" placeholder="Seu e-mail"/>
            <button className="px-6 py-3 rounded-xl bg-brand-600 text-white hover:shadow-glow">Enviar</button>
            <textarea className="md:col-span-3 px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40" placeholder="Mensagem"></textarea>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
