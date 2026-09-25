import { CONTACT_EMAIL, SITE_URL, faqs, plans } from "@/lib/site";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // conteúdo estático, gerado a partir de constantes do próprio site
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function SiteJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "AccessSim",
            url: SITE_URL,
            logo: `${SITE_URL}/brand/accesssim-mark.svg`,
            email: CONTACT_EMAIL,
            slogan: "Acessibilidade inteligente para projetos mais inclusivos.",
            address: { "@type": "PostalAddress", addressLocality: "Lagarto", addressRegion: "SE", addressCountry: "BR" },
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "AccessSim",
            inLanguage: "pt-BR",
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        ],
      }}
    />
  );
}

export function HomeJsonLd() {
  const amounts = plans.map((p) => p.amount);
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            name: "AccessSim",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Plataforma que utiliza Inteligência Artificial para auxiliar na análise de acessibilidade em plantas arquitetônicas, com base nos critérios da NBR 9050.",
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#organization` },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: Math.min(...amounts).toFixed(2),
              highPrice: Math.max(...amounts).toFixed(2),
              offerCount: plans.length,
            },
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ],
      }}
    />
  );
}
