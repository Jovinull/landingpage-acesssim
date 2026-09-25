"use client";
import { KeyboardEvent, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { DraftingCompass, HardHat, Building2, Construction, Accessibility } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Arquitetos e arquitetas",
    desc: "Tenha apoio tecnológico para verificar requisitos de acessibilidade durante o desenvolvimento dos seus projetos.",
    icon: DraftingCompass,
  },
  {
    title: "Engenheiros",
    desc: "Utilize a plataforma como apoio à análise de projetos e à identificação de pontos que precisam ser revisados.",
    icon: HardHat,
  },
  {
    title: "Escritórios de arquitetura",
    desc: "Padronize parte do processo de verificação e facilite a revisão dos projetos desenvolvidos pela equipe.",
    icon: Building2,
  },
  {
    title: "Construtoras",
    desc: "Antecipe possíveis problemas de acessibilidade ainda na etapa de projeto, reduzindo alterações posteriores.",
    icon: Construction,
  },
  {
    title: "Profissionais e empresas que trabalham com acessibilidade",
    desc: "Tenha uma ferramenta de apoio para tornar as análises mais organizadas e eficientes.",
    icon: Accessibility,
  },
];

export default function Audience() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = audiences[active];

  // navegação por setas entre as abas (padrão WAI-ARIA)
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = audiences.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? (active === last ? 0 : active + 1)
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? (active === 0 ? last : active - 1)
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="para-quem" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Para quem é"
          title="Para quem é a AccessSim?"
          description="Para profissionais e empresas que desenvolvem, analisam ou revisam projetos arquitetônicos."
        />

        <Reveal className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div role="tablist" aria-label="Perfis de uso" aria-orientation="vertical" className="flex flex-col gap-2">
            {audiences.map((a, i) => {
              const selected = i === active;
              return (
                <button
                  key={a.title}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`perfil-aba-${i}`}
                  aria-selected={selected}
                  aria-controls="perfil-painel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                  className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                    selected
                      ? "border-brand-400/40 bg-brand-500/[0.06] text-white"
                      : "border-white/[0.06] bg-white/[0.02] text-zinc-400 hover:border-white/15 hover:text-white"
                  }`}
                >
                  <a.icon className={`h-5 w-5 shrink-0 ${selected ? "text-brand-300" : "text-zinc-500"}`} aria-hidden="true" />
                  <span className="text-sm font-medium">{a.title}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="perfil-painel"
            aria-labelledby={`perfil-aba-${active}`}
            className="card relative flex min-h-72 flex-col overflow-hidden p-7 sm:p-10"
          >
            <div className="bg-blueprint mask-radial pointer-events-none absolute inset-0 opacity-70" />
            <div className="relative flex flex-1 flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-900">
                <current.icon className="h-7 w-7 text-brand-300" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{current.title}</h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-400">{current.desc}</p>
              <div className="mt-auto pt-8">
                <a href="#contato" className="btn-secondary">
                  Fale com nosso time
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
