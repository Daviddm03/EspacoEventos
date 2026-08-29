import { Link } from 'react-router-dom'
import { MapPin, Phone} from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-escuro text-branco">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col gap-3">
          <h3 className="font-titulo text-2xl">
            Espaço <span className="text-primaria">Eventos</span>
          </h3>
          <p className="text-texto-suave text-sm leading-relaxed">
            [DESCRIÇÃO CURTA DO ESPAÇO PARA O RODAPÉ]
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primaria uppercase tracking-widest text-xs">
            Navegação
          </h4>
          <Link to="/" className="text-texto-suave hover:text-primaria transition-colors text-sm">Início</Link>
          <Link to="/galeria" className="text-texto-suave hover:text-primaria transition-colors text-sm">Galeria</Link>
          <Link to="/servicos" className="text-texto-suave hover:text-primaria transition-colors text-sm">Serviços</Link>
          <Link to="/sobre" className="text-texto-suave hover:text-primaria transition-colors text-sm">Sobre Nós</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primaria uppercase tracking-widest text-xs">
            Contato
          </h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-texto-suave hover:text-primaria transition-colors text-sm"
          >
            <Phone size={15} aria-hidden="true" />
            ({WHATSAPP_NUMBER.slice(2, 4)}) {WHATSAPP_NUMBER.slice(4, 9)}-{WHATSAPP_NUMBER.slice(9)}
          </a>

          <span className="flex items-center gap-2 text-texto-suave text-sm">
            <MapPin size={15} aria-hidden="true" />
            [ENDEREÇO DO ESPAÇO]
          </span>

          <a
            href="[LINK_DO_INSTAGRAM]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-texto-suave hover:text-primaria transition-colors text-sm"
          >
            {/*<Instagram size={15} aria-hidden="true" />*/}
            [INSTAGRAM DO ESPAÇO]
          </a>
        </div>

      </div>

      <div className="border-t border-branco/10 py-4 text-center text-texto-suave text-xs">
        © {new Date().getFullYear()} Espaço Eventos. Todos os direitos reservados.
      </div>
    </footer>
  )
}