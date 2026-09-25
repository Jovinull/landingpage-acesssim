import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans } from "@/lib/site";


export default function Pricing() {
  return (
    <section id="planos" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Modelo de negócio"
          title="Acessibilidade como serviço"
          description="A AccessSim possui modelo SaaS (Software as a Service), permitindo que profissionais e empresas utilizem a plataforma por meio de assinatura."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.08}
              className={`relative flex flex-col rounded-2xl p-7 ${
                p.highlight
                  ? "border border-brand-400/40 bg-gradient-to-b from-brand-500/[0.12] to-brand-500/[0.02] shadow-[0_20px_80px_-20px_rgba(8,176,255,0.35)]"
                  : "card"
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">Plano</span>
              <h3 className="mt-1 text-xl font-medium text-white">{p.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-zinc-400">R$</span>
                <span className="text-4xl font-semibold tracking-tight text-white">{p.price}</span>
                <span className="text-sm text-zinc-500">/mês</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
              <a href="#contato" className={`mt-8 w-full ${p.highlight ? "btn-primary" : "btn-secondary"}`}>
                Fale com nosso time
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-zinc-500">
          Nomes, preços, limites e funcionalidades dos planos podem ser ajustados conforme a estratégia comercial da
          AccessSim.
        </p>
      </div>
    </section>
  );
}
