import { Upload, ScanSearch, AlertTriangle, ClipboardCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Envie sua planta",
    desc: "O profissional envia a planta arquitetônica para a plataforma. Formatos previstos: PNG e JPEG.",
    icon: Upload,
  },
  {
    title: "A IA analisa o projeto",
    desc: "A Inteligência Artificial interpreta os elementos presentes na planta e realiza verificações relacionadas aos critérios de acessibilidade.",
    icon: ScanSearch,
  },
  {
    title: "Identificação de possíveis não conformidades",
    desc: "A plataforma apresenta os pontos que precisam de atenção, facilitando a identificação de possíveis problemas no projeto.",
    icon: AlertTriangle,
  },
  {
    title: "Apoio à tomada de decisão",
    desc: "O profissional utiliza as informações apresentadas pela plataforma para revisar o projeto e realizar os ajustes necessários.",
    icon: ClipboardCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Como funciona"
          title="Da planta aos pontos de atenção em quatro etapas"
          description="Um fluxo simples, pensado para caber na rotina de quem desenvolve e revisa projetos."
        />

        <div className="relative mt-16">
          {/* linha conectora */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0 lg:block" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.1} className="relative">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink-900 shadow-[0_0_0_6px_var(--color-ink-950)]">
                    <s.icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <span className="mt-6 block font-mono text-xs text-zinc-500">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-medium leading-snug text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
