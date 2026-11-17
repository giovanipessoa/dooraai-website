# DooraAI Website

Site institucional de alta conversão da DooraAI, construído com Vite, React, TypeScript e Tailwind CSS v4.

## Requisitos

- Node.js 20 ou superior
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor local inicia em `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

O build gera os arquivos estáticos em `dist/`. A verificação de tipos pode ser executada isoladamente com `npm run typecheck`.

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os valores:

| Variável | Descrição |
| --- | --- |
| `VITE_APP_URL` | URL do aplicativo aberta pelos CTAs de login. Padrão: `https://app.dooraai.com`. |
| `VITE_LEAD_ENDPOINT` | Endpoint que recebe o formulário de demonstração como `POST` JSON. |

Quando `VITE_LEAD_ENDPOINT` não está configurado, o formulário abre o cliente de e-mail do visitante com nome, clínica, WhatsApp, área de atuação e número de profissionais já preenchidos, enviando para `contato@dooraai.com.br`. Configure o endpoint para captura automática de leads em produção.

## Estrutura

- `src/App.tsx`: composição das seções e controle dos modais.
- `src/components`: seções da página, navbar, footer e componentes de UI.
- `src/components/ui`: primitivas reutilizáveis, incluindo modal com foco controlado e ícones SVG.
- `src/lib/navigation.ts`: URL do aplicativo e rolagem acessível entre seções.
- `src/index.css`: tokens da marca, estilos base, classes de componente e animações.
- `public/logotype.png`: logotipo oficial da marca.

## Conteúdo e acessibilidade

- Copy em português do Brasil, com posicionamento de IA assistiva, sem diagnóstico ou prescrição.
- Navegação por teclado, skip link, foco preso nos modais, `aria-expanded` no FAQ e menu móvel.
- Contraste revisado nas seções claras e escuras.
- Animações respeitam `prefers-reduced-motion`.
