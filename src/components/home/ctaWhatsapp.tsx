import { MessageCircle } from 'lucide-react'

export default function CtaWhatsapp() {
  return (
    <section className="bg-escuro py-20 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Ícone */}
        <div className="w-16 h-16 bg-primaria/20 rounded-full flex items-center justify-center">
          <MessageCircle size={32} className="text-primaria" />
        </div>

        {/* Título */}
        <h2 className="font-titulo text-4xl md:text-5xl text-branco leading-tight">
          Pronto para fazer uma <span className="text-primaria">festa incrível?</span>
        </h2>

        {/* Subtítulo */}
        <p className="text-texto-suave text-lg max-w-xl">
          Entre em contato agora pelo WhatsApp e receba um orçamento personalizado para o seu evento.
        </p>

        {/* Botão */}
        <a
          href="https://wa.me/5551980114747?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20evento."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-primaria text-branco px-10 py-4 rounded-full text-lg font-semibold hover:opacity-80 transition-opacity mt-2"
        >
          <MessageCircle size={22} />
          Solicitar Orçamento
        </a>

        {/* Detalhe */}
        <p className="text-texto-suave/60 text-sm">
          Respondemos em até 1 hora em horário comercial.
        </p>

      </div>
    </section>
  )
}