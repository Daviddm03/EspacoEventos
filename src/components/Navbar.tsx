import { useEffect, useRef, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { Menu, X, ArrowUpRight } from 'lucide-react'

import gsap from 'gsap'

import { NAVIGATION_LINKS, WHATSAPP_URL } from '../lib/constants'

import logo from '../assets/logo2.png'

export default function Navbar() {
  const { pathname } = useLocation()

  return <Navigation pathname={pathname} />
}

function Navigation({ pathname }: { pathname: string }) {
  const [menuAberto, setMenuAberto] = useState(false)
  const [menuMontado, setMenuMontado] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40)

  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const mobileMenuRef = useRef<HTMLElement>(null)
  const mobileLabelRef = useRef<HTMLParagraphElement>(null)
  const mobileLinksRef = useRef<HTMLDivElement>(null)
  const mobileDividerRef = useRef<HTMLDivElement>(null)
  const mobileContactRef = useRef<HTMLDivElement>(null)

  const normalizedPathname =
  pathname === '/' ? '/' : pathname.replace(/\/+$/, '').toLowerCase()

  const hasHero =
    normalizedPathname === '/' ||
    normalizedPathname === '/galeria' ||
    normalizedPathname === '/servicos' ||
    normalizedPathname === '/sobre'

  const transparente = hasHero && !scrolled && !menuAberto

  // Detecta o scroll da página
  useEffect(() => {
    const verificarScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    verificarScroll()

    window.addEventListener('scroll', verificarScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', verificarScroll)
    }
  }, [pathname])

  // Fecha o menu com Escape ou ao mudar para desktop
  useEffect(() => {
    if (!menuAberto) return

    const desktop = window.matchMedia('(min-width: 1024px)')

    const closeOnDesktop = () => {
      if (desktop.matches) {
        setMenuAberto(false)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuAberto(false)
        menuButtonRef.current?.focus()
      }
    }

    desktop.addEventListener('change', closeOnDesktop)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      desktop.removeEventListener('change', closeOnDesktop)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuAberto])

  // Mantém o foco do teclado dentro do menu mobile
useEffect(() => {
  if (!menuAberto) return

  const menu = mobileMenuRef.current
  if (!menu) return

  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')

  const handleTab = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return

    const focusableElements = Array.from(
      menu.querySelectorAll<HTMLElement>(focusableSelector),
    ).filter((element) => !element.hasAttribute('disabled'))

    // O botão de fechar está fora do <nav>, então também faz parte do ciclo.
    const closeButton = menuButtonRef.current

    if (!closeButton || focusableElements.length === 0) return

    const firstElement = closeButton
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
      return
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  document.addEventListener('keydown', handleTab)

  return () => {
    document.removeEventListener('keydown', handleTab)
  }
}, [menuAberto])

  // Trava o scroll enquanto o menu está aberto ou fechando
  useEffect(() => {
    if (!menuMontado) return

    const overflowAnterior = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflowAnterior
    }
  }, [menuMontado])

  // Animação do menu mobile
  useEffect(() => {
    if (!menuMontado) return

    const menu = mobileMenuRef.current
    const label = mobileLabelRef.current
    const linksContainer = mobileLinksRef.current
    const divider = mobileDividerRef.current
    const contact = mobileContactRef.current

    if (!menu || !label || !linksContainer || !divider || !contact) {
      return
    }

    const links = Array.from(linksContainer.children)

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      gsap.set(menu, { yPercent: 0 })
      gsap.set([label, links, divider, contact], {
        opacity: 1,
        y: 0,
        clearProps: 'transform',
      })

      if (!menuAberto) {
        gsap.delayedCall(0, () => {
          setMenuMontado(false)
        })
      }

      return
    }

    const context = gsap.context(() => {
      if (menuAberto) {
        const timeline = gsap.timeline()

        timeline
          .fromTo(
            menu,
            {
              yPercent: -100,
            },
            {
              yPercent: 0,
              duration: 0.65,
              ease: 'power4.inOut',
            },
          )
          .fromTo(
            label,
            {
              opacity: 0,
              y: 12,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: 'power3.out',
            },
            '-=0.25',
          )
          .fromTo(
            links,
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.07,
              ease: 'power3.out',
            },
            '-=0.25',
          )
          .fromTo(
            divider,
            {
              scaleX: 0,
              transformOrigin: 'left center',
            },
            {
              scaleX: 1,
              duration: 0.55,
              ease: 'power3.out',
            },
            '-=0.25',
          )
          .fromTo(
            contact,
            {
              opacity: 0,
              y: 18,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power3.out',
            },
            '-=0.3',
          )
      } else {
        const timeline = gsap.timeline({
          onComplete: () => {
            setMenuMontado(false)
          },
        })

        timeline
          .to([contact, divider, ...links, label], {
            opacity: 0,
            y: -8,
            duration: 0.2,
            stagger: 0.025,
            ease: 'power2.in',
          })
          .to(
            menu,
            {
              yPercent: -100,
              duration: 0.5,
              ease: 'power4.inOut',
            },
            '-=0.05',
          )
      }
    }, menu)

    return () => {
      context.revert()
    }
  }, [menuAberto, menuMontado])

  const abrirFecharMenu = () => {
    if (menuAberto) {
      setMenuAberto(false)
      return
    }

    setMenuMontado(true)
    setMenuAberto(true)
  }

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  const isAtivo = (to: string) =>
  to === '/'
    ? normalizedPathname === '/'
    : normalizedPathname.startsWith(to.toLowerCase())

  return (
    <header
      className={`navbar-shell top-0 z-50 w-full ${
        hasHero ? 'fixed' : 'sticky'
      } ${
        transparente
          ? 'bg-transparent'
          : 'bg-escuro/95 backdrop-blur-md'
      }`}
    >
      <div className="site-container navbar-inner">
        <Link
          to="/"
          aria-label="Espaço Eventos — página inicial"
          onClick={fecharMenu}
        >
          <img
            src={logo}
            alt="Espaço Eventos"
            width={511}
            height={95}
            decoding="async"
            className="navbar-logo"
          />
        </Link>

        {/* Desktop */}
        <nav
          aria-label="Navegação principal"
          className="ml-auto hidden items-center gap-8 lg:flex"
        >
          {NAVIGATION_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={isAtivo(to) ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center text-[13px] font-medium tracking-[0.04em] transition-colors ${
                isAtivo(to)
                  ? 'border-b border-primaria text-primaria'
                  : 'text-branco/85 hover:text-primaria'
              }`}
            >
              {label}
            </Link>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button navbar-budget-button"
          >
            Orçamento
            <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          ref={menuButtonRef}
          className="
            ml-auto flex min-h-11 min-w-11
            items-center justify-center
            text-branco
            lg:hidden
          "
          onClick={abrirFecharMenu}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
        >
          {menuAberto ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuMontado && (
        <nav
          ref={mobileMenuRef}
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="
            fixed inset-0 z-[-1]
            flex h-dvh flex-col
            overflow-y-auto overscroll-contain
            bg-[#0b0c09]
            pt-24
            lg:hidden
          "
        >
          {/* Parte superior */}
          <div className="flex flex-[1.65] flex-col justify-center px-7">
            <p
              ref={mobileLabelRef}
              className="
                mb-8
                text-[9px] font-semibold uppercase
                tracking-[0.32em]
                text-primaria
              "
            >
              Navegação
            </p>

            <div
              ref={mobileLinksRef}
              className="flex flex-col items-start gap-5"
            >
              {NAVIGATION_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  aria-current={isAtivo(to) ? 'page' : undefined}
                  onClick={fecharMenu}
                  className={`
                    group relative
                    font-titulo
                    text-[2.5rem]
                    leading-[1.05]
                    transition-colors duration-300
                    ${
                      isAtivo(to)
                        ? 'text-primaria'
                        : 'text-branco hover:text-primaria'
                    }
                  `}
                >
                  {label}

                  <span
                    aria-hidden="true"
                    className={`
                      absolute -bottom-2 left-0
                      h-px bg-primaria
                      transition-all duration-300
                      ${
                        isAtivo(to)
                          ? 'w-8'
                          : 'w-0 group-hover:w-8'
                      }
                    `}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Divisor */}
          <div
            ref={mobileDividerRef}
            className="mx-7 h-px bg-branco/10"
          />

          {/* Parte inferior */}
          <div
            ref={mobileContactRef}
            className="
              flex flex-1 flex-col justify-between
              bg-[#11120e]
              px-7 pb-7 pt-7
            "
          >
            <div>
              <p
                className="
                  mb-5
                  text-[9px] font-semibold uppercase
                  tracking-[0.32em]
                  text-branco/60
                "
              >
                Fale conosco
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={fecharMenu}
                className="
                  group flex items-center justify-between
                  font-titulo text-[1.6rem]
                  text-branco
                  transition-colors duration-300
                  hover:text-primaria
                "
              >
                Solicitar orçamento

                <ArrowUpRight
                  size={19}
                  aria-hidden="true"
                  className="
                    text-primaria
                    transition-transform duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </a>

              <div className="mt-6 flex items-center gap-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={fecharMenu}
                  className="
                    text-[10px] uppercase
                    tracking-[0.18em]
                    text-branco/55
                    transition-colors duration-300
                    hover:text-primaria
                  "
                >
                  WhatsApp
                </a>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-primaria"
                />

                <span
                  className="
                    text-[10px] uppercase
                    tracking-[0.18em]
                    text-branco/55
                  "
                >
                  Porto Alegre
                </span>
              </div>
            </div>

            <p
              className="
                mt-6
                text-[8px] uppercase
                tracking-[0.24em]
                text-branco/25
              "
            >
              Espaço Eventos
            </p>
          </div>
        </nav>
      )}
    </header>
  )
}