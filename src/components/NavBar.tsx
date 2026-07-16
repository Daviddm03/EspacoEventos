import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-escuro shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-titulo text-2xl text-branco">
          Espaço <span className="text-primaria">Eventos</span>
        </Link>

        {/* Links — desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-branco hover:text-primaria transition-colors">
            Início
          </Link>
          <Link to="/galeria" className="text-branco hover:text-primaria transition-colors">
            Galeria
          </Link>
          <Link to="/servicos" className="text-branco hover:text-primaria transition-colors">
            Servicos
          </Link>
          <Link to="/sobre" className="text-branco hover:text-primaria transition-colors">
            Sobre
          </Link>
          <Link to="/totem" className="text-branco hover:text-primaria transition-colors">
            Totem
          </Link>
          <a
            href="https://wa.me/5551980114747"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primaria text-branco px-5 py-2 rounded-full font-medium hover:bg-primaria-escura transition-colors">
            Orçamento
          </a>
        </nav>

        {/* Botão menu mobile */}
        <button
          className="md:hidden text-branco"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-escuro px-6 pb-6 flex flex-col gap-4">
          <Link to="/" className="text-branco hover:text-primaria transition-colors"
            onClick={() => setMenuAberto(false)}>
            Início
          </Link>
          <Link to="/galeria" className="text-branco hover:text-primaria transition-colors"
            onClick={() => setMenuAberto(false)}>
            Galeria
          </Link>
          <Link to="/servicos" className="text-branco hover:text-primaria transition-colors"
            onClick={() => setMenuAberto(false)}>
            Servicos
          </Link>
          <Link to="/sobre" className="text-branco hover:text-primaria transition-colors"
            onClick={() => setMenuAberto(false)}>
            Sobre
          </Link>
          <Link to="/totem" className="text-branco hover:text-primaria transition-colors"
            onClick={() => setMenuAberto(false)}>
            Totem
          </Link>
          <a
            href="https://wa.me/5551980114747"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primaria text-branco px-5 py-2 rounded-full font-medium text-center hover:bg-primaria-escura transition-colors">
            Orçamento
          </a>
        </div>
      )}
    </header>
  )
}