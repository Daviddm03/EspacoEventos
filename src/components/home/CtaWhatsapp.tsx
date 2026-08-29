import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../lib/constants'

export default function CtaWhatsapp() {
  return (
    <section className="bg-escuro py-20 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">

        <div className="w-16 h-16 bg-primaria/20 rounded-full flex items-center justify-center" aria-hidden="true">
          <MessageCircle size={32} className="text-primaria" />
        </div>

        <h2 className="font-titulo text-4xl md:text-5xl text-branco leading-tight">
          Pronto para fazer uma <span className="text-primaria">festa incrível?</span>
        </h2>

        <p className="text-texto-suave text-lg max-w-xl">
          Entre em contato agora pelo WhatsApp e receba um orçamento personalizado para o seu evento.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-primaria text-branco px-10 py-4 rounded-full text-lg font-semibold hover:opacity-80 transition-opacity mt-2"
        >
          <MessageCircle size={22} aria-hidden="true" />
          Solicitar Orçamento
        </a>

        <p className="text-texto-suave/60 text-sm">
          Respondemos em até 1 hora em horário comercial.
        </p>

      </div>
    </section>
  )
}