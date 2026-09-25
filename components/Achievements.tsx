import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "R$ 120 mil", label: "em bolsas de estímulo à inovação", source: "Catalisa ICT" },
  { value: "até R$ 130 mil", label: "em subvenção econômica e bolsas CNPq", source: "Centelha 3 SE" },
  { value: "316 de 858", label: "planos de inovação selecionados no Brasil", source: "Catalisa ICT" },
  { value: "47 de 422", label: "ideias inovadoras aprovadas em Sergipe", source: "Centelha 3 SE" },
];

type Stage = { label: string; detail: string; done: boolean };

type Program = {
  name: string;
  org: string;
  status: string;
  result: string;
  description: string[];
  benefits: string[];
  stages: Stage[];
  href: string;
  visual: React.ReactNode;
};

const programs: Program[] = [
  {
    name: "Catalisa ICT · Ciclo 02",
    org: "Sebrae · com MCTI, CNPq, INPI e Confap",
    status: "Aprovada na Etapa 2 — Validar",
    result: "Resultado final em 25/08/2025",
    description: [
      "A AccessSim integra o programa Catalisa ICT, iniciativa do Sebrae voltada à transformação de pesquisas e tecnologias em negócios inovadores.",
      "A participação no programa contribui para o processo de validação da solução, desenvolvimento do modelo de negócio, conexão com o mercado e preparação da AccessSim para sua expansão.",
    ],
    benefits: [
      "R$ 120 mil em bolsas de estímulo à inovação, ao longo de 9 meses",
      "Mentorias, serviços tecnológicos e conexões estratégicas",
      "Apoio para estruturar o Plano de Inovação e validar a solução no mercado",
    ],
    stages: [
      { label: "Mobilizar e Aprender", detail: "Capacitação", done: true },
      { label: "Validar", detail: "316 de 858 planos", done: true },
      { label: "Inovar", detail: "Próxima etapa", done: false },
    ],
    href: "https://sebrae.com.br/sites/PortalSebrae/catalisa/ictedital",
    visual: (
      <div className="relative aspect-[16/3] w-full">
        <Image src="/catalisa.jpeg" alt="Banner do programa Catalisa ICT — Ciclo 02" fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
      </div>
    ),
  },
  {
    name: "Centelha 3 · Sergipe",
    org: "FAPITEC/SE · Finep · MCTI · CNPq",
    status: "Aprovada entre os 47 projetos",
    result: "Resultado final em 12/05/2026",
    description: [
      "Programa Nacional de Apoio à Geração de Empreendimentos Inovadores, que apoia a transformação de ideias em negócios de base tecnológica.",
      "A AccessSim foi aprovada na classificação geral do Centelha 3 em Sergipe, na temática Tecnologia Social, entre 422 ideias inovadoras submetidas por empreendedores de 29 municípios.",
    ],
    benefits: [
      "Até R$ 80 mil em recursos de subvenção econômica",
      "Até R$ 50 mil em bolsas de apoio técnico do CNPq",
      "Capacitações e conexões estratégicas durante até 12 meses de execução",
    ],
    stages: [
      { label: "Ideia inovadora", detail: "200 de 422 ideias", done: true },
      { label: "Projeto de fomento", detail: "47 aprovados", done: true },
      { label: "Execução", detail: "Até 12 meses", done: false },
    ],
    href: "https://programacentelha.com.br/se/",
    visual: (
      <div className="bg-blueprint relative flex aspect-[16/3] w-full items-center justify-center bg-ink-950">
        <img src="/logos/centelha.png" alt="Programa Centelha" className="h-12 w-auto sm:h-14" />
      </div>
    ),
  },
];

export default function Achievements() {
  return (
    <section id="conquistas" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Conquistas"
          title="Selecionada por programas nacionais de inovação"
          description="A AccessSim foi aprovada em dois dos principais programas públicos de fomento à inovação do país, com recursos para validar a solução e levá-la ao mercado."
        />

        {/* números */}
        <Reveal className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950 p-5 sm:p-7">
              <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-zinc-400">{s.label}</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-wider text-brand-300">{s.source}</div>
            </div>
          ))}
        </Reveal>

        {/* programas */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="card flex flex-col overflow-hidden">
              <div className="border-b border-white/[0.06]">{p.visual}</div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <Check className="h-3.5 w-3.5" />
                  {p.status}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.org}</p>

                <div className="mt-5 space-y-3">
                  {p.description.map((d) => (
                    <p key={d} className="text-sm leading-relaxed text-zinc-400">
                      {d}
                    </p>
                  ))}
                </div>

                <h4 className="mt-7 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">O que o programa oferece</h4>
                <ul className="mt-3 space-y-2.5">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-zinc-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* etapas */}
                <ol className="mt-8 grid grid-cols-3 gap-2">
                  {p.stages.map((s) => (
                    <li key={s.label}>
                      <div className={`h-1 rounded-full ${s.done ? "bg-brand-400" : "bg-white/10"}`} />
                      <div className={`mt-3 text-[13px] font-medium ${s.done ? "text-white" : "text-zinc-500"}`}>{s.label}</div>
                      <div className="text-xs text-zinc-500">{s.detail}</div>
                    </li>
                  ))}
                </ol>

                <div className="min-h-8 flex-1" />
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-5 text-xs text-zinc-500">
                  <span>{p.result}</span>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-white"
                  >
                    Conheça o programa <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-zinc-600">
          Valores conforme os editais do Catalisa ICT — Ciclo 02 (Sebrae) e do Programa Centelha 3 — Sergipe (Edital
          FAPITEC/SE nº 21/2025).
        </p>
      </div>
    </section>
  );
}
