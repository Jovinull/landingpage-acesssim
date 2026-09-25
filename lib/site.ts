export const SITE_URL = "https://www.accesssim.com.br";
export const CONTACT_EMAIL = "faculdadebc1@gmail.com";
export const WHATSAPP_E164 = "+5579988737718";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164.replace("+", "")}`;

export const plans = [
  {
    name: "Básico",
    price: "79,90",
    amount: 79.9,
    desc: "Para profissionais que desejam utilizar a plataforma em projetos individuais.",
  },
  {
    name: "Profissional",
    price: "149,90",
    amount: 149.9,
    desc: "Para profissionais que analisam maior volume de projetos.",
    highlight: true,
  },
  {
    name: "Corporativo",
    price: "499,90",
    amount: 499.9,
    desc: "Para escritórios, empresas e equipes que precisam utilizar a plataforma de forma compartilhada e em maior escala.",
  },
];

export const faqs = [
  {
    q: "A AccessSim substitui a análise de um arquiteto?",
    a: "Não. A AccessSim é uma ferramenta de apoio. A análise e a responsabilidade técnica pelo projeto continuam sendo do profissional habilitado.",
  },
  {
    q: "A AccessSim verifica a NBR 9050?",
    a: "A plataforma utiliza critérios relacionados à NBR 9050 para auxiliar na identificação de possíveis não conformidades em projetos arquitetônicos.",
  },
  {
    q: "Preciso ter conhecimento de programação?",
    a: "Não. A plataforma foi pensada para ser utilizada por profissionais da arquitetura, engenharia e áreas relacionadas.",
  },
  {
    q: "Que tipo de arquivo posso enviar?",
    a: "A solução trabalha com imagens de plantas arquitetônicas, como arquivos PNG e JPEG.",
  },
  {
    q: "A AccessSim já está funcionando?",
    a: "Sim. A AccessSim possui um protótipo funcional e está atualmente em fase de testes, aprimoramento e validação com profissionais.",
  },
  {
    q: "A AccessSim fornece um laudo técnico?",
    a: "A plataforma oferece informações para apoiar a análise do projeto. A emissão de documentos técnicos e a responsabilidade profissional devem ser realizadas pelo profissional habilitado.",
  },
];
