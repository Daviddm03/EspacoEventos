# Auditoria conservadora ? plano de implementa??o

**Objetivo:** reduzir duplica??o e res?duos do template preservando o produto atual.
**Arquitetura:** manter p?ginas, componentes, dados e constantes nas pastas existentes. Reutilizar a lista de navega??o; n?o criar componentes gen?ricos.
**Stack:** React 19, TypeScript 6, Vite 8, Tailwind 4, React Router 7, Embla 8.
**Especifica??o:** pedido anexado pelo usu?rio em 18/09/2026; execu??o nesta sess?o.

## Restri??es

Preservar classes, textos, links, rotas, imagens utilizadas, anima??es e comportamento. N?o instalar bibliotecas, atualizar depend?ncias, mudar arquitetura ou criar infraestrutura de testes. Remover somente arquivos sem refer?ncias verificadas.

## Etapas

- [x] Ler c?digo, configura??es e dados; inventariar assets e depend?ncias. Git inicialmente limpo; nenhum AGENTS.md no projeto.
- [x] Executar build/lint e capturar HTML inicial das cinco p?ginas em arquivo tempor?rio via React DOM Server e MemoryRouter.
- [x] Mover a lista existente de Navbar para NAVIGATION_LINKS em src/lib/constants.ts; consumir em Navbar e Footer com os mesmos destinos, ordem, textos e classes.
- [x] Adicionar aria-current ao link ativo do Footer e aria-hidden ao ?cone decorativo de Instagram.
- [x] Comparar HTML das cinco p?ginas, aceitando exclusivamente os novos atributos ARIA; executar lint.
- [x] Tornar Servico.imagem obrigat?rio e excluir o filtro todos das categorias atribu?veis a imagens.
- [x] Remover src/App.css, src/assets/react.svg, src/assets/vite.svg e public/icons.svg, res?duos sem refer?ncias. Preservar hero.png, pois n?o h? evid?ncia suficiente de inten??o de descarte.
- [x] Executar build, lint, tsc -b --force, compara??o de HTML e busca por refer?ncias removidas.
- [x] Revisar o diff e registrar as nove se??es solicitadas em docs/auditoria-tecnica.md, distinguindo resultados comprovados e limita??es.

Sem commit ou publica??o autom?tica. Valida??o visual depende do funcionamento do navegador; registrar bloqueio se persistir.
