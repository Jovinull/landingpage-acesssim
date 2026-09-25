import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade | AccessSim",
  description: "Como a AccessSim trata dados pessoais neste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <PageShell
      eyebrow="Privacidade"
      title="Política de privacidade"
      description="Explicamos, de forma direta, quais dados este site trata, para quê e como você pode exercer seus direitos previstos na Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
      updated="25 de setembro de 2026"
    >
      <div className="doc">
        <h2>Quem somos</h2>
        <p>
          A AccessSim é uma startup de tecnologia para acessibilidade em projetos arquitetônicos, sediada em Lagarto,
          Sergipe. Para qualquer assunto sobre privacidade, fale com a gente pelo e-mail{" "}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Privacidade`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Quais dados tratamos</h2>
        <h3>Contato</h3>
        <p>
          O formulário de contato pede nome, e-mail e mensagem. Esses dados <strong>não ficam armazenados no site</strong>:
          ao enviar, o seu aplicativo de e-mail ou o WhatsApp é aberto com a mensagem pronta, e ela chega até nós por esses
          serviços. O mesmo vale quando você nos escreve diretamente.
        </p>
        <h3>Métricas de uso</h3>
        <p>
          Usamos o Vercel Web Analytics e o Vercel Speed Insights para entender, de forma agregada, quantas pessoas
          visitam o site, quais páginas acessam e como está o desempenho. Essas ferramentas não usam cookies e não nos
          permitem identificar você individualmente.
        </p>
        <h3>Preferência de tema</h3>
        <p>
          A escolha entre modo claro e escuro fica salva apenas no seu navegador e não é enviada para nós.
        </p>
        <h3>Registros técnicos</h3>
        <p>
          Como qualquer site, nosso provedor de hospedagem (Vercel) registra dados técnicos de acesso, como endereço IP e
          tipo de navegador, para operar o serviço e protegê-lo contra abusos.
        </p>

        <h2>Para que usamos e com qual base legal</h2>
        <ul>
          <li>Responder mensagens e pedidos de demonstração — procedimentos preliminares a um contrato, a seu pedido, e legítimo interesse (art. 7º, V e IX, da LGPD).</li>
          <li>Melhorar o site com métricas agregadas e manter a segurança — legítimo interesse (art. 7º, IX).</li>
        </ul>
        <p>Não vendemos dados pessoais e não os usamos para publicidade.</p>

        <h2>Serviços de terceiros</h2>
        <ul>
          <li>
            <strong>Vercel:</strong> hospedagem do site e métricas de uso.
          </li>
          <li>
            <strong>VLibras:</strong> widget de tradução para Libras carregado a partir de vlibras.gov.br, mantido pelo
            Governo Federal.
          </li>
          <li>
            <strong>E-mail e WhatsApp:</strong> quando você escolhe falar conosco por esses canais, valem também as
            políticas dos respectivos serviços.
          </li>
        </ul>

        <h2>Por quanto tempo guardamos</h2>
        <p>
          Mensagens de contato são mantidas pelo tempo necessário para o atendimento e eventual relação comercial, e
          depois excluídas, salvo obrigação legal de guarda.
        </p>

        <h2>Seus direitos</h2>
        <p>Conforme o art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
        <ul>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>portabilidade e informação sobre com quem compartilhamos seus dados;</li>
          <li>eliminação dos dados tratados com base no seu consentimento, quando for o caso.</li>
        </ul>
        <p>
          Basta enviar o pedido para <a href={`mailto:${CONTACT_EMAIL}?subject=Direitos%20LGPD`}>{CONTACT_EMAIL}</a>. Você
          também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2>Alterações desta política</h2>
        <p>
          Podemos atualizar esta política para refletir mudanças no site ou na legislação. A data da última atualização
          aparece no início da página.
        </p>
      </div>
    </PageShell>
  );
}
