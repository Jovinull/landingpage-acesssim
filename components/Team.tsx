import { User, BadgeCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Person = {
  name: string;
  role: string;
  bio?: string;
  img?: string;
  cert?: string;
};

const founders: Person[] = [
  {
    name: "Allany Clara",
    role: "Arquitetura, Acessibilidade e Negócios",
    bio: "Atua na interface entre arquitetura, acessibilidade e tecnologia, definindo os critérios arquitetônicos e a aplicação da NBR 9050 na solução. Também conduz o relacionamento comercial da AccessSim.",
    img: "/allany-clara.jpeg",
  },
  {
    name: "Felipe Jovino",
    role: "Líder Técnico · Full-Stack e IA",
    bio: "Lidera o desenvolvimento tecnológico da plataforma, atuando com desenvolvimento full-stack, Inteligência Artificial e na arquitetura dos sistemas que compõem a solução.",
    img: "/felipe-jovino.jpeg",
    cert: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  },
  {
    name: "Benicio Barbosa",
    role: "Coordenação Geral · Tecnologia e Sistemas",
    bio: "Coordena a AccessSim e atua em tecnologia e pesquisa aplicada, contribuindo para o desenvolvimento e a integração das soluções tecnológicas, com experiência em eletrônica e sistemas embarcados.",
    img: "/bernicio-barbosa.jpeg",
  },
];

const interns: Person[] = [
  {
    name: "Ramon Oliveira",
    role: "Estagiário · Desenvolvimento Backend",
    bio: "Cursando Sistemas de Informação. Atua no desenvolvimento de software da AccessSim, com foco em backend Java.",
    img: "/ramon-oliveira.jpeg",
  },
  {
    name: "Cyntia Priscilla",
    role: "Estagiária",
  },
];

const alumni: Person[] = [
  {
    name: "Gustavo Anthony",
    role: "Ex-estagiário · Desenvolvimento",
    img: "/gustavo-anthony.jpeg",
  },
];

function Avatar({ p, className }: { p: Person; className: string }) {
  return p.img ? (
    <img src={p.img} alt={p.name} className={`object-cover ${className}`} />
  ) : (
    <div role="img" aria-label={p.name} className={`flex items-center justify-center bg-white/[0.04] ${className}`}>
      <User className="h-1/2 w-1/2 text-zinc-600" strokeWidth={1.25} />
    </div>
  );
}

export default function Team() {
  return (
    <section id="equipe" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Equipe"
          title="Quem constrói a AccessSim"
          description="Um time multidisciplinar unindo arquitetura, acessibilidade e tecnologia."
        />

        {/* fundadores */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="card group overflow-hidden">
              <div className="relative aspect-square overflow-hidden sm:aspect-[4/5]">
                <Avatar
                  p={p}
                  className="h-full w-full grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-medium text-white">{p.name}</h3>
                  <p className="mt-0.5 text-sm text-brand-300">{p.role}</p>
                </div>
              </div>
              <div className="p-6 pt-4">
                <p className="text-sm leading-relaxed text-zinc-400">{p.bio}</p>
                {p.cert && (
                  <p className="mt-4 flex items-start gap-2 text-xs text-zinc-500">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-brand-400" />
                    {p.cert}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* estagiários */}
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">Estagiários</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {interns.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06} className="card flex items-center gap-5 p-5">
                <Avatar p={p} className="h-16 w-16 shrink-0 rounded-full border border-white/10" />
                <div className="min-w-0">
                  <div className="font-medium text-white">{p.name}</div>
                  <div className="text-sm text-brand-300">{p.role}</div>
                  {p.bio && <p className="mt-1 text-sm leading-relaxed text-zinc-400">{p.bio}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ex-membros */}
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">Ex-membros</h3>
          <p className="mt-2 text-sm text-zinc-500">Pessoas que fizeram parte da nossa trajetória.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {alumni.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] py-1.5 pl-1.5 pr-5"
              >
                <Avatar p={p} className="h-9 w-9 rounded-full grayscale" />
                <div className="leading-tight">
                  <div className="text-sm text-zinc-300">{p.name}</div>
                  <div className="text-xs text-zinc-500">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
