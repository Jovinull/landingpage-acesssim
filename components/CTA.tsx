"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const CONTACT_EMAIL = "faculdadebc1@gmail.com";
  const WHATS_NUMBER_E164 = "+5579988737718";

  function buildSubject() {
    return `Contato via site — ${name || "Sem nome"}`;
  }

  function buildBody() {
    const parts = [
      `Nome: ${name || "-"}`,
      `E-mail: ${mail || "-"}`,
      "",
      "Mensagem:",
      msg || "-",
    ];
    return parts.join("\n");
  }

  function onSendEmail(e: React.FormEvent) {
    e.preventDefault();
    // validação simples
    if (!mail || !mail.includes("@")) {
      alert("Informe um e-mail válido.");
      return;
    }
    const subject = encodeURIComponent(buildSubject());
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  function onSendWhats(e: React.FormEvent) {
    e.preventDefault();
    if (!WHATS_NUMBER_E164) {
      alert("Número do WhatsApp não configurado.");
      return;
    }
    const text = [
      "Olá! Tenho interesse em uma demo/contato.",
      "",
      buildBody(),
    ].join("\n");
    const url = `https://wa.me/${WHATS_NUMBER_E164.replace("+", "")}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  }

  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-[color-mix(in_srgb,var(--accent-400)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-600)_10%,transparent)] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Pronto para conversar?</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mt-2">
            Agende uma demo, mande um e-mail ou fale conosco no WhatsApp. Responderemos o quanto antes.
          </p>

          <form className="mt-6 grid md:grid-cols-3 gap-3">
            <input
              className="px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40"
              placeholder="Seu e-mail"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                onClick={onSendEmail}
                className="btn-primary flex-1"
                type="button"
                title="Enviar por e-mail"
              >
                Enviar por E-mail
              </button>

              <button
                onClick={onSendWhats}
                className="btn-primary flex-1 inline-flex items-center justify-center gap-2"
                type="button"
                title="Enviar por WhatsApp"
              >
                {/* Ícone WhatsApp */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.75c-.27-.15-1.58-.86-1.83-.96-.25-.09-.43-.15-.61.15s-.7.96-.86 1.16c-.16.2-.32.23-.6.08-.27-.15-1.15-.42-2.2-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.57.12-.12.27-.31.4-.46.13-.15.17-.27.25-.45.08-.18.05-.34-.02-.48-.07-.15-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.93 2.95 4.66 4.03.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.58-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.06-.11-.24-.18-.51-.33zM16.02 4C9.93 4 5 8.9 5 15c0 2.4.78 4.63 2.1 6.45L6 28l6.72-1.77c1.71.94 3.68 1.48 5.77 1.48 6.09 0 11.02-4.9 11.02-11S22.11 4 16.02 4zm0 20.1c-1.89 0-3.64-.55-5.11-1.49l-.37-.23-3.98 1.05 1.06-3.88-.25-.4A9.24 9.24 0 0 1 6.76 15c0-5.13 4.16-9.29 9.26-9.29 5.1 0 9.26 4.16 9.26 9.29 0 5.13-4.16 9.29-9.26 9.29z"/>
                </svg>
                WhatsApp
              </button>
            </div>

            <textarea
              className="md:col-span-3 px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/40 min-h-[120px]"
              placeholder="Mensagem"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </form>

          {/* Contatos diretos (fallback/atalhos) */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
            <span className="opacity-50">•</span>
            <a
              href={`https://wa.me/${WHATS_NUMBER_E164.replace("+", "")}`}
              target="_blank"
              className="underline underline-offset-4"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
