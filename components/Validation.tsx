import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stages = [
  {
    label: "Protótipo funcional",
    desc: "Capaz de receber e analisar plantas arquitetônicas e apresentar informações relacionadas à acessibilidade.",
    status: "done" as const,
  },
  {
    label: "Testes e validação",
    desc: "Aprimoramento da solução, testes e validação com profissionais de arquitetura e engenharia.",
    status: "current" as const,
  },
  {
    label: "Escala comercial",
    desc: "Melhoria dos resultados e preparação da plataforma para utilização em escala comercial.",
    status: "next" as const,
  },
];

const activities = [
  "Testes com plantas arquitetônicas",
  "Avaliação por profissionais",
  "Coleta de feedback",
  "Identificação de erros",
  "Aprimoramento da Inteligência Artificial",
  "Melhoria da experiência de utilização",
  "Avaliação da aplicabilidade comercial da solução",
];

export default function Validation() {
  return (
    <section id="validacao" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="O produto já existe"
          title="Uma solução em evolução"
          description="A AccessSim já possui um protótipo funcional. Atualmente, o projeto está concentrado no aprimoramento da solução, realização de testes, validação com profissionais e preparação para escala comercial."
        />

        {/* etapas */}
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal
              as="li"
              key={s.label}
              delay={i * 0.08}
              className={`card relative p-6 ${s.status === "current" ? "border-brand-400/40 bg-brand-500/[0.04]" : ""}`}
            >
              <div className="flex items-center gap-3">
                {s.status === "done" && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15">
                    <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                  </span>
                )}
                {s.status === "current" && (
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-brand-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                  </span>
                )}
                {s.status === "next" && <span className="h-6 w-6 rounded-full border border-dashed border-white/20" />}
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {s.status === "done" ? "Concluído" : s.status === "current" ? "Em andamento" : "Próxima etapa"}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">{s.label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </Reveal>
          ))}
        </ol>

        {/* validação com profissionais */}
        <Reveal className="card mt-4 p-6 sm:p-8">
          <h3 className="font-medium text-white">Tecnologia desenvolvida com foco na aplicação real</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
            Os testes com profissionais de arquitetura e engenharia avaliam a capacidade da plataforma de interpretar
            diferentes tipos de projetos, identificar possíveis não conformidades e apresentar informações úteis.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Atividades da etapa de validação">
            {activities.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300"
              >
                <Check className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
