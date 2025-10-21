"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    title: "Ideação",
    desc:
      "Mapeamos as dores de arquitetos, engenheiros e fiscais na checagem da NBR9050: processo lento, sujeito a erro e caro. Realizamos +40 entrevistas, definimos ICP (construtoras, escritórios e órgãos públicos) e a hipótese de valor: usar RA + IA para medir e validar itens de acessibilidade in loco, gerando laudos consistentes.",
    date: "Q1",
  },
  {
    title: "Protótipo",
    desc:
      "MVP navegável (app móvel + painel web): captura com RA, verificação automática de itens críticos (rampas, portas, rota acessível), checklist inteligente e geração de pré-laudo. Testes com 12 beta users em 4 obras ⇒ NPS inicial 74 e insights para priorizar o fluxo de vistoria.",
    date: "Q2",
  },
  {
    title: "Catalisa",
    desc:
      "Aprovados no Catalisa ICT (Sebrae). Plano de aceleração: validação nacional, parcerias com ecossistema BIM, pilotos com prefeituras e construtoras, avanço de TRL, adequação LGPD/compliance e desenho do modelo comercial.",
    date: "Q3",
  },
  {
    title: "Go-to-Market",
    desc:
      "Pilotos pagos com 3–5 clientes, integrações BIM/IFC e primeiros contratos SaaS por obra/unidade. Entrega de cases com ROI (-30% retrabalho, -20% tempo de vistoria) e roadmap para marketplace de laudos e integrações com sistemas públicos.",
    date: "Q4",
  },
];

export default function Timeline() {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container-x">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a empresa</h2>

        {/* Intro curto */}
        <p className="max-w-3xl text-base md:text-lg leading-relaxed text-gray-300 mb-8">
          Somos a <span className="font-semibold">AccessSim</span>: usamos <em>Realidade Aumentada</em> + <em>IA</em> para
          medir e verificar itens da <strong>NBR9050</strong> em campo, gerando laudos padronizados e integrando com fluxos BIM.
        </p>

        {/* Cards em grade — Missão/Visão/Proposta/Público/Impacto */}
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mb-12">
          {/* Missão */}
          <div className="rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 p-4">
            <dt className="text-sm uppercase tracking-wide text-gray-400">Missão</dt>
            <dd className="mt-1 text-[0.975rem] text-gray-200">
              Democratizar a avaliação de acessibilidade conforme a NBR9050 — rápida, confiável e acessível.
            </dd>
          </div>

          {/* Visão */}
          <div className="rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 p-4">
            <dt className="text-sm uppercase tracking-wide text-gray-400">Visão</dt>
            <dd className="mt-1 text-[0.975rem] text-gray-200">
              Ser a plataforma padrão de conformidade em acessibilidade na América Latina, conectando obra, projeto e fiscalização.
            </dd>
          </div>

          {/* Proposta central */}
          <div className="rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 p-4">
            <dt className="text-sm uppercase tracking-wide text-gray-400">Proposta central</dt>
            <dd className="mt-1 text-[0.975rem] text-gray-200">
              App móvel com RA para medição e checagem automática, pré-laudos e integração BIM/IFC.
            </dd>
          </div>

          {/* Público atendido */}
          <div className="rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 p-4">
            <dt className="text-sm uppercase tracking-wide text-gray-400">Público atendido</dt>
            <dd className="mt-1 text-[0.975rem] text-gray-200">
              Escritórios de arquitetura, construtoras, consultorias e órgãos públicos.
            </dd>
          </div>

          {/* Impacto esperado */}
          <div className="rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 p-4 sm:col-span-2 lg:col-span-1">
            <dt className="text-sm uppercase tracking-wide text-gray-400">Impacto esperado</dt>
            <dd className="mt-1 text-[0.975rem] text-gray-200">
              −30% retrabalho, −20% tempo de vistoria e ambientes mais inclusivos para pessoas com deficiência e idosos.
            </dd>
          </div>
        </dl>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-[2px] bg-gradient-to-b from-[color-mix(in_srgb,var(--accent-400)_70%,transparent)] to-[color-mix(in_srgb,var(--brand-600)_70%,transparent)] -z-10" />
          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${i % 2 === 0 ? "" : "md:translate-y-12"}`}
              >
                <div className="text-xs text-gray-500">{m.date}</div>
                <h3 className="font-semibold text-lg">{m.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
