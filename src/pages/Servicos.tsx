import { servicos } from '../data/servicos'
import { WHATSAPP_URL } from '../lib/constants'

export default function Servicos() {
  return (
    <div className="bg-fundo">
    <div className="bg-escuro py-20 px-6 text-center">
      <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
        Tudo para sua celebração
      </p>
      <h1 className="font-titulo text-5xl md:text-6xl lg:text-7xl text-branco leading-tight">
        Nossos <span className=" text-primaria italic"> Serviços </span>
      </h1>
      <div className="w-12 h-px bg-primaria mx-auto my-7" />
      <p className="text-branco/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
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
            <div className="flex-1 w-full">
              <img
                src={servico.imagem}
                alt=""
                className="w-full aspect-4/3 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <span className="text-primaria/60 font-mono text-sm tracking-wider">
                {String(index + 1).padStart(2, '0')}
              </span>
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
      <div className="bg-escuro py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">

          <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Vamos conversar
          </p>

          <h3 className="font-titulo text-4xl md:text-5xl lg:text-6xl text-branco leading-tight">
            Pronto para transformar sua
            <span className="block text-primaria italic">
              próxima celebração?
            </span>
          </h3>

          <div className="w-12 h-px bg-primaria my-7" />

          <p className="text-texto-suave text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Entre em contato e descubra como podemos tornar seu evento ainda mais especial.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primaria text-branco px-10 py-4 rounded-full text-lg font-semibold hover:bg-primaria-escura hover:-translate-y-0.5 transition-all duration-300"
          >
            Falar no WhatsApp
          </a>

        </div>
      </div>
    </div>
  )
}