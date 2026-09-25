import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.accesssim.com.br"),
  alternates: { canonical: "/" },
  title: "AccessSim — Acessibilidade inteligente para projetos mais inclusivos",
  description:
    "Plataforma inteligente que utiliza Inteligência Artificial para auxiliar na análise de acessibilidade em plantas arquitetônicas, com base nos critérios da NBR 9050.",
  openGraph: {
    title: "AccessSim — Acessibilidade inteligente para projetos mais inclusivos",
    description:
      "Inteligência Artificial para auxiliar na análise de acessibilidade em plantas arquitetônicas, com base na NBR 9050.",
    siteName: "AccessSim",
    locale: "pt_BR",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
