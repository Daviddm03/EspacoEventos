import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { servicos } from '../data/servicos'
import ServicesVideo from '../components/ServicesVideo'
import VenueImage from '../components/VenueImage'
import Reveal from '../components/home/Reveal'
import CtaWhatsapp from '../components/home/CtaWhatsapp'

export default function Servicos() {
  return (
    <>
      <section
  className="hero-section relative overflow-hidden bg-escuro"
  aria-labelledby="services-title"
>
  <ServicesVideo />

  <div
    className="absolute inset-0 bg-black/40"
    aria-hidden="true"
  />

  <div
    className="absolute inset-0 bg-linear-to-r from-black/75 via-black/25 to-black/10"
    aria-hidden="true"
  />

  <div
    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20"
    aria-hidden="true"
  />

  <div className="hero-content relative z-10 mx-auto flex h-full max-w-400 items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24 xl:px-24">
    <div className="max-w-3xl">

      <div className="hero-eyebrow mb-6 flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primaria" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-branco/70 md:text-xs">
          Tudo para sua celebração
        </span>
      </div>

      <h1
        id="services-title"
        className="font-titulo text-[3.4rem] leading-[0.95] tracking-[-0.02em] text-branco sm:text-6xl md:text-7xl lg:text-[5.5rem]"
      >
        <span className="block">
          Nossos
        </span>

        <span className="mt-2 block italic text-primaria">
          serviços.
        </span>
      </h1>

      <p className="hero-description mt-6 max-w-lg text-sm leading-relaxed text-branco/75 md:text-base">
        Tudo que você precisa para uma festa perfeita em um só lugar.
      </p>

    </div>
  </div>

  <div
    className="hero-scroll absolute bottom-16 right-8 z-10 hidden flex-col items-center gap-3 lg:flex xl:right-12"
    aria-hidden="true"
  >
    <span className="text-[8px] uppercase tracking-[0.3em] text-branco/50 [writing-mode:vertical-rl]">
      Scroll
    </span>

    <span className="h-10 w-px bg-branco/30" />
  </div>
</section>
      <div className="site-container services-content">
        {servicos.map((servico, index) => (
          <section key={servico.id} id={servico.id} className="service-detail" aria-labelledby={`titulo-${servico.id}`}>
            <Reveal
  className="service-detail-image"
  y={42}
>
  <div className="photo-frame">
    <VenueImage src={servico.imagem} />
  </div>
</Reveal>

<Reveal
  y={28}
  delay={0.12}
>
  <span className="service-number" aria-hidden="true">
    {String(index + 1).padStart(2, '0')}
  </span>

  <h2 id={`titulo-${servico.id}`}>
    {servico.titulo}
  </h2>

  <p className="body-copy">
    {servico.descricao.startsWith('[')
      ? servico.resumo
      : servico.descricao}
  </p>

  <ul
    className="service-features"
    aria-label={`Itens de ${servico.titulo}`}
  >
    {servico.itens.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>

  {servico.id === 'totem' && (
    <Link
      to="/totem"
      className="editorial-link mt-5"
    >
      Conheça o totem
      <ArrowUpRight aria-hidden="true" />
    </Link>
  )}
</Reveal>
          </section>
        ))}
      </div>
      <CtaWhatsapp eyebrow="Vamos conversar" description="Entre em contato e descubra como podemos tornar seu evento ainda mais especial." label="Falar no WhatsApp">
        Pronto para transformar sua <em className="block">próxima celebração?</em>
      </CtaWhatsapp>
    </>
  )
}
