import { useLocation } from 'react-router-dom'
import { getCanonicalUrl, getMetaTags, getPageSeo, SEO_PAGES } from '../lib/seo'

export default function PageMetadata() {
  const { pathname } = useLocation()
  const page = getPageSeo(pathname) ?? SEO_PAGES[0]
  const canonicalUrl = getCanonicalUrl(pathname)

  // React 19 move title, meta e link para o head e acompanha as trocas de rota.
  // https://react.dev/reference/react-dom/components/meta
  return (
    <>
      <title>{page.title}</title>
      {getMetaTags(page).map(meta => (
        <meta key={meta.name ?? meta.property} {...meta} />
      ))}
      {canonicalUrl && (
        <>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:url" content={canonicalUrl} />
        </>
      )}
    </>
  )
}
