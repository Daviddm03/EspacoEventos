import { Link } from 'react-router-dom'
import { servicos } from '../../data/servicos'

export default function ServicosResumo() {
  return (
    <section className="bg-fundo py-20 px-6">
      <div className="max-w-6xl mx-auto">

      <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            O que oferecemos
          </p>

          <h2 className="font-titulo text-4xl md:text-5xl lg:text-6xl text-escuro leading-tight">
            Tudo para tornar sua
            <span className="block text-primaria italic">
              celebração inesquecível
            </span>
          </h2>

          <div className="w-12 h-px bg-primaria mx-auto my-7" />

          <p className="text-texto-suave text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Um espaço completo para celebrar momentos especiais,
            pensado para receber você, sua família e seus convidados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico, index) => (
            <div
              key={servico.id}
              className="group bg-branco rounded-2xl p-8 min-h-60 border border-black/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative -mx-8 -mt-8 mb-6 h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={servico.imagem}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-branco/90 text-escuro flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  ↗
                </span>
              </div>
              <span className="text-primaria/70 font-mono text-sm mb-8">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="font-titulo text-2xl text-escuro">
                {servico.titulo}
              </h3>

              <p className="text-texto-suave text-sm leading-relaxed mt-3">
                {servico.resumo}
              </p>

              <div className="mt-auto pt-6">
                <div className="h-px bg-escuro/10 group-hover:bg-primaria transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/servicos"
            className="inline-block border-2 border-primaria text-primaria px-8 py-3 rounded-full font-medium hover:bg-primaria hover:text-branco transition-colors text-sm"
          >
            Ver todos os serviços
          </Link>
        </div>

      </div>
    </section>
  )
}