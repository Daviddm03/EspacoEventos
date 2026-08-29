import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

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
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
       <Link to="/" className="flex items-center" aria-label="Espaço Eventos — página inicial">
  <img
    src="/src/assets/logo2.png"
    alt="Ícone Espaço Eventos"
    className="h-12 w-auto object-contain"
  />
</Link>

        {/* Desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:flex gap-10 items-center">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors text-base font-medium ${
                isAtivo(to) ? 'text-primaria' : 'text-branco hover:text-primaria'
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
            className="bg-primaria text-branco px-5 py-2 rounded-full font-medium hover:opacity-80 transition-opacity text-sm"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-branco p-1"
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
          className="md:hidden bg-escuro px-6 pb-6 flex flex-col gap-4 border-t border-branco/10"
        >
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors text-sm font-medium py-1 ${
                isAtivo(to) ? 'text-primaria' : 'text-branco hover:text-primaria'
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
            className="bg-primaria text-branco px-5 py-2 rounded-full font-medium text-center hover:opacity-80 transition-opacity text-sm"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  )
}