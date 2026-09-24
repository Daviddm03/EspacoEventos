import type { ReactNode } from 'react'
import VenueImage from './VenueImage'

type PageHeaderProps = {
  eyebrow: string
  children: ReactNode
  description: string
  image?: string
  caption?: string
}

export default function PageHeader({ eyebrow, children, description, image, caption }: PageHeaderProps) {
  return (
    <header className="page-header dark-section">
      <div className={`site-container ${image ? 'page-header-layout' : ''}`}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title">{children}</h1>
          <p className="body-copy">{description}</p>
        </div>
        {image && <figure>
          <div className="page-header-visual photo-frame">
            <VenueImage src={image} loading="eager" sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          {caption && <figcaption className="page-header-caption">{caption}</figcaption>}
        </figure>}
      </div>
    </header>
  )
}
