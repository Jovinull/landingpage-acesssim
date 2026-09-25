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
  return (
    <section id="para-quem" className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Para quem é"
            title="Para quem é a AccessSim?"
            description="Para profissionais e empresas que desenvolvem, analisam ou revisam projetos arquitetônicos."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 2) * 0.06}
              className={`card p-6 transition-colors hover:border-white/15 hover:bg-white/[0.035] ${i === audiences.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <a.icon className="h-5 w-5 text-brand-300" />
              </div>
              <h3 className="mt-5 font-medium text-white">{a.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
