import { Brain, Ruler, DraftingCompass, RefreshCcw, UserCheck, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function BentoCard({
  icon: Icon,
  title,
  desc,
  children,
  className = "",
  delay = 0,
}: {
  icon: typeof Brain;
  title: string;
  desc: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={`card group relative flex flex-col overflow-hidden p-6 sm:p-7 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      {children && <div className="relative mb-8 flex-1">{children}</div>}
      <Icon className="h-5 w-5 text-brand-400" />
      <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{desc}</p>
    </Reveal>
  );
}

function DetectionVisual() {
  const boxes = [
    { l: "8%", t: "18%", w: "26%", h: "46%", warn: false, label: "Área de giro" },
    { l: "44%", t: "10%", w: "20%", h: "34%", warn: true, label: "Porta" },
    { l: "70%", t: "40%", w: "22%", h: "44%", warn: true, label: "Bacia" },
  ];
  return (
    <div className="bg-blueprint relative h-44 overflow-hidden rounded-xl border border-white/[0.06] bg-ink-900 sm:h-52">
      {boxes.map((b) => (
        <div
          key={b.label}
          className={`absolute rounded-md border ${b.warn ? "border-accent-400 bg-accent-400/[0.06]" : "border-emerald-400 bg-emerald-400/[0.06]"}`}
          style={{ left: b.l, top: b.t, width: b.w, height: b.h }}
        >
          <span
            className={`absolute -top-2.5 left-2 rounded px-1.5 py-px font-mono text-[10px] text-[#05070a] ${b.warn ? "bg-accent-400" : "bg-emerald-400"}`}
          >
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function NormVisual() {
  return (
    <div className="flex h-full min-h-32 items-center justify-center">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-brand-400/60">
        <div className="absolute inset-x-0 top-1/2 h-px bg-brand-400/60" />
        <span className="relative rounded bg-ink-950 px-1.5 font-mono text-xs text-brand-200">Ø 1,50 m</span>
      </div>
    </div>
  );
}

function FlowVisual() {
  return (
    <div className="flex h-full min-h-32 items-center justify-center gap-2 font-mono text-[11px] text-zinc-300">
      {["Planta", "Análise", "Revisão"].map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">{s}</span>
          {i < 2 && <ArrowRight className="h-3 w-3 text-zinc-600" />}
        </span>
      ))}
    </div>
  );
}

function TimelineVisual() {
  return (
    <div className="flex h-full min-h-32 flex-col justify-center gap-3 px-2">
      <div className="relative h-px bg-white/10">
        <span className="absolute -top-1.5 left-[12%] h-3 w-3 rounded-full bg-brand-400 shadow-[0_0_16px_rgba(8,176,255,0.7)]" />
        <span className="absolute -top-1.5 right-[8%] h-3 w-3 rounded-full border border-white/20 bg-ink-950" />
      </div>
      <div className="flex justify-between font-mono text-[11px]">
        <span className="text-brand-300">Projeto</span>
        <span className="text-zinc-600">Obra</span>
      </div>
    </div>
  );
}

function ProVisual() {
  return (
    <div className="flex h-full min-h-32 items-center justify-center">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
        <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Responsabilidade técnica</div>
        <div className="mt-1 text-sm text-white">Profissional habilitado</div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="solucao" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="O diferencial da AccessSim"
          title="Tecnologia aplicada à acessibilidade"
          description="A AccessSim combina Inteligência Artificial, conhecimento arquitetônico e critérios de acessibilidade para auxiliar profissionais na análise de plantas."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <BentoCard
            className="md:col-span-4"
            icon={Brain}
            title="Inteligência Artificial"
            desc="A tecnologia auxilia na interpretação das plantas e na identificação de possíveis problemas."
          >
            <DetectionVisual />
          </BentoCard>
          <BentoCard
            className="md:col-span-2"
            delay={0.05}
            icon={Ruler}
            title="Baseada na NBR 9050"
            desc="As análises são estruturadas a partir de critérios técnicos de acessibilidade."
          >
            <NormVisual />
          </BentoCard>
          <BentoCard
            className="md:col-span-2"
            icon={DraftingCompass}
            title="Foco em projetos arquitetônicos"
            desc="Pensada para integrar-se ao fluxo de trabalho de profissionais que desenvolvem e analisam projetos."
          >
            <FlowVisual />
          </BentoCard>
          <BentoCard
            className="md:col-span-2"
            delay={0.05}
            icon={RefreshCcw}
            title="Redução de retrabalho"
            desc="A identificação antecipada de possíveis problemas pode facilitar as correções ainda durante o desenvolvimento do projeto."
          >
            <TimelineVisual />
          </BentoCard>
          <BentoCard
            className="md:col-span-2"
            delay={0.1}
            icon={UserCheck}
            title="Apoio ao profissional"
            desc="A AccessSim não substitui a responsabilidade técnica do profissional. Ela funciona como uma ferramenta de apoio à análise."
          >
            <ProVisual />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
