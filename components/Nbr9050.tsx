import { DoorOpen, MoveHorizontal, RotateCcw, GripHorizontal, Ruler, Accessibility, Route } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const elements = [
  { label: "Larguras de portas", icon: DoorOpen },
  { label: "Áreas de circulação", icon: MoveHorizontal },
  { label: "Áreas de giro", icon: RotateCcw },
  { label: "Barras de apoio", icon: GripHorizontal },
  { label: "Dimensões de ambientes", icon: Ruler },
  { label: "Condições de acessibilidade", icon: Accessibility },
  { label: "Elementos relacionados à circulação acessível", icon: Route },
];

export default function Nbr9050() {
  return (
    <section id="nbr9050" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900">
          <div className="bg-blueprint mask-radial pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                NBR 9050
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                Acessibilidade baseada em critérios técnicos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
                A AccessSim utiliza como referência os critérios de acessibilidade estabelecidos pela{" "}
                <span className="text-zinc-200">ABNT NBR 9050</span>, auxiliando na análise de elementos presentes nos
                projetos arquitetônicos.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                A plataforma busca transformar requisitos técnicos em informações mais fáceis de visualizar e utilizar
                durante a revisão do projeto.
              </p>
              <div className="mt-8 inline-flex items-baseline gap-3 rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 font-mono">
                <span className="text-xs text-zinc-500">ABNT</span>
                <span className="text-2xl font-semibold tracking-tight text-white">NBR 9050</span>
              </div>
              <a
                href="/guia-nbr-9050"
                className="mt-4 flex w-fit items-center gap-1 text-sm text-brand-300 underline-offset-4 hover:underline"
              >
                Veja o guia prático com as principais medidas da norma
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>

            <div>
              <p className="text-sm font-medium text-zinc-300">Exemplos de elementos analisados</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {elements.map((e, i) => (
                  <Reveal
                    as="li"
                    key={e.label}
                    delay={i * 0.04}
                    y={8}
                    className={`flex items-center gap-3 rounded-xl border border-white/[0.07] bg-ink-950/60 px-4 py-3.5 text-sm text-zinc-200 ${
                      i === elements.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <e.icon className="h-4 w-4 shrink-0 text-brand-300" />
                    {e.label}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
