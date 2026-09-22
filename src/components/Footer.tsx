import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import instagramIcon from 'bootstrap-icons/icons/instagram.svg'
import { NAVIGATION_LINKS, WHATSAPP_NUMBER, WHATSAPP_URL } from '../lib/constants'
import logo from '../assets/logo2.png'

export default function Footer() {
  const { pathname } = useLocation()

  const isAtivo = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)
  return (
    <footer className="bg-escuro text-branco">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <img
            src={logo}
            alt="Espaço Eventos"
            loading="lazy"
            decoding="async"
            width={511}
            height={95}
            className="h-12 w-auto object-contain object-left"
          />
          <div className="w-10 h-px bg-primaria my-5" />
          <p className="text-branco/70 text-sm leading-relaxed max-w-sm">
            O cenário ideal para transformar cada celebração em um momento único,
            com elegância, conforto e personalidade.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-primaria uppercase tracking-widest text-xs">
            Navegação
          </h4>
          {NAVIGATION_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative w-fit text-[15px] transition-colors ${
                isAtivo(to)
                  ? 'text-primaria'
                  : 'text-branco/70 hover:text-primaria'
              }`}
              aria-current={isAtivo(to) ? 'page' : undefined}
            >
              {label}
              {isAtivo(to) && (
                <span className="absolute -bottom-2 left-0 w-8 h-px bg-primaria" />
              )}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-primaria uppercase tracking-widest text-xs">
            Contato
          </h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-branco/70 hover:text-primaria transition-colors text-sm"
          >
            <Phone size={15} aria-hidden="true" />
            ({WHATSAPP_NUMBER.slice(2, 4)}) {WHATSAPP_NUMBER.slice(4, 9)}-{WHATSAPP_NUMBER.slice(9)}
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Professor+Oscar+Pereira,+1549,+Porto+Alegre,+RS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-branco/70 hover:text-primaria transition-colors text-sm"
            aria-label="Ver endereço do Espaço Eventos no Google Maps"
          >
            <MapPin size={15} aria-hidden="true" />
            Av. Professor Oscar Pereira, 1549, Porto Alegre, RS
          </a>
          <a
            href="https://www.instagram.com/espacoeventospoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-branco/70 hover:text-primaria transition-colors text-sm"
            aria-label="Instagram do Espaço Eventos"
          >
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 bg-current"
              style={{ maskImage: `url("${instagramIcon}")`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}
            />
            @espacoeventospoa
          </a>
        </div>
      </div>
      <div className="border-t border-branco/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-branco/70 text-xs">
            © {new Date().getFullYear()} Espaço Eventos. Todos os direitos reservados.
          </p>
          <p className="text-branco/70 text-xs">
            Feito para celebrar momentos especiais.
          </p>
        </div>
      </div>
    </footer>
  )
}