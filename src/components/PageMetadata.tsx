import { useLocation } from 'react-router-dom'
import { getCanonicalUrl, getMetaTags, getPageSeo, NOT_FOUND_SEO } from '../lib/seo'

export default function PageMetadata() {
  const { pathname } = useLocation()
  const routeSeo = getPageSeo(pathname)
  const page = routeSeo ?? NOT_FOUND_SEO
  const canonicalUrl = getCanonicalUrl(pathname)

  // React 19 move title, meta e link para o head e acompanha as trocas de rota.
  // https://react.dev/reference/react-dom/components/meta
  return (
    <>
      <title>{page.title}</title>
      {!routeSeo && <meta name="robots" content="noindex" />}
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
