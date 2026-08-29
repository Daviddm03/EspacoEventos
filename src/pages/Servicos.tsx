import { MessageCircle } from 'lucide-react'
import { servicos } from '../data/servicos'
import { WHATSAPP_URL } from '../lib/constants'

export default function Servicos() {
  return (
    <div className="bg-fundo">

      <div className="bg-escuro py-20 px-6 text-center">
        <h1 className="font-titulo text-5xl md:text-6xl text-branco">
          Nossos <span className="text-primaria">Serviços</span>
        </h1>
        <p className="text-texto-suave mt-4 text-lg max-w-xl mx-auto">
          Tudo que você precisa para uma festa perfeita em um só lugar.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-20">
        {servicos.map((servico, index) => (
          <div
            key={servico.id}
            className={`flex flex-col md:flex-row gap-10 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}>

            <div className="flex-none w-full md:w-64 h-64 bg-primaria/10 rounded-3xl flex items-center justify-center">
              <servico.icone size={80} className="text-primaria" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <h2 className="font-titulo text-3xl text-escuro">{servico.titulo}</h2>
              <p className="text-texto-suave leading-relaxed">{servico.descricao}</p>
              <ul className="flex flex-col gap-2 mt-2" aria-label={`Itens de ${servico.titulo}`}>
                {servico.itens.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-texto-suave text-sm">
                    <span className="w-2 h-2 rounded-full bg-primaria flex-none" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      <div className="bg-escuro py-16 px-6 text-center">
        <h3 className="font-titulo text-3xl text-branco mb-6">
          Ficou interessado?
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
      </div>

    </div>
  )
}