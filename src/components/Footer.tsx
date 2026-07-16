import { Link } from 'react-router-dom'
import { Share2, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-escuro text-branco mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Coluna 1 — Identidade */}
        <div className="flex flex-col gap-3">
          <h3 className="font-titulo text-2xl">
            Espaço <span className="text-primaria">Eventos</span>
          </h3>
          <p className="text-texto-suave text-sm leading-relaxed">
            O lugar perfeito para celebrar os momentos que importam com sua família e amigos.
          </p>
        </div>

        {/* Coluna 2 — Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primaria uppercase tracking-widest text-sm">
            Navegação
          </h4>
          <Link to="/" className="text-texto-suave hover:text-primaria transition-colors text-sm">
            Início
          </Link>
          <Link to="/galeria" className="text-texto-suave hover:text-primaria transition-colors text-sm">
            Galeria
          </Link>
          <Link to="/servicos" className="text-texto-suave hover:text-primaria transition-colors text-sm">
            Servicos
          </Link>
          <Link to="/sobre" className="text-texto-suave hover:text-primaria transition-colors text-sm">
            Sobre
          </Link>
          <Link to="/totem" className="text-texto-suave hover:text-primaria transition-colors text-sm">
            Totem de Fotos
          </Link>
        </div>

        {/* Coluna 3 — Contato */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primaria uppercase tracking-widest text-sm">
            Contato
          </h4>
          <a
            href="https://wa.me/5551980114747"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-texto-suave hover:text-primaria transition-colors text-sm">
            <Phone size={16} />
            (51) 98011-4747
          </a>
          <span className="flex items-center gap-2 text-texto-suave text-sm">
            <MapPin size={16} />
            Porto Alegre, RS
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-texto-suave hover:text-primaria transition-colors text-sm">
            <Share2 size={16} />
            @espacoeventos
          </a>
        </div>

      </div>

      {/* Linha final */}
      <div className="border-t border-texto-suave/20 py-4 text-center text-texto-suave text-xs">
        © {new Date().getFullYear()} Espaço Eventos. Todos os direitos reservados.
      </div>
    </footer>
  )
}