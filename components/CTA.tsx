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
          className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-400)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-600)_10%,transparent)] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Pronto para conversar?</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mt-2">
            [Chamada para ação—agende uma demo, mande um email, preencha o formulário.]
          </p>
          <form className="mt-6 grid md:grid-cols-3 gap-3">
            <input className="px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40" placeholder="Seu nome"/>
            <input className="px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40" placeholder="Seu e-mail"/>
            <button className="px-6 py-3 rounded-xl bg-[var(--brand-600)] text-white shadow-[0_10px_40px_rgba(32,153,255,0.35)] hover:shadow-[0_12px_44px_rgba(32,153,255,0.45)]">Enviar</button>
            <textarea className="md:col-span-3 px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40" placeholder="Mensagem"></textarea>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
