import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import instagramIcon from 'bootstrap-icons/icons/instagram.svg'
import { NAVIGATION_LINKS, WHATSAPP_NUMBER, WHATSAPP_URL } from '../lib/constants'
import logo from '../assets/logo2.png'
import Reveal from './home/Reveal'

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className="site-footer">
      <div className="site-container">
        <Reveal key={pathname} className="footer-main" stagger={.08} y={16}>
          <div className="footer-brand">
            <Link to="/" aria-label="Espaço Eventos — página inicial"><img src={logo} alt="Espaço Eventos" loading="lazy" decoding="async" width={511} height={95} /></Link>
            <p>O cenário ideal para transformar cada celebração em um momento único, com elegância, conforto e personalidade.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h2 className="footer-heading">Explore o espaço</h2>
            <div className="footer-links">
              {NAVIGATION_LINKS.map(({ to, label }) => <Link key={to} to={to} aria-current={(to === '/' ? pathname === '/' : pathname.startsWith(to)) ? 'page' : undefined}>{label}</Link>)}
            </div>
          </nav>
          <div>
            <h2 className="footer-heading">Nos encontramos aqui</h2>
            <address className="footer-links not-italic">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><Phone aria-hidden="true" />({WHATSAPP_NUMBER.slice(2, 4)}) {WHATSAPP_NUMBER.slice(4, 9)}-{WHATSAPP_NUMBER.slice(9)}</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Av.+Professor+Oscar+Pereira,+1549,+Porto+Alegre,+RS" target="_blank" rel="noopener noreferrer" aria-label="Ver endereço do Espaço Eventos no Google Maps"><MapPin aria-hidden="true" />Av. Professor Oscar Pereira, 1549, Porto Alegre, RS</a>
              <a href="https://www.instagram.com/espacoeventospoa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Espaço Eventos">
                <span aria-hidden="true" className="h-4 w-4 shrink-0 bg-current" style={{ maskImage: `url("${instagramIcon}")`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
                @espacoeventospoa
              </a>
            </address>
          </div>
        </Reveal>
        {/* Sempre visível, fora de qualquer Reveal ou ScrollTrigger. */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Espaço Eventos. Todos os direitos reservados.</p>
          <p>Feito para celebrar momentos especiais.</p>
        </div>
      </div>
    </footer>
  )
}
