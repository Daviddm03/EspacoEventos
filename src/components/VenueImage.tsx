import type { ImgHTMLAttributes } from 'react'

export default function VenueImage({ src, alt = '', sizes = '(min-width: 1024px) 45vw, 100vw', className = '', loading = 'lazy', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const responsive = src?.startsWith('https://images.unsplash.com/')
  const srcSet = src && responsive ? [400, 800, 1200, 1600].map(width => {
    const url = new URL(src)
    url.searchParams.set('w', String(width))
    return `${url.href} ${width}w`
  }).join(', ') : undefined

  return <img src={src} srcSet={srcSet} sizes={responsive ? sizes : undefined} alt={alt} loading={loading} decoding="async" className={`photo ${className}`} {...props} />
}
