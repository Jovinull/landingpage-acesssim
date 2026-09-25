import Reveal from "@/components/ui/Reveal";

type Partner = { name: string; src?: string; className?: string };

const partners: Partner[] = [
  { name: "Instituto Federal de Sergipe", src: "/logos/ifs.svg", className: "h-9" },
  { name: "LABIC · IFS" },
  { name: "Sebrae", src: "/logos/sebrae.svg", className: "h-8" },
  { name: "Catalisa ICT", src: "/logos/catalisa-ict.png", className: "h-6" },
  { name: "Programa Centelha", src: "/logos/centelha.png", className: "h-10" },
  { name: "FAPITEC/SE", src: "/logos/fapitec.png", className: "h-9" },
  { name: "CNPq", src: "/logos/cnpq.png", className: "h-8" },
];

export default function LogoCloud() {
  return (
    <section className="py-20 sm:py-24">
      <Reveal className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.16em] text-zinc-500">Apoio e reconhecimento</p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-14">
          {partners.map((p) => (
            <li key={p.name} title={p.name} className="flex items-center">
              {p.src ? (
                <img
                  src={p.src}
                  alt={p.name}
                  className={`w-auto brightness-0 opacity-50 dark:invert transition-opacity duration-300 hover:opacity-100 ${p.className}`}
                />
              ) : (
                <span className="text-lg font-bold tracking-tight text-white opacity-50 transition-opacity hover:opacity-100">
                  {p.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
