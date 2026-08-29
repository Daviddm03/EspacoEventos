import { Link } from 'react-router-dom'
import { servicos } from '../../data/servicos'

export default function ServicosResumo() {
  return (
    <section className="bg-fundo py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-titulo text-4xl md:text-5xl text-escuro">
            Tudo para sua <span className="text-primaria">festa perfeita</span>
          </h2>
          <p className="text-texto-suave mt-4 text-lg max-w-xl mx-auto">
            O Espaço Eventos reúne tudo que você precisa em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="bg-branco rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 group">
              <div className="w-14 h-14 bg-primaria/10 rounded-xl flex items-center justify-center group-hover:bg-primaria transition-colors">
                <servico.icone size={28} className="text-primaria group-hover:text-branco transition-colors" aria-hidden="true" />
              </div>
              <h3 className="font-titulo text-xl text-escuro">{servico.titulo}</h3>
              <p className="text-texto-suave text-sm leading-relaxed">{servico.resumo}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/servicos"
            className="inline-block border-2 border-primaria text-primaria px-8 py-3 rounded-full font-medium hover:bg-primaria hover:text-branco transition-colors text-sm">
            Ver todos os serviços
          </Link>
        </div>

      </div>
    </section>
  )
}