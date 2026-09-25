import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  updated?: string;
  children: ReactNode;
};

// Estrutura das páginas internas (guia, acessibilidade, privacidade).
export default function PageShell({ eyebrow, title, description, updated, children }: Props) {
  return (
    <>
      <Navbar base="/" />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <header className="relative isolate border-b border-white/[0.06]">
          <div className="bg-blueprint mask-radial pointer-events-none absolute inset-0 -z-10" />
          <div className="container-x py-16 sm:py-20">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {eyebrow}
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl">{title}</h1>
            {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>}
            {updated && <p className="mt-6 text-xs text-zinc-500">Última atualização: {updated}</p>}
          </div>
        </header>
        <div className="container-x py-14 sm:py-20">{children}</div>
      </main>
      <Footer />
    </>
  );
}
