import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { servicos } from '../../data/servicos'
import VenueImage from '../VenueImage'
import Reveal from './Reveal'

export default function ServicosResumo() {
  return (
    <section className="section-space" aria-labelledby="servicos-heading">
      <div className="site-container">
        <Reveal className="section-intro" stagger={.1}>
          <div>
            <p className="eyebrow">O espaço. As possibilidades.</p>
            <h2 id="servicos-heading" className="section-heading">Tudo para tornar sua <em>celebração inesquecível</em></h2>
          </div>
          <p className="body-copy">Um espaço completo para celebrar momentos especiais, pensado para receber você, sua família e seus convidados.</p>
        </Reveal>
        <Reveal className="service-summary-grid" stagger={.07}>
          {servicos.map((servico, index) => (
            <Link key={servico.id} to="/servicos" className="service-summary">
              <div className="photo-frame">
                <VenueImage src={servico.imagem} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 112px" />
              </div>
              <div>
                <div className="service-summary-title">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{servico.titulo}</h3>
                  <ArrowUpRight aria-hidden="true" />
                </div>
                <p>{servico.resumo}</p>
              </div>
            </Link>
          ))}
        </Reveal>
        <div className="section-end"><Link to="/servicos" className="editorial-link">Ver todos os serviços <ArrowUpRight aria-hidden="true" /></Link></div>
      </div>
    </section>
  )
}
