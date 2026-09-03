import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'
import logo from '../assets/logo2.png'

const links = [
  { to: '/', label: 'Início' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/sobre', label: 'Sobre Nós' },
]

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { pathname } = useLocation()

  const isAtivo = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header className="bg-escuro shadow-md sticky top-0 z-50">
      <div className="w-full px-6 md:px-16 lg:px-20 h-24 flex items-center">
       <Link to="/" className="flex items-center" aria-label="Espaço Eventos — página inicial">
  <img
    src={logo}
    alt="Ícone Espaço Eventos"
    className="h-13 w-auto object-contain"
  />
</Link>

        {/* Desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-10 ml-auto">
          {links.map(({ to, label }) => (
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
            className="bg-primaria text-branco px-7 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-primaria-escura hover:-translate-y-0.5 transition-all duration-300"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-branco p-2 ml-auto"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="lg:hidden bg-escuro px-6 py-6 flex flex-col gap-5 border-t border-branco/10"
        >
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative w-fit transition-colors text-base font-medium py-2 ${
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
            className="bg-primaria text-branco px-6 py-3 rounded-full font-medium text-center tracking-wide hover:bg-primaria-escura hover:-translate-y-0.5 transition-all duration-300 text-sm mt-2"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  )
}