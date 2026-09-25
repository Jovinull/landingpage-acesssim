import { ArrowUpRight, Scale } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    value: "14,4 milhões",
    label: "de pessoas com deficiência no Brasil — 7,3% da população com 2 anos ou mais",
    source: "IBGE, Censo 2022",
    href: "https://educa.ibge.gov.br/jovens/materias-especiais/22695-censo-2022-7-3-da-populacao-com-2-anos-ou-mais-tinha-alguma-deficiencia.html",
  },
  {
    value: "32,1 milhões",
    label: "de pessoas com 60 anos ou mais — 15,8% da população, um aumento de 56% desde 2010",
    source: "IBGE, Censo 2022",
    href: "https://www.gov.br/participamaisbrasil/blob/baixar/36065",
  },
  {
    value: "1,3 bilhão",
    label: "de pessoas no mundo vivem com uma deficiência significativa — 16% da população global",
    source: "OMS, 2023",
    href: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health",
  },
];

export default function Impact() {
  return (
    <section aria-labelledby="impacto-titulo" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Por que isso importa"
          title={<span id="impacto-titulo">Acessibilidade é requisito — para as pessoas e para o projeto</span>}
          description="Projetar sem barreiras atende milhões de brasileiros e é exigência legal para aprovar e licenciar edificações de uso público ou coletivo."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.06} className="flex flex-col bg-ink-950 p-6 sm:p-8">
              <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{s.value}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{s.label}</p>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex w-fit items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-brand-300 hover:underline"
              >
                Fonte: {s.source}
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="card mt-4 flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
            <Scale className="h-5 w-5 text-brand-300" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-medium text-white">Lei Brasileira de Inclusão (Lei nº 13.146/2015)</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              A construção, a reforma, a ampliação ou a mudança de uso de edificações abertas ao público, de uso público
              ou privadas de uso coletivo devem ser executadas de modo a serem acessíveis (art. 56). Para aprovar o
              projeto e emitir alvará ou habite-se, deve ser atestado o atendimento às regras de acessibilidade (arts. 56
              e 60).
            </p>
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-brand-300 hover:underline"
            >
              Fonte: Planalto — Lei nº 13.146/2015
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
