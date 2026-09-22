import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getCanonicalUrl, getMetaTags, getSiteOrigin, getVenueStructuredData, SEO_PAGES, SITE_URL } from './src/lib/seo.ts'

export function seoPlugin(siteUrl: string = SITE_URL): Plugin {
  const origin = getSiteOrigin(siteUrl)

  return {
    name: 'espaco-eventos-seo',
    // Fallback compartilhado da SPA para leitores que não executam JavaScript.
    // https://vite.dev/guide/api-plugin.html#transformindexhtml
    transformIndexHtml() {
      return [
        { tag: 'title', attrs: { 'data-seo-fallback': '' }, children: SEO_PAGES[0].title },
        ...getMetaTags(SEO_PAGES[0]).map(meta => ({
          tag: 'meta',
          attrs: { ...meta, 'data-seo-fallback': '' },
        })),
        {
          tag: 'script',
          attrs: { type: 'application/ld+json', id: 'venue-schema' },
          children: JSON.stringify(getVenueStructuredData(siteUrl)).replace(/</g, '\\u003c'),
        },
      ].map(tag => ({ ...tag, injectTo: 'head' as const }))
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: 'User-agent: *\nAllow: /\n' +
          (origin ? `\nSitemap: ${new URL('/sitemap.xml', origin).href}\n` : ''),
      })

      // Um sitemap precisa de URLs absolutas; aguarda SITE_URL definitivo.
      if (!origin) return

      const urls = SEO_PAGES.map(page =>
        `  <url><loc>${getCanonicalUrl(page.path, siteUrl)!.replaceAll('&', '&amp;')}</loc></url>`
      ).join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          urls + '\n</urlset>\n',
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    seoPlugin(),
  ],
})
