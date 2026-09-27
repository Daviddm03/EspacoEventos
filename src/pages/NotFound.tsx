import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="dark-section section-space" aria-labelledby="not-found-title">
      <div className="site-container">
        <p className="eyebrow mb-6">404</p>
        <h1 id="not-found-title" className="section-heading">
          Página <em className="block">não encontrada</em>
        </h1>
        <p className="body-copy mt-6">
          A página que você procura não existe ou foi movida.
        </p>
        <Link to="/" className="button mt-8">
          Voltar para o início
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
