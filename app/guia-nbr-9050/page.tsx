import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Guia prático da NBR 9050 — principais medidas | AccessSim",
  description:
    "Resumo das principais medidas de acessibilidade da ABNT NBR 9050:2020: módulo de referência, áreas de manobra, portas, corredores, rampas, sanitários e calçadas.",
  alternates: { canonical: "/guia-nbr-9050" },
};

type Row = { item: string; requirement: string; ref: string };
type Topic = { title: string; intro?: string; rows: Row[] };

// Valores conferidos no texto da ABNT NBR 9050:2020 (versão corrigida de 25/01/2021).
const topics: Topic[] = [
  {
    title: "Módulo de referência e áreas de manobra",
    intro: "Base para dimensionar espaços para pessoas em cadeira de rodas.",
    rows: [
      { item: "Módulo de referência (M.R.)", requirement: "Projeção de 0,80 m × 1,20 m no piso", ref: "4.2.2" },
      { item: "Rotação de 90°", requirement: "1,20 m × 1,20 m", ref: "4.3.4" },
      { item: "Rotação de 180°", requirement: "1,50 m × 1,20 m", ref: "4.3.4" },
      { item: "Rotação de 360°", requirement: "Círculo com diâmetro de 1,50 m", ref: "4.3.4" },
    ],
  },
  {
    title: "Corredores",
    rows: [
      { item: "Uso comum, extensão até 4,00 m", requirement: "Largura mínima de 0,90 m", ref: "6.11.1" },
      { item: "Uso comum, extensão até 10,00 m", requirement: "Largura mínima de 1,20 m", ref: "6.11.1" },
      { item: "Uso comum, extensão acima de 10,00 m", requirement: "Largura mínima de 1,50 m", ref: "6.11.1" },
      { item: "Uso público", requirement: "Largura mínima de 1,50 m", ref: "6.11.1" },
    ],
  },
  {
    title: "Portas",
    rows: [
      {
        item: "Vão livre",
        requirement: "Maior ou igual a 0,80 m quando aberta, inclusive em portas de correr e sanfonadas",
        ref: "6.11.2.4",
      },
      { item: "Maçanetas", requirement: "Tipo alavanca, instaladas entre 0,80 m e 1,10 m de altura", ref: "6.11.2.6" },
    ],
  },
  {
    title: "Rampas",
    rows: [
      {
        item: "Inclinação longitudinal",
        requirement: "Conforme os limites da Tabela 4 da norma, que variam com o desnível a vencer",
        ref: "6.6.2.1",
      },
      { item: "Rampas em curva", requirement: "Inclinação máxima admissível de 8,33% (1:12)", ref: "6.6.2.3" },
      {
        item: "Inclinação transversal",
        requirement: "Até 2% em rampas internas e até 3% em rampas externas",
        ref: "6.6.2.4",
      },
      {
        item: "Largura livre",
        requirement: "Recomendável 1,50 m; mínimo admissível de 1,20 m em rotas acessíveis",
        ref: "6.6.2.5",
      },
    ],
  },
  {
    title: "Sanitários acessíveis",
    rows: [
      {
        item: "Altura da bacia",
        requirement: "Entre 0,43 m e 0,45 m sem o assento; com o assento, no máximo 0,46 m (adulto)",
        ref: "7.7.2.1",
      },
      {
        item: "Barra junto à bacia (parede lateral)",
        requirement: "Barra reta horizontal com comprimento mínimo de 0,80 m, a 0,75 m de altura do piso acabado",
        ref: "7.7.2.2.1",
      },
    ],
  },
  {
    title: "Calçadas",
    rows: [
      {
        item: "Faixa livre (passeio)",
        requirement: "Mínimo de 1,20 m de largura e 2,10 m de altura livre, com inclinação transversal de até 3%",
        ref: "6.12.3",
      },
      { item: "Faixa de serviço", requirement: "Recomenda-se largura mínima de 0,70 m em calçadas novas", ref: "6.12.3" },
    ],
  },
];

const slug = (t: string) =>
  t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const checklist = [
  "Há área de rotação de 1,50 m de diâmetro nos ambientes que exigem manobra completa?",
  "Todas as portas da rota acessível têm vão livre de pelo menos 0,80 m?",
  "Os corredores respeitam a largura mínima para a sua extensão e tipo de uso?",
  "As rampas atendem à inclinação máxima para o desnível e têm largura livre adequada?",
  "O sanitário acessível tem bacia na altura correta e barras de apoio instaladas?",
  "A calçada mantém a faixa livre de 1,20 m sem obstáculos?",
];

export default function GuiaNbr9050() {
  return (
    <PageShell
      eyebrow="Guia prático"
      title="As principais medidas da NBR 9050 em um só lugar"
      description="Um resumo de consulta rápida com requisitos de acessibilidade da ABNT NBR 9050:2020 que mais aparecem na revisão de plantas arquitetônicas."
      updated="25 de setembro de 2026"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          Referência: ABNT NBR 9050:2020 — Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos
          (quarta edição, versão corrigida de 25/01/2021). Os números entre parênteses indicam o item da norma.
        </p>
        <PrintButton />
      </div>

      <div className="mt-12 space-y-12">
        {topics.map((t) => (
          <section key={t.title} aria-labelledby={`t-${slug(t.title)}`}>
            <h2 id={`t-${slug(t.title)}`} className="text-xl font-semibold tracking-tight text-white">
              {t.title}
            </h2>
            {t.intro && <p className="mt-1.5 text-sm text-zinc-400">{t.intro}</p>}
            <div className="card mt-5 overflow-x-auto" tabIndex={0} role="region" aria-label={`Tabela: ${t.title}`}>
              <table className="w-full min-w-[34rem] text-left text-sm">
                <caption className="sr-only">{t.title}: requisitos da NBR 9050</caption>
                <thead>
                  <tr className="border-b border-white/[0.08] text-xs uppercase tracking-wider text-zinc-500">
                    <th scope="col" className="px-5 py-3 font-medium">
                      Elemento
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Requisito
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Item
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.rows.map((r) => (
                    <tr key={r.item} className="border-b border-white/[0.06] last:border-0">
                      <th scope="row" className="px-5 py-3.5 font-medium text-zinc-200">
                        {r.item}
                      </th>
                      <td className="px-5 py-3.5 text-zinc-300">{r.requirement}</td>
                      <td className="px-5 py-3.5 font-mono text-xs text-zinc-500">{r.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section aria-labelledby="checklist-titulo">
          <h2 id="checklist-titulo" className="text-xl font-semibold tracking-tight text-white">
            Checklist rápido para revisão de planta
          </h2>
          <ul className="card mt-5 divide-y divide-white/[0.06]">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-3 px-5 py-3.5 text-sm text-zinc-300">
                <span aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 rounded border border-white/25" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <aside className="card p-6 text-sm leading-relaxed text-zinc-400 sm:p-8">
          <h2 className="font-medium text-white">Aviso importante</h2>
          <p className="mt-2">
            Este guia é um resumo informativo e não substitui a norma completa nem a análise de um profissional
            habilitado. A ABNT NBR 9050 contém condições, exceções e requisitos adicionais que devem ser consultados
            diretamente no documento oficial, disponível na ABNT. Legislações estaduais e municipais podem trazer
            exigências complementares.
          </p>
        </aside>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 sm:p-12">
          <div className="bg-blueprint mask-radial pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Quer apoio para encontrar esses pontos na sua planta?
            </h2>
            <p className="mt-3 max-w-xl text-zinc-400">
              A AccessSim utiliza Inteligência Artificial para auxiliar na identificação de possíveis não conformidades
              com base nos critérios da NBR 9050.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="/#sobre" className="btn-primary">
                Conheça a AccessSim
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="/#contato" className="btn-secondary">
                Fale com nosso time
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
