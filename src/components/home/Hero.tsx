import { useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'

import { Link } from 'react-router-dom'

import HeroVideo from './HeroVideo'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const hero = heroRef.current

    if (!hero) return

    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
  const eyebrow = hero.querySelector('[data-hero="eyebrow"]')
  const titlePrimary = hero.querySelector('[data-hero="title-primary"]')
  const titleAccent = hero.querySelector('[data-hero="title-accent"]')
  const description = hero.querySelector('[data-hero="description"]')
  const primaryCta = hero.querySelector('[data-hero="cta-primary"]')
  const secondaryCta = hero.querySelector('[data-hero="cta-secondary"]')
  const scroll = hero.querySelector('[data-hero="scroll"]')

  const timeline = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'power3.out',
    },
  })

  timeline
    .fromTo(
      eyebrow,
      {
        opacity: 0,
        y: 12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
      },
      0.1,
    )

    .fromTo(
      titlePrimary,
      {
        opacity: 0,
        y: 32,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power4.out',
      },
      0.2,
    )

    .fromTo(
      titleAccent,
      {
        opacity: 0,
        y: 36,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power4.out',
      },
      0.32,
    )

    .fromTo(
      description,
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
      },
      0.5,
    )

    .fromTo(
      [primaryCta, secondaryCta],
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
      },
      0.62,
    )

    .fromTo(
      scroll,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      0.88,
    )

  const trigger = ScrollTrigger.create({
    trigger: hero,

    start: 'top 80%',
    end: 'bottom 20%',

    onEnter: () => {
      timeline.restart()
    },

    onEnterBack: () => {
      timeline.restart()
    },

    onLeave: () => {
      timeline.pause(0)
    },

    onLeaveBack: () => {
      timeline.pause(0)
    },
  })

  const showFocusedContent = () => {
    timeline.progress(1)
  }

  hero.addEventListener('focusin', showFocusedContent)

  return () => {
    hero.removeEventListener('focusin', showFocusedContent)
    trigger.kill()
    timeline.kill()
  }
}, hero)

    return () => {
      media.revert()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero-section relative overflow-hidden bg-escuro"
      aria-label="Espaço Eventos"
    >
      {/* Vídeo */}
      <HeroVideo />

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

          {/* Eyebrow */}
          <div
            data-hero="eyebrow"
            className="hero-eyebrow mb-6 flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primaria" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-branco/70 md:text-xs">
              Espaço Eventos
            </span>
          </div>

          {/* Título */}
          <h1 className="font-titulo text-[3.4rem] leading-[0.95] tracking-[-0.02em] text-branco sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span
              data-hero="title-primary"
              className="block"
            >
              Celebre os momentos
            </span>

            <span
              data-hero="title-accent"
              className="mt-2 block italic text-primaria"
            >
              que importam
            </span>
          </h1>

          {/* Descrição */}
          <p
            data-hero="description"
            className="hero-description mt-6 max-w-lg text-sm leading-relaxed text-branco/75 md:text-base"
          >
            Um espaço pensado para transformar momentos especiais em
            memórias inesquecíveis.
          </p>

          {/* CTAs */}
          <div className="hero-actions mt-8 flex flex-wrap items-center gap-3">
            <a
              data-hero="cta-primary"
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center bg-primaria px-7 text-[10px] font-bold uppercase tracking-[0.2em] text-escuro transition-transform duration-300 hover:-translate-y-1 md:text-xs"
            >
              Reserve sua data
            </a>

            <Link
              data-hero="cta-secondary"
              to="/galeria"
              className="group inline-flex min-h-12 items-center justify-center gap-4 border border-branco/30 bg-black/20 px-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-branco backdrop-blur-sm transition-colors duration-300 hover:border-branco/60 hover:bg-branco/10 md:text-xs"
            >
              Ver galeria

              <span
                className="transition-transform duration-300 group-hover:translate-y-1"
                aria-hidden="true"
              >
                ↓
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        data-hero="scroll"
        className="hero-scroll absolute bottom-16 right-8 z-10 hidden flex-col items-center gap-3 lg:flex xl:right-12"
        aria-hidden="true"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-branco/50 [writing-mode:vertical-rl]">
          Scroll
        </span>

        <span className="h-10 w-px bg-branco/30" />
      </div>
    </section>
  )
}