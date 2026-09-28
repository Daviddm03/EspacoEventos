import type { ReactNode } from 'react'

import { ArrowUpRight } from 'lucide-react'

import { WHATSAPP_URL } from '../../lib/constants'

import { imagensGaleria } from '../../data/galeria'

import VenueImage from '../VenueImage'

import Reveal from './Reveal'

type CtaWhatsappProps = {
  eyebrow?: string
  children?: ReactNode
  description?: string
  label?: string
}

export default function CtaWhatsapp({
  eyebrow = 'Vamos celebrar',
  children = (
    <>
      Vamos planejar sua <em className="block">próxima festa?</em>
    </>
  ),
  description = 'Conte um pouco sobre o seu evento e descubra as opções para a sua data.',
  label = 'Solicitar orçamento',
}: CtaWhatsappProps) {
  return (
    <section
      id="contato"
      className="contact-section dark-section"
      aria-labelledby="contato-heading"
    >
      {/* Foto de fundo */}
      <div className="contact-photo">
        <VenueImage
          src={imagensGaleria[0].src}
          sizes="100vw"
        />
      </div>

      <div className="site-container contact-layout">

        {/* Título */}
        <div>
          <Reveal y={20}>
            <p className="eyebrow">
              {eyebrow}
            </p>
          </Reveal>

          <Reveal y={42} delay={0.08}>
            <h2
              id="contato-heading"
              className="section-heading"
            >
              {children}
            </h2>
          </Reveal>
        </div>

        {/* Conteúdo */}
        <div>
          <Reveal y={26} delay={0.12}>
            <p className="body-copy">
              {description}
            </p>
          </Reveal>

          <Reveal y={26} delay={0.18}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {label}

              <ArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal y={18} delay={0.24}>
            <p className="contact-note">
              Consulte a disponibilidade para sua data.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}