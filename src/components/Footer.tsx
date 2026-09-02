import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone} from 'lucide-react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '../lib/constants'

export default function Footer() {
  const { pathname } = useLocation()

  const isAtivo = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)
  return (
    <footer className="bg-escuro text-branco">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <img
            src="/src/assets/logo2.png"
            alt="Espaço Eventos"
            className="h-12 w-auto object-contain object-left"
          />
          <div className="w-10 h-px bg-primaria my-5" />
          <p className="text-texto-suave text-sm leading-relaxed max-w-sm">
            O cenário ideal para transformar cada celebração em um momento único,
            com elegância, conforto e personalidade.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-primaria uppercase tracking-widest text-xs">
            Navegação
          </h4>
          <Link
            to="/"
            className={`relative w-fit text-[15px] transition-colors ${
              isAtivo('/')
                ? 'text-primaria'
                : 'text-texto-suave hover:text-primaria'
            }`}
          >
            Início
            {isAtivo('/') && (
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primaria" />
            )}
          </Link>
          <Link
            to="/galeria"
            className={`relative w-fit text-[15px] transition-colors ${
              isAtivo('/galeria')
                ? 'text-primaria'
                : 'text-texto-suave hover:text-primaria'
            }`}
          >
            Galeria
            {isAtivo('/galeria') && (
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primaria" />
            )}
          </Link>
          <Link
            to="/servicos"
            className={`relative w-fit text-[15px] transition-colors ${
              isAtivo('/servicos')
                ? 'text-primaria'
                : 'text-texto-suave hover:text-primaria'
            }`}
          >
            Serviços
            {isAtivo('/servicos') && (
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primaria" />
            )}
          </Link>
          <Link
            to="/sobre"
            className={`relative w-fit text-[15px] transition-colors ${
              isAtivo('/sobre')
                ? 'text-primaria'
                : 'text-texto-suave hover:text-primaria'
            }`}
          >
            Sobre Nós
            {isAtivo('/sobre') && (
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primaria" />
            )}
          </Link>
        </div>
        <div className="flex flex-col gap-4">
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
            Av. Professor Oscar Pereira, 1549, Porto Alegre, RS
          </span>

          <a
            href="[LINK_DO_INSTAGRAM]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-texto-suave hover:text-primaria transition-colors text-sm"
          >
            <i className="bi bi-instagram"></i>
            @espacoeventospoa
          </a>
        </div>

      </div>

      <div className="border-t border-branco/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-texto-suave text-xs">
            © {new Date().getFullYear()} Espaço Eventos. Todos os direitos reservados.
          </p>

          <p className="text-texto-suave/60 text-xs">
            Feito para celebrar momentos especiais.
          </p>
        </div>
      </div>
    </footer>
  )
}