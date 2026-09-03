import { WHATSAPP_URL } from '../lib/constants'

export default function Sobre() {
  return (
    <div className="bg-fundo">
      {/* Header */}
      <div className="bg-escuro py-20 px-6 text-center">
        <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
          Conheça o Espaço
        </p>
        <h1 className="font-titulo text-5xl md:text-6xl lg:text-7xl text-branco leading-tight">
          Sobre <span className="text-primaria italic"> Nós </span>
        </h1>
        <div className="w-12 h-px bg-primaria mx-auto my-7" />
        <p className="text-branco/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Um espaço criado para transformar celebrações em momentos inesquecíveis.
        </p>
      </div>

      {/* Introdução */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
          Mais que um espaço
        </p>
        <h2 className="font-titulo text-4xl md:text-5xl lg:text-6xl text-escuro leading-tight">
          Um lugar para criar
          <span className="block text-primaria italic">
            grandes momentos
          </span>
        </h2>
        <div className="w-12 h-px bg-primaria mx-auto my-7" />
        <p className="text-texto-suave text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          O Espaço Eventos foi pensado para ser o cenário perfeito para celebrar
          momentos que merecem ser lembrados. Um ambiente acolhedor e versátil,
          preparado para receber diferentes tipos de eventos com conforto,
          personalidade e atenção a cada detalhe.
        </p>
      </section>
      {/* Foto do espaço */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative w-full h-80 md:h-125 rounded-3xl overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
            alt="Espaço para eventos"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
      </div>
      {/* Nossa história */}
      <section className="bg-fundo-alt py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative h-80 md:h-112.5 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85"
                alt="Celebração no Espaço Eventos"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </div>
          <div>
            <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
              Nossa história
            </p>
            <h2 className="font-titulo text-4xl md:text-5xl text-escuro leading-tight">
              Um espaço criado
              <span className="block text-primaria italic">
                para celebrar
              </span>
            </h2>
            <div className="w-12 h-px bg-primaria my-7" />
            <p className="text-texto-suave leading-relaxed mb-5">
              O Espaço Eventos nasceu do desejo de criar um ambiente onde cada celebração
              pudesse ser vivida de forma especial. Desde o início, nosso propósito foi
              oferecer um espaço acolhedor, elegante e preparado para receber momentos
              importantes ao lado de quem realmente importa.
            </p>
            <p className="text-texto-suave leading-relaxed">
              Ao longo dos anos, o espaço foi evoluindo para acompanhar as necessidades
              de cada evento, reunindo estrutura, conforto e diferentes possibilidades
              de personalização. Hoje, continuamos com o mesmo propósito: transformar
              cada celebração em uma experiência única e inesquecível.
            </p>
          </div>
        </div>
      </section>
      {/* Diferenciais */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            O que nos diferencia
          </p>
          <h2 className="font-titulo text-4xl md:text-5xl lg:text-6xl text-escuro leading-tight">
            Mais que um espaço,
            <span className="block text-primaria italic">
              uma experiência
            </span>
          </h2>
          <div className="w-12 h-px bg-primaria mx-auto my-7" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
              {
                titulo: 'Espaço completo',
                descricao: 'Um ambiente preparado para receber diferentes tipos de celebração, com conforto, estrutura e tudo o que você precisa para aproveitar o momento.',
              },
              {
                titulo: 'Tudo em um só lugar',
                descricao: 'Do ambiente à decoração, reunimos diferentes serviços para tornar a organização do seu evento mais simples e prática.',
              },
              {
                titulo: 'Momentos personalizados',
                descricao: 'Cada celebração merece ser única. Por isso, buscamos entender cada evento e criar uma experiência especial para nossos clientes.',
              },
            ].map((item, index) => (
            <div
              key={item.titulo}
              className="group bg-branco rounded-2xl p-8 min-h-60 border border-escuro/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <span className="text-primaria/60 font-mono text-sm tracking-wider mb-8">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-titulo text-2xl text-escuro">
                {item.titulo}
              </h3>
              <p className="text-texto-suave text-sm leading-relaxed mt-3">
                {item.descricao}
              </p>
              <div className="mt-auto pt-6">
                <div className="h-px bg-escuro/10 group-hover:bg-primaria transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="bg-escuro py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Vamos celebrar
          </p>
          <h3 className="font-titulo text-4xl md:text-5xl lg:text-6xl text-branco leading-tight">
            Pronto para criar
            <span className="block text-primaria italic">
              momentos inesquecíveis?
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
      </section>
    </div>
  )
}