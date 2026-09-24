import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { imagensGaleria } from '../../data/galeria'
import VenueImage from '../VenueImage'
import Reveal from './Reveal'

const selecao = [imagensGaleria[4], imagensGaleria[3]]

export default function GaleriaResumo() {
  return (
    <section className="dark-section section-space" aria-labelledby="galeria-heading">
      <div className="site-container">
        <Reveal className="section-intro" stagger={.1}>
          <div>
            <p className="eyebrow">Momentos especiais</p>
            <h2 id="galeria-heading" className="section-heading">Um olhar sobre <em className="block">a celebração.</em></h2>
          </div>
          <div className="md:justify-self-end"><Link to="/galeria" className="editorial-link">Explorar a galeria <ArrowUpRight aria-hidden="true" /></Link></div>
        </Reveal>
        <Reveal className="home-gallery-grid" stagger={.12}>
          {selecao.map((foto, index) => (
            <Link key={foto.id} to="/galeria" aria-label={`Explorar galeria: ${foto.alt}`}>
              <figure>
                <div className="photo-frame"><VenueImage src={foto.src} alt={foto.alt} sizes="(min-width: 768px) 50vw, 55vw" /></div>
                <figcaption className="photo-caption"><span>{foto.alt}</span><span aria-hidden="true">0{index + 1}</span></figcaption>
              </figure>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
