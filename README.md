# Landing Page — AcessSim (Catalisa Sebrae)

Uma landing page moderna em Next.js + Tailwind, com animações (Framer Motion) e componentes separados.

## Como usar (assumindo que você já criou o projeto com `app-tw`)

1) Instale as dependências extras:
```bash
npm i framer-motion lucide-react @tailwindcss/typography
```

2) Substitua/adicione os arquivos deste pacote dentro do seu projeto:
- `app/layout.tsx`, `app/page.tsx`
- `components/*`
- `lib/utils.ts`
- `styles/globals.css`
- `tailwind.config.js` (mescle se já existir)
- `public/logo.svg`

3) Rode o projeto:
```bash
npm run dev
```

4) Personalize os placeholders:
- Conteúdos marcados com `[]` em cada seção.
- Itens de navegação em `lib/utils.ts`.
- Paleta de cores em `tailwind.config.js` (objeto `colors.brand`).

## Seções
- Hero (Início)
- LogoCloud (parcerias/reconhecimentos)
- Features (Solução)
- Catalisa (apresenta aprovação no programa do Sebrae)
- Stats (métricas/impacto)
- Timeline + Sobre (história e propósito)
- Equipe
- CTA (contato)
- Footer

## Notas
- Header sticky com scrollspy simples que destaca a seção ativa.
- Layout responsivo e pronto para modo escuro.
- Sem dependências pesadas além das listadas.
