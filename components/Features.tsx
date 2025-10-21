"use client";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Sparkles } from "lucide-react";

const features = [
  { title: "Reduz custos e retrabalho", desc: "Automatiza medições e verificações da NBR9050 com RA/IA, evitando correções tardias e desperdício de materiais. Resultado: projetos mais assertivos, menos idas e vindas de obra e impacto econômico já no curto prazo.", icon: CheckCircle },
  { title: "Conformidade guiada pela NBR9050", desc: "Gera alertas e recomendações práticas (ex.: “porta mínima 90 cm”, “instalar barra de apoio”), além de simulações visuais no próprio ambiente. A equipe enxerga o problema e a solução, diminuindo a chance de erro humano.", icon: Shield },
  { title: "Agilidade e escala para o time", desc: "Avaliação em tempo real, integração com fluxo digital (BIM) e relatórios rápidos. É replicável em diferentes tipologias e regiões, atendendo escritórios de arquitetura, construtoras e obras públicas com ganho de velocidade e padronização.", icon: Sparkles },
];

export default function Features() {
  return (
    <section id="solucao" className="py-16 md:py-24">
      <div className="container-x">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Como nossa solução ajuda</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            No Brasil, milhões de pessoas com deficiência e mais de 30 milhões de idosos ainda esbarram em barreiras arquitetônicas por falhas na aplicação da NBR9050 — avaliações manuais são lentas, sujeitas a interpretação e geram retrabalho caro. A <strong> AccessSim </strong> usa <strong> Imagens de Plantas + IA </strong> para analisar ambientes em tempo real, identificar não conformidades e sugerir ajustes visuais e objetivos (ex.: barras de apoio, larguras de porta, áreas de giro), reduzindo custos e acelerando decisões desde o anteprojeto até a obra.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <f.icon className="mb-3 text-[var(--brand-600)]" />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
