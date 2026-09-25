import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

import VenueImage from '../components/VenueImage'
import CtaWhatsapp from '../components/home/CtaWhatsapp'
import Reveal from '../components/home/Reveal'
import GalleryVideo from '../components/GalleryVideo'

import {
  imagensGaleria,
  categoriasGaleria,
} from '../data/galeria'

import type { CategoriaGaleria } from '../data/galeria'

export default function Galeria() {
  const [categoriaAtiva, setCategoriaAtiva] =
    useState<CategoriaGaleria>('todos')

  const [imagemAberta, setImagemAberta] =
    useState<number | null>(null)

  const lightboxRef = useRef<HTMLDialogElement>(null)

  const fotoAcionadoraRef =
    useRef<HTMLButtonElement | null>(null)

  const imagensFiltradas =
    categoriaAtiva === 'todos'
      ? imagensGaleria
      : imagensGaleria.filter(
          imagem => imagem.categoria === categoriaAtiva,
        )

  const imagensDisponiveis =
    imagensFiltradas.filter(imagem => imagem.src !== '')

  const imagemAtual =
    imagemAberta !== null
      ? imagensGaleria.find(
          imagem => imagem.id === imagemAberta,
        )
      : null

  const temImagens = imagensDisponiveis.length > 0

  useEffect(() => {
    const dialog = lightboxRef.current

    if (!imagemAtual || !dialog) return

    const acionador = fotoAcionadoraRef.current

    const overflowAnterior =
      document.body.style.overflow

    const paddingAnterior =
      document.body.style.paddingRight

    const larguraScrollbar =
      window.innerWidth -
      document.documentElement.clientWidth

    const paddingAtual =
      window.getComputedStyle(document.body).paddingRight

    document.body.style.overflow = 'hidden'

    if (larguraScrollbar > 0) {
      document.body.style.paddingRight =
        `calc(${paddingAtual} + ${larguraScrollbar}px)`
    }

    dialog.showModal()

    return () => {
      dialog.close()

      document.body.style.overflow =
        overflowAnterior

      document.body.style.paddingRight =
        paddingAnterior

      if (acionador?.isConnected) {
        acionador.focus({
          preventScroll: true,
        })
      }
    }
  }, [imagemAtual])

  return (
    <>
      {/* HERO DA GALERIA */}

 <section
  className="hero-section relative overflow-hidden bg-escuro"
  aria-labelledby="gallery-title"
>
  <GalleryVideo />

  {/* Overlay geral */}
  <div
    className="absolute inset-0 bg-black/40"
    aria-hidden="true"
  />

  {/* Gradiente horizontal */}
  <div
    className="absolute inset-0 bg-linear-to-r from-black/75 via-black/25 to-black/10"
    aria-hidden="true"
  />

  {/* Gradiente vertical */}
  <div
    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20"
    aria-hidden="true"
  />

  {/* Conteúdo */}
  <div className="hero-content relative z-10 mx-auto flex h-full max-w-400 items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24 xl:px-24">
    <div className="max-w-3xl">

      <div className="hero-eyebrow mb-6 flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primaria" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-branco/70 md:text-xs">
          Momentos especiais
        </span>
      </div>

      <h1
        id="gallery-title"
        className="font-titulo text-[3.4rem] leading-[0.95] tracking-[-0.02em] text-branco sm:text-6xl md:text-7xl lg:text-[5.5rem]"
      >
        <span className="block">
          Nossa
        </span>

        <span className="mt-2 block italic text-primaria">
          galeria.
        </span>
      </h1>

      <p className="hero-description mt-6 max-w-lg text-sm leading-relaxed text-branco/75 md:text-base">
        Momentos reais, detalhes e celebrações que
        ganharam vida por aqui.
      </p>

    </div>
  </div>

  {/* Scroll */}
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

      {/* GALERIA */}

      <section
        className="gallery-section"
        aria-label="Fotografias do Espaço Eventos"
      >
        <div className="site-container">

          {/* FILTROS */}

          <Reveal
            className="gallery-toolbar"
            y={20}
          >
            <div
              className="gallery-filters"
              role="group"
              aria-label="Filtrar galeria"
            >
              {categoriasGaleria.map(
                ({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={
                      categoriaAtiva === id
                    }
                    onClick={() =>
                      setCategoriaAtiva(id)
                    }
                    className="gallery-filter"
                  >
                    {label}
                  </button>
                ),
              )}
            </div>

            <p
              className="gallery-count"
              role="status"
              aria-live="polite"
            >
              {String(
                imagensDisponiveis.length,
              ).padStart(2, '0')}{' '}
              fotografias
            </p>
          </Reveal>

          {/* FOTOS */}

          {!temImagens ? (
            <div className="gallery-empty">
              <p className="body-copy">
                Não há imagens disponíveis nesta
                categoria.
              </p>

              <p className="body-copy">
                Volte em breve para conferir novos
                momentos.
              </p>
            </div>
          ) : (
            <Reveal
              key={categoriaAtiva}
              className="gallery-grid"
              stagger={0.06}
              y={36}
            >
              {imagensDisponiveis.map(
                (imagem, index) => (
                  <button
                    key={imagem.id}
                    className="gallery-item"
                    onClick={event => {
                      fotoAcionadoraRef.current =
                        event.currentTarget

                      setImagemAberta(imagem.id)
                    }}
                    aria-label={`Ver foto: ${imagem.alt}`}
                  >
                    <span className="photo-frame block">
                      <VenueImage
                        src={imagem.src}
                        alt={imagem.alt}
                        sizes="
                          (min-width: 1200px) 55vw,
                          (min-width: 768px) 60vw,
                          100vw
                        "
                      />

                      <span
                        className="gallery-zoom"
                        aria-hidden="true"
                      >
                        <ArrowUpRight />
                      </span>
                    </span>

                    <span className="photo-caption">
                      <span>
                        {imagem.alt}
                      </span>

                      <span aria-hidden="true">
                        {String(index + 1).padStart(
                          2,
                          '0',
                        )}
                      </span>
                    </span>
                  </button>
                ),
              )}
            </Reveal>
          )}
        </div>
      </section>

      {/* CTA */}

      <CtaWhatsapp
        eyebrow="Seu momento"
        description="Cada celebração começa com uma ideia. Conte-nos como você imagina a sua."
      >
        Sua história pode ser{' '}
        <em className="block">a próxima.</em>
      </CtaWhatsapp>

      {/* LIGHTBOX — mantido por enquanto */}

      {imagemAtual && (
        <dialog
          ref={lightboxRef}
          className="
            fixed inset-0 m-0
            h-dvh w-screen
            max-h-none max-w-none
            border-0 bg-transparent
            p-4
            open:flex
            items-center justify-center
            backdrop:bg-black/95
          "
          aria-label="Visualizar foto"
          onCancel={event => {
            event.preventDefault()
            setImagemAberta(null)
          }}
          onClick={event => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setImagemAberta(null)
            }
          }}
        >
          <button
            onClick={() =>
              setImagemAberta(null)
            }
            aria-label="Fechar foto"
            className="
              absolute right-4 top-4
              flex min-h-11 min-w-11
              items-center justify-center
              text-branco
              transition-colors
              hover:text-primaria
            "
          >
            <X
              size={28}
              aria-hidden="true"
            />
          </button>

          <figure className="pointer-events-none max-w-full">
            <img
              src={imagemAtual.src}
              alt={imagemAtual.alt}
              className="max-h-[80dvh] max-w-full object-contain"
              decoding="async"
            />

            <figcaption className="mt-4 text-center text-xs text-branco/80">
              {imagemAtual.alt}
            </figcaption>
          </figure>
        </dialog>
      )}
    </>
  )
}