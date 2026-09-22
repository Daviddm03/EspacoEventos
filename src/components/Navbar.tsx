import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAVIGATION_LINKS, WHATSAPP_URL } from '../lib/constants'
import logo from '../assets/logo2.png'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { pathname } = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuAberto) return

    const fecharComEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuAberto(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', fecharComEscape)
    return () => document.removeEventListener('keydown', fecharComEscape)
  }, [menuAberto])

  const isAtivo = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header className="bg-escuro shadow-md sticky top-0 z-50">
      <div className="w-full px-6 md:px-16 lg:px-20 h-24 flex items-center">
       <Link to="/" className="flex items-center" aria-label="Espaço Eventos — página inicial" onClick={() => setMenuAberto(false)}>
          <img
            src={logo}
            alt="Ícone Espaço Eventos"
    decoding="async"
    width={511}
    height={95}
            className="h-10 md:h-12 lg:h-13 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-10 ml-auto">
          {NAVIGATION_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative transition-colors text-[15px] tracking-wide font-medium ${
                isAtivo(to) ? 'text-primaria after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-primaria'
    : 'text-branco hover:text-primaria'
              }`}
              aria-current={isAtivo(to) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primaria text-escuro px-7 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-primaria-escura hover:-translate-y-0.5 transition-all duration-300"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={menuButtonRef}
          className="lg:hidden text-branco p-2 ml-auto"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
        >
          {menuAberto ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="lg:hidden bg-escuro px-6 py-6 flex flex-col gap-5 border-t border-branco/10"
        >
          {NAVIGATION_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative w-fit transition-colors text-base font-medium py-2 min-h-11 ${
                isAtivo(to) ? 'text-primaria after:absolute after:-bottom-0.5 after:left-0 after:w-8 after:h-px after:bg-primaria'
    : 'text-branco hover:text-primaria'
              }`}
              aria-current={isAtivo(to) ? 'page' : undefined}
              onClick={() => setMenuAberto(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primaria text-escuro px-6 py-3 rounded-full font-medium text-center tracking-wide hover:bg-primaria-escura hover:-translate-y-0.5 transition-all duration-300 text-sm mt-2"
            onClick={() => setMenuAberto(false)}
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  )
}