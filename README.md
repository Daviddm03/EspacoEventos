# Espaço Eventos

Site institucional do Espaço Eventos, salão para festas e eventos em Porto Alegre.

O projeto apresenta o espaço, seus serviços e registros de eventos, com acesso ao WhatsApp para consultas e orçamentos.

## Stack

React + TypeScript + Vite, com React Router, Tailwind CSS e GSAP.

## Páginas

- Home (`/`)
- Galeria (`/galeria`)
- Serviços (`/servicos`)
- Sobre (`/sobre`)
- Página de conteúdo não encontrado para rotas inválidas

## Recursos técnicos

- Layout responsivo para desktop e dispositivos móveis.
- Recursos de acessibilidade: navegação por teclado, controle de foco no menu e no lightbox, marcação semântica e respeito à preferência por movimento reduzido.
- Galeria com filtros por categoria e visualização ampliada das fotos.
- Fotografias locais em WebP e carregamento diferido nas imagens de conteúdo.
- Vídeos de apresentação com controle de reprodução conforme visibilidade.
- Metadados de SEO por página, dados estruturados e geração de `robots.txt`.
- Favicon, Apple Touch Icon e manifest com a identidade do espaço.

O domínio definitivo deve ser configurado em `SITE_URL`, no arquivo `src/lib/seo.ts`, antes de gerar canonical, URLs públicas de compartilhamento e sitemap.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run check:types
npm audit
npm run build
```

## Build e deploy

```bash
npm run build
npm run preview
```

O build de produção é gerado em `dist/`. O projeto está preparado para deploy na Vercel, com comando de build `npm run build`, diretório de saída `dist` e reescrita de rotas da SPA definida em `vercel.json`.
