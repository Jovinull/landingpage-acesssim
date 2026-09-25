"use client";
import Script from "next/script";

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
  }
}

// Widget oficial do Governo Federal que traduz o conteúdo da página para Libras.
export default function VLibras() {
  return (
    <>
      <aside aria-label="Tradução para Libras (VLibras)">
        <div {...{ vw: "" }} className="enabled">
          <div {...{ "vw-access-button": "" }} className="active" />
          <div {...{ "vw-plugin-wrapper": "" }}>
            <div className="vw-plugin-top-wrapper" />
          </div>
        </div>
      </aside>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.VLibras) new window.VLibras.Widget("https://vlibras.gov.br/app");
        }}
      />
    </>
  );
}
