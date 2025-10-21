"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CatalisaSection() {
  return (
    <section id="catalisa" className="py-16 md:py-24">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Aprovados no <span className="text-gradient">Catalisa Sebrae</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            O Catalisa ICT (Sebrae) é um programa de aceleração que conecta pesquisa aplicada a mercado, ajudando a transformar tecnologia em negócio. Para a AccessSim, a aprovação valida nossa proposta de usar Realidade Aumentada + IA para avaliar acessibilidade conforme a NBR9050, reduzindo retrabalho e custos — e reforça nosso impacto social ao promover cidades mais inclusivas para pessoas com deficiência e idosos. Nessa trilha, vamos amadurecer produto, validar mercado nacional e estruturar parcerias com escritórios, construtoras e órgãos públicos, além de integrações com plataformas BIM.
          </p>

          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
            <li>Seleção em programa que acelera tecnologias com alto potencial de inovação e mercado.</li>
            <li>Acesso a mentorias, networking e parcerias estratégicas (universidades, construtoras, órgãos públicos, provedores BIM).</li>
            <li>Impacto social direto: mais conformidade, menos desperdício e ambientes inclusivos para milhões de brasileiros.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full"
        >
          <a
            href="https://sebrae.com.br/sites/PortalSebrae/catalisa/ictedital"
            target="_blank"
            rel="noreferrer noopener"
            className="block"
          >
            <div
              className="
                relative w-full overflow-hidden
                rounded-2xl border border-black/10 dark:border-white/10
                bg-white/70 dark:bg-black/40
                aspect-[16/3] min-h-[140px] sm:min-h-[180px]
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src="/catalisa.jpeg"
                alt="Banner oficial do Catalisa Sebrae"
                fill
                priority
                className="object-contain p-4 md:p-6"
                sizes="(min-width: 768px) 560px, 100vw"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
