"use client";

type Partner = {
  name: string;
  subtitle?: string;
  img?: string;
};

const partners: Partner[] = [
  { name: "LABIC (IFS)", subtitle: "Laboratório de Inovação e Criatividade", img: "/logos/labic.svg" },
  { name: "Instituto Federal de Sergipe", subtitle: "Campus Lagarto", img: "/logos/ifs.svg" },
  { name: "Catalisa (Sebrae)", subtitle: "Programa de Aceleração", img: "/logos/sebrae.svg" },
];

export default function LogoCloud() {
  return (
    <section className="py-10">
      <div className="container-x">
        <div className="text-center text-sm text-gray-500 mb-6">Parcerias e reconhecimentos</div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="w-full max-w-[280px] h-16 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur flex items-center justify-center px-4"
              aria-label={p.name}
              title={p.name}
            >
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-8 object-contain opacity-80 grayscale hover:grayscale-0 transition"
                />
              ) : (
                <div className="text-center">
                  <div className="text-sm font-medium">{p.name}</div>
                  {p.subtitle && <div className="text-xs text-gray-500 dark:text-gray-400">{p.subtitle}</div>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
