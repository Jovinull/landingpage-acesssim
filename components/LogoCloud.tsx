import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Partner = { name: string; src?: string; w?: number; h?: number; className?: string };

const partners: Partner[] = [
  { name: "Instituto Federal de Sergipe", src: "/logos/ifs.svg", w: 356, h: 104, className: "h-9" },
  { name: "LABIC · IFS" },
  { name: "Sebrae", src: "/logos/sebrae.svg", w: 80, h: 39, className: "h-8" },
  { name: "Catalisa ICT", src: "/logos/catalisa-ict.png", w: 250, h: 42, className: "h-6" },
  { name: "Programa Centelha", src: "/logos/centelha.png", w: 645, h: 258, className: "h-10" },
  { name: "FAPITEC/SE", src: "/logos/fapitec.png", w: 900, h: 241, className: "h-9" },
  { name: "CNPq", src: "/logos/cnpq.png", w: 488, h: 150, className: "h-8" },
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
                <Image
                  src={p.src}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  sizes="160px"
                  unoptimized={p.src.endsWith(".svg")}
                  className={`w-auto brightness-0 opacity-50 dark:invert transition-opacity duration-300 hover:opacity-100 ${p.className}`}
                />
              ) : (
                <span className="text-lg font-bold tracking-tight text-zinc-500 transition-colors hover:text-white">
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
