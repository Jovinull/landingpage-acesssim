import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Declaração de acessibilidade | AccessSim",
  description: "Como a AccessSim torna o próprio site acessível: padrões seguidos, recursos disponíveis, limitações conhecidas e como enviar sugestões.",
  alternates: { canonical: "/acessibilidade" },
};

export default function Acessibilidade() {
  return (
    <PageShell
      eyebrow="Acessibilidade"
      title="Declaração de acessibilidade"
      description="Uma empresa de acessibilidade precisa ter um site acessível. Este é o nosso compromisso e o que já fizemos para cumpri-lo."
      updated="25 de setembro de 2026"
    >
      <div className="doc">
        <h2>Nosso compromisso</h2>
        <p>
          Buscamos que qualquer pessoa, com ou sem deficiência, consiga navegar, ler e entrar em contato com a AccessSim.
          Nossa meta é atender às Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2, nível AA, publicadas pelo
          W3C.
        </p>

        <h2>Recursos disponíveis</h2>
        <ul>
          <li>
            <strong>Tradução para Libras:</strong> o widget VLibras, do Governo Federal, está disponível em todas as
            páginas pelo botão de acessibilidade na lateral da tela.
          </li>
          <li>
            <strong>Navegação por teclado:</strong> todo o site pode ser usado com a tecla Tab, e o primeiro item de cada
            página é o link “Pular para o conteúdo”.
          </li>
          <li>
            <strong>Foco visível:</strong> links, botões e campos mostram um contorno destacado quando recebem foco.
          </li>
          <li>
            <strong>Contraste:</strong> cores de texto e fundo foram ajustadas para contraste mínimo de 4,5:1 nos modos
            claro e escuro.
          </li>
          <li>
            <strong>Modo claro e escuro:</strong> alterne pelo botão com ícone de sol ou lua no topo da página.
          </li>
          <li>
            <strong>Menos movimento:</strong> as animações são desativadas quando o sistema está configurado para reduzir
            movimento.
          </li>
          <li>
            <strong>Estrutura semântica:</strong> títulos hierárquicos, regiões de navegação e conteúdo, textos
            alternativos em imagens e avisos quando um link abre em nova aba.
          </li>
          <li>
            <strong>Ampliação:</strong> o conteúdo se adapta a zoom de até 200% e a telas pequenas.
          </li>
        </ul>

        <h2>Como avaliamos</h2>
        <p>
          O site é verificado com ferramentas automáticas (axe-core e Lighthouse) nos modos claro e escuro, além de
          testes manuais de navegação por teclado. Ferramentas automáticas não encontram todos os problemas, por isso
          também contamos com o retorno de quem usa o site.
        </p>

        <h2>Limitações conhecidas</h2>
        <ul>
          <li>
            A interface da planta exibida na página inicial é ilustrativa; seu conteúdo está descrito em texto
            alternativo e na lista de resultados ao lado.
          </li>
          <li>
            Documentos e sites externos (como resultados oficiais em PDF) são de responsabilidade de seus autores e podem
            não seguir os mesmos padrões.
          </li>
          <li>O widget VLibras é um serviço de terceiros e depende da disponibilidade do Governo Federal.</li>
        </ul>

        <h2>Encontrou alguma barreira?</h2>
        <p>
          Se algo no site dificultou o seu acesso, conte para a gente pelo e-mail{" "}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Acessibilidade%20do%20site`}>{CONTACT_EMAIL}</a>. Informe a página e
          o que aconteceu, e responderemos o quanto antes.
        </p>
      </div>
    </PageShell>
  );
}
