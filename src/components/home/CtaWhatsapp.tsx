import { WHATSAPP_URL } from '../../lib/constants'

export default function CtaWhatsapp() {
  return (
    <section className="bg-escuro py-20 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold">
          Vamos celebrar
        </p>
        <h2 className="font-titulo text-4xl md:text-5xl lg:text-6xl text-branco leading-tight">
          Pronto para fazer uma <span className="block text-primaria italic">festa incrível?</span>
        </h2>
        <div className="w-12 h-px bg-primaria" />
        <p className="text-texto-suave text-lg max-w-xl">
          Entre em contato agora pelo WhatsApp e receba um orçamento personalizado para o seu evento.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primaria text-branco px-10 py-4 rounded-full text-lg font-semibold hover:bg-primaria-escura hover:-translate-y-0.5 transition-all duration-300 mt-2"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  )
}