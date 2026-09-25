import Logo from "@/components/ui/Logo";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site";

const columns = [
  {
    title: "Produto",
    links: [
      { name: "Como funciona", href: "/#como-funciona" },
      { name: "Solução", href: "/#solucao" },
      { name: "NBR 9050", href: "/#nbr9050" },
      { name: "Planos", href: "/#planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "A AccessSim", href: "/#sobre" },
      { name: "Validação", href: "/#validacao" },
      { name: "Conquistas", href: "/#conquistas" },
      { name: "Equipe", href: "/#equipe" },
      { name: "Perguntas frequentes", href: "/#faq" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { name: "Guia prático da NBR 9050", href: "/guia-nbr-9050" },
      { name: "Declaração de acessibilidade", href: "/acessibilidade" },
      { name: "Política de privacidade", href: "/privacidade" },
    ],
  },
  {
    title: "Contato",
    links: [
      { name: "Solicitar demonstração", href: "/#contato" },
      { name: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { name: "WhatsApp", href: WHATSAPP_URL },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pb-20 md:pb-0">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
            Acessibilidade inteligente para projetos mais inclusivos.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <h2 className="text-sm font-medium text-zinc-200">{c.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="break-all text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} AccessSim. Todos os direitos reservados.</span>
          <span>Aprovada no Catalisa ICT (Sebrae) e no Programa Centelha</span>
        </div>
      </div>
    </footer>
  );
}
