"use client";

export default function LogoCloud() {
  return (
    <section className="py-10">
      <div className="container-x">
        <div className="text-center text-sm text-gray-500 mb-6">Parcerias e reconhecimentos</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-70">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 rounded-xl bg-black/5 dark:bg-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}
