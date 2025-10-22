"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Person = {
  name: string;
  role: string;
  bio: string;
  img: string;
  verified?: boolean;
  cert?: string;
  responsibility?: string;
};

const team: Person[] = [
  {
    name: "Allany Clara",
    role: "Representante Comercial & Administradora",
    bio:
      "Graduanda em Arquitetura e Urbanismo. Tech para acessibilidade e urbanismo de cidades inteligentes.",
    img: "/allany-clara.jpeg",
    responsibility: "Relacionamento com clientes e apoio a operações comerciais.",
  },
  {
    name: "Benicio Barbosa",
    role: "Responsável pela coordenação da startup",
    bio:
      "Trajetórias e guiamento para multidrones com MPC. Exp. em eletrônica e sistemas embarcados (LRA/ITA, LABIC/IFS).",
    img: "/bernicio-barbosa.jpeg",
    responsibility: "Coordenação geral e pesquisa aplicada (robótica/controle).",
  },
  {
    name: "Felipe Jovino",
    role: "Desenvolvedor Full-Stack & IA",
    bio:
      "Especialista em IA com foco em aplicações práticas. Full-stack (AdonisJS v6, Next.js, PostgreSQL) e pesquisa em AI/ML e IoT (ESP32). Lidera times, padroniza processos e cria conteúdo para democratizar tecnologia.",
    img: "/felipe-jovino.jpeg",
    cert: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    responsibility: "Coordenação técnica, arquitetura full-stack e IA aplicada ao produto.",
  },
  {
    name: "Gustavo Anthony",
    role: "Estagiário",
    bio:
      "Java, React, SQL, C#. Gestão de projetos, arquitetura e integração ágil. Passagens por Divtech (Coord. TI, Compliance, Dev).",
    img: "/gustavo-anthony.jpeg",
    responsibility: "Suporte a desenvolvimento full-stack e rotinas de integração.",
  },
  {
    name: "Ramon Oliveira",
    role: "Estagiário",
    bio:
      "Cursando 5º período de Sistemas de Informação. Foco em desenvolvimento de software e sistemas, com ênfase em backend Java.",
    img: "/ramon-oliveira.jpeg",
    responsibility: "Atuação na área de TI da startup, com foco em backend Java.",
  },
];


export default function Team() {
  return (
    <section id="equipe" className="py-16 md:py-24">
      <div className="container-x">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Equipe</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Time multidisciplinar unindo pesquisa aplicada (robótica e IA), produto e operações. Contamos com
            advisors e mentores do ecossistema acadêmico e de inovação.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Grid responsivo: 1 -> 2 -> 3 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-full flex flex-col rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-black/40 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <PersonCard person={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonCard({ person: p }: Readonly<{ person: Person }>) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="aspect-square rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 mb-4 overflow-hidden">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex items-center gap-2">
        <div className="font-semibold leading-tight">{p.name}</div>
        {p.verified && (
          <span
            className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-full border border-black/10 dark:border-white/10"
            title="Perfil verificado"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path
                fillRule="evenodd"
                d="M10 1.5a1 1 0 0 1 .832.445l1.39 1.985 2.35-.37a1 1 0 0 1 1.117 1.117l-.37 2.35 1.985 1.39a1 1 0 0 1 0 1.664l-1.985 1.39.37 2.35a1 1 0 0 1-1.117 1.117l-2.35-.37-1.39 1.985a1 1 0 0 1-1.664 0l-1.39-1.985-2.35.37a1 1 0 0 1-1.117-1.117l.37-2.35L1.445 10a1 1 0 0 1 0-1.664l1.985-1.39-.37-2.35A1 1 0 0 1 4.177 2.56l2.35.37 1.39-1.985A1 1 0 0 1 10 1.5Zm3.28 6.78a.75.75 0 0 0-1.06-1.06L9 10.94 7.78 9.72a.75.75 0 0 0-1.06 1.06L8.47 12.53a.75.75 0 0 0 1.06 0l3.75-3.75Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>

      <div className="text-sm text-gray-500 mt-0.5">{p.role}</div>

      {/* Bio resumida + expandível */}
      <div className="mt-2">
        <p
          className={[
            "text-sm text-gray-600 dark:text-gray-300 transition-all",
            expanded ? "" : "line-clamp-4",
          ].join(" ")}
          id={`bio-${p.name}`}
        >
          {p.bio}
        </p>

        {/* Ação de expandir */}
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={`bio-${p.name}`}
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-xs font-medium underline underline-offset-4 hover:opacity-80"
        >
          {expanded ? "Mostrar menos" : "Ler mais"}
        </button>
      </div>

      {/* Detalhes “compactos” aparecem só quando expandir */}
      {expanded && (
        <div className="mt-3 text-sm">
          <ul className="space-y-1">
            {p.responsibility && (
              <li className="flex gap-2">
                <span className="opacity-60">Responsabilidade:</span>
                <span>{p.responsibility}</span>
              </li>
            )}
            {p.cert && (
              <li className="flex gap-2">
                <span className="opacity-60">Certificação:</span>
                <span>{p.cert}</span>
              </li>
            )}
          </ul>
        </div>
      )}

      {!expanded && p.cert && (
        <div className="mt-3">
          <span className="inline-block text-[11px] px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10">
            {p.cert}
          </span>
        </div>
      )}
    </>
  );
}
