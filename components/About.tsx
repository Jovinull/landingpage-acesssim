import { Gauge, LayoutList, Accessibility } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Impact from "@/components/Impact";

const problems = [
  "Demora na análise.",
  "Dificuldade para conferir todos os requisitos.",
  "Interpretação diferente entre profissionais.",
  "Identificação tardia de problemas.",
  "Retrabalho durante o desenvolvimento do projeto.",
  "Aumento dos custos de alterações posteriores.",
];

const pillars = [
  { icon: Gauge, title: "Mais ágil", desc: "Menos dependência de verificações exclusivamente manuais." },
  { icon: LayoutList, title: "Mais organizada", desc: "Pontos de atenção reunidos e fáceis de revisar." },
  { icon: Accessibility, title: "Mais acessível", desc: "Problemas identificados antes de chegarem à obra." },
];

export default function About() {
  return (
    <>
      {/* O que é */}
      <section id="sobre" className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <h2 className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />O que é a AccessSim?
            </h2>
            <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug tracking-tight text-zinc-500 text-pretty sm:text-3xl md:text-4xl md:leading-[1.25]">
              <span className="text-white">Uma plataforma de tecnologia voltada à análise de acessibilidade em projetos arquitetônicos.</span>{" "}
              A solução utiliza Inteligência Artificial para interpretar plantas e identificar elementos que podem
              apresentar problemas de acessibilidade,{" "}
              <span className="text-white">auxiliando arquitetos, engenheiros e outros profissionais</span> na tomada de
              decisões durante o desenvolvimento dos projetos.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="bg-ink-950 p-7">
                <p.icon className="h-5 w-5 text-brand-400" />
                <h3 className="mt-5 font-medium text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Impact />

      {/* Problema */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />O problema
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Qual problema resolvemos?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              A análise de um projeto conforme a NBR 9050 pode exigir a conferência de diversos elementos
              arquitetônicos, dimensões e condições de circulação. Quando essas verificações são realizadas somente de
              forma manual, podem ocorrer:
            </p>
            <p className="mt-6 text-sm text-zinc-300">A AccessSim busca apoiar esse processo por meio da tecnologia.</p>
          </Reveal>

          <ol className="border-t border-white/[0.08]">
            {problems.map((p, i) => (
              <Reveal
                as="li"
                key={p}
                delay={i * 0.05}
                y={10}
                className="group flex items-center gap-6 border-b border-white/[0.08] py-6"
              >
                <span className="font-mono text-sm text-zinc-600 transition-colors group-hover:text-accent-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-zinc-200 sm:text-xl">{p}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
