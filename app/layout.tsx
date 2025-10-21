export const metadata = {
  title: "AccessSim — Inovação aprovada no Catalisa (Sebrae)",
  description: "Landing page profissional para a startup AccessSim, aprovada no Catalisa do Sebrae.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        {children}
      </body>
    </html>
  );
}
