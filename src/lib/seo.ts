import { WHATSAPP_NUMBER } from './constants.ts'

export const SITE_NAME = 'Espaço Eventos'

// TODO: preencher com o domínio HTTPS definitivo e executar o build novamente.
// Vazio: não publica canonical, og:url ou sitemap com um endereço presumido.
export const SITE_URL: string = ''

// Imagem de compartilhamento e favicon aguardam assets de marca adequados.
export const SEO_PAGES = [
  {
    path: '/',
    title: 'Espaço Eventos | Festas e Eventos em Porto Alegre',
    description: 'Conheça o Espaço Eventos, espaço para festas em Porto Alegre, RS. Veja os serviços, a galeria e entre em contato para planejar sua celebração.',
  },
  {
    path: '/galeria',
    title: 'Galeria | Espaço Eventos em Porto Alegre',
    description: 'Veja fotos do salão, dos eventos e da decoração do Espaço Eventos em Porto Alegre.',
  },
  {
    path: '/servicos',
    title: 'Serviços para Festas | Espaço Eventos em Porto Alegre',
    description: 'Confira os serviços do Espaço Eventos, em Porto Alegre: bar, pista de LED, espaço kids, gastronomia e totem de fotos.',
  },
  {
    path: '/sobre',
    title: 'Sobre o Espaço Eventos | Festas em Porto Alegre',
    description: 'Conheça a origem familiar do Espaço Eventos e a equipe que participa da preparação e da realização das festas em Porto Alegre.',
  },
] as const

export const NOT_FOUND_SEO = {
  title: 'Página não encontrada | Espaço Eventos',
  description: 'A página que você procura não foi encontrada.',
} as const

export function getPageSeo(pathname: string) {
  const path = pathname.toLowerCase().replace(/\/+$/, '') || '/'
  return SEO_PAGES.find(page => page.path === path)
}

export function getMetaTags(page: { title: string; description: string }) {
  return [
    { name: 'description', content: page.description },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'pt_BR' },
  ]
}

export function getSiteOrigin(siteUrl: string = SITE_URL) {
  if (!siteUrl.trim()) return undefined

  const url = new URL(siteUrl)
  if (
    url.protocol !== 'https:' || url.pathname !== '/' ||
    url.search || url.hash || url.username || url.password ||
    url.hostname === 'localhost' || url.hostname.endsWith('.localhost') ||
    /^127\./.test(url.hostname) || url.hostname === '[::1]'
  ) {
    throw new Error('SITE_URL deve ser o domínio público HTTPS, sem caminho, parâmetros ou credenciais.')
  }

  return url.origin
}

export function getCanonicalUrl(pathname: string, siteUrl: string = SITE_URL) {
  const origin = getSiteOrigin(siteUrl)
  const page = getPageSeo(pathname)
  return origin && page ? new URL(page.path, origin).href : undefined
}

// https://schema.org/EventVenue — apenas dados já presentes no site.
export function getVenueStructuredData(siteUrl: string = SITE_URL) {
  const origin = getSiteOrigin(siteUrl)
  return {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: SITE_NAME,
    description: 'Espaço para festas e eventos em Porto Alegre, RS.',
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Professor Oscar Pereira, 1549',
      addressLocality: 'Porto Alegre',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
    ...(origin ? { url: new URL('/', origin).href } : {}),
  }
}
