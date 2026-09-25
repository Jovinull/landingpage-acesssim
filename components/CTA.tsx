"use client";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CONTACT_EMAIL = "faculdadebc1@gmail.com";
const WHATS_NUMBER_E164 = "+5579988737718";

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.75c-.27-.15-1.58-.86-1.83-.96-.25-.09-.43-.15-.61.15s-.7.96-.86 1.16c-.16.2-.32.23-.6.08-.27-.15-1.15-.42-2.2-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.57.12-.12.27-.31.4-.46.13-.15.17-.27.25-.45.08-.18.05-.34-.02-.48-.07-.15-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.93 2.95 4.66 4.03.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.58-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.06-.11-.24-.18-.51-.33zM16.02 4C9.93 4 5 8.9 5 15c0 2.4.78 4.63 2.1 6.45L6 28l6.72-1.77c1.71.94 3.68 1.48 5.77 1.48 6.09 0 11.02-4.9 11.02-11S22.11 4 16.02 4zm0 20.1c-1.89 0-3.64-.55-5.11-1.49l-.37-.23-3.98 1.05 1.06-3.88-.25-.4A9.24 9.24 0 0 1 6.76 15c0-5.13 4.16-9.29 9.26-9.29 5.1 0 9.26 4.16 9.26 9.29 0 5.13-4.16 9.29-9.26 9.29z" />
    </svg>
  );
}

export default function CTA() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  function buildBody() {
    return [`Nome: ${name || "-"}`, `E-mail: ${mail || "-"}`, "", "Mensagem:", msg || "-"].join("\n");
  }

  function onSendEmail() {
    if (!mail || !mail.includes("@")) {
      alert("Informe um e-mail válido.");
      return;
    }
    const subject = encodeURIComponent(`Contato via site — ${name || "Sem nome"}`);
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  function onSendWhats() {
    const text = ["Olá! Tenho interesse em conhecer a AccessSim / solicitar uma demonstração.", "", buildBody()].join("\n");
    window.open(`https://wa.me/${WHATS_NUMBER_E164.replace("+", "")}?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
          <div className="bg-blueprint mask-radial pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[360px] w-[360px] rounded-full bg-accent-500/10 blur-[100px]" />

          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            <div className="flex flex-col">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Contato
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-5xl md:leading-[1.08]">
                Torne a acessibilidade parte do seu projeto desde o início.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
                Utilize a tecnologia para identificar possíveis problemas, revisar seus projetos e tomar decisões com mais
                informação.
              </p>
              <div className="mt-8">
                <a href="#sobre" className="btn-secondary">
                  Conheça a AccessSim
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-auto space-y-3 pt-10 text-sm">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`https://wa.me/${WHATS_NUMBER_E164.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <WhatsIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-ink-950/70 p-6 backdrop-blur sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                onSendEmail();
              }}
            >
              <h3 className="text-lg font-medium text-white">Fale com nosso time</h3>
              <p className="mt-1 text-sm text-zinc-500">Solicite uma demonstração ou tire suas dúvidas.</p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs text-zinc-400">Nome</span>
                  <input className="input" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-zinc-400">E-mail</span>
                  <input
                    className="input"
                    placeholder="voce@empresa.com"
                    type="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-zinc-400">Mensagem</span>
                  <textarea
                    className="input min-h-[120px] resize-y py-3"
                    placeholder="Conte um pouco sobre seus projetos"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </label>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-zinc-500">
                Seus dados são usados apenas para responder ao seu contato. Veja nossa{" "}
                <a href="/privacidade" className="text-zinc-300 underline underline-offset-2 hover:text-white">
                  Política de Privacidade
                </a>
                .
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button type="submit" className="btn-primary">
                  <Mail className="h-4 w-4" />
                  Enviar por e-mail
                </button>
                <button type="button" onClick={onSendWhats} className="btn-secondary">
                  <WhatsIcon className="h-4 w-4" />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
