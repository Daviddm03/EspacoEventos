import { Star } from 'lucide-react'
import { depoimentos } from '../../data/depoimentos'
import Reveal from './Reveal'

export default function Depoimentos() {
  const publicados = depoimentos.filter(depoimento => !depoimento.texto.startsWith('['))
  return (
    <section className="section-space bg-fundo-alt" aria-labelledby="depoimentos-heading">
      <div className="site-container testimonials-layout">
        <Reveal>
          <p className="eyebrow mb-6">Experiências reais</p>
          <h2 id="depoimentos-heading" className="section-heading">Momentos que ficam <em className="block">na memória.</em></h2>
          <p className="body-copy mt-8">Conheça as experiências de quem celebrou momentos especiais no Espaço Eventos.</p>
        </Reveal>
        <Reveal
          className="testimonials-list"
          stagger={.1}
          y={36}
        >
          {publicados.length ? publicados.map(depoimento => (
            <figure key={depoimento.id} className="testimonial">
              <div className="testimonial-stars" role="img" aria-label={`${depoimento.estrelas} de 5 estrelas`}>
                {Array.from({ length: depoimento.estrelas }, (_, index) => <Star key={index} aria-hidden="true" />)}
              </div>
              <blockquote><p>“{depoimento.texto}”</p></blockquote>
              <figcaption><strong>{depoimento.nome}</strong><span>{depoimento.festa}</span></figcaption>
            </figure>
          )) : <div className="testimonial"><p className="font-titulo text-3xl italic">Cada celebração deixa uma história para contar.</p><p className="body-copy mt-6">Em breve, compartilharemos aqui as experiências dos nossos clientes.</p></div>}
        </Reveal>
      </div>
    </section>
  )
}
