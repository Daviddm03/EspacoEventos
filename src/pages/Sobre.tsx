import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

export default function Sobre() {
  return (
    <div className="bg-fundo">

      {/* Header */}
      <div className="bg-escuro py-20 px-6 text-center">
        <h1 className="font-titulo text-5xl md:text-6xl text-branco">
          Sobre <span className="text-primaria">Nós</span>
        </h1>
        <p className="text-texto-suave mt-4 text-lg max-w-xl mx-auto">
          [TAGLINE DO ESPAÇO EVENTOS]
        </p>
      </div>

      {/* Introdução */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-titulo text-3xl md:text-4xl text-escuro mb-6">
          [TÍTULO DA SEÇÃO DE APRESENTAÇÃO]
        </h2>
        <p className="text-texto-suave leading-relaxed text-lg">
          [DESCRIÇÃO PRINCIPAL DO ESPAÇO EVENTOS: HISTÓRIA, MISSÃO, VALORES E O QUE TORNA O ESPAÇO ESPECIAL]
        </p>
      </section>

      {/* Foto do espaço */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="w-full h-80 md:h-120 bg-escuro/10 rounded-3xl flex items-center justify-center">
          <span className="text-texto-suave/40 text-sm font-mono">[FOTO PRINCIPAL DO ESPAÇO]</span>
        </div>
      </div>

      {/* Nossa história */}
      <section className="bg-fundo-alt py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-titulo text-3xl md:text-4xl text-escuro mb-6">
              Nossa <span className="text-primaria">História</span>
            </h2>
            <p className="text-texto-suave leading-relaxed mb-4">
              [HISTÓRIA DO ESPAÇO: QUANDO FOI FUNDADO, POR QUEM, POR QUÊ]
            </p>
            <p className="text-texto-suave leading-relaxed">
              [TRAJETÓRIA E EVOLUÇÃO DO ESPAÇO AO LONGO DO TEMPO]
            </p>
          </div>
          <div className="w-full h-72 bg-escuro/10 rounded-3xl flex items-center justify-center">
            <span className="text-texto-suave/40 text-sm font-mono">[FOTO DA EQUIPE OU FUNDADORES]</span>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-titulo text-3xl md:text-4xl text-escuro">
            Por que escolher o <span className="text-primaria">Espaço Eventos?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { titulo: '[DIFERENCIAL 1]', descricao: '[DESCRIÇÃO DO DIFERENCIAL 1]' },
            { titulo: '[DIFERENCIAL 2]', descricao: '[DESCRIÇÃO DO DIFERENCIAL 2]' },
            { titulo: '[DIFERENCIAL 3]', descricao: '[DESCRIÇÃO DO DIFERENCIAL 3]' },
          ].map((item) => (
            <div key={item.titulo} className="bg-branco rounded-2xl p-8 shadow-sm">
              <div className="w-3 h-3 rounded-full bg-primaria mb-4" aria-hidden="true" />
              <h3 className="font-titulo text-xl text-escuro mb-3">{item.titulo}</h3>
              <p className="text-texto-suave text-sm leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-escuro py-16 px-6 text-center">
        <h3 className="font-titulo text-3xl text-branco mb-6">
          Vamos celebrar juntos?
        </h3>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primaria text-branco px-10 py-4 rounded-full text-lg font-semibold hover:opacity-80 transition-opacity"
        >
          <MessageCircle size={22} aria-hidden="true" />
          Falar no WhatsApp
        </a>
      </section>

    </div>
  )
}