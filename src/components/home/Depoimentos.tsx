import { Star } from 'lucide-react'
import { depoimentos } from '../../data/depoimentos'

export default function Depoimentos() {
  const temDepoimentos = depoimentos.some(d => !d.texto.startsWith('['))

  return (
    <section className="bg-fundo-alt py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Experiências reais
          </p>

          <h2 className="font-titulo text-4xl md:text-5xl lg:text-6xl text-escuro leading-tight">
            Momentos que ficam
            <span className="block text-primaria italic">
              na memória
            </span>
          </h2>

          <div className="w-12 h-px bg-primaria mx-auto my-7" />

          <p className="text-texto-suave text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Cada celebração tem uma história. Em breve, você poderá conhecer
            as experiências de quem escolheu o Espaço Eventos.
          </p>
        </div>

        {!temDepoimentos ? (
          <div className="max-w-2xl mx-auto text-center py-8">
            <p className="font-titulo text-2xl md:text-3xl text-escuro italic">
              "Cada celebração deixa uma história para contar."
            </p>

            <p className="text-texto-suave text-sm mt-4">
              Em breve, compartilharemos aqui as experiências dos nossos clientes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((d) => (
              <div key={d.id} className="group bg-branco rounded-xl p-8 md:p-10 border border-escuro/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="flex gap-1 mb-6" aria-label={`${d.estrelas} estrelas`}>
                  {Array.from({ length: d.estrelas }).map((_, i) => (
                    <Star key={i} size={15} className="text-primaria fill-primaria" aria-hidden="true" />
                  ))}
                </div>
                <p className="font-titulo text-xl md:text-2xl text-escuro leading-relaxed flex-1">"{d.texto}"</p>
                <div className="border-t border-texto-suave/10 pt-4">
                  <p className="font-medium text-escuro text-sm tracking-wide">{d.nome}</p>
                  <p className="text-texto-suave text-xs">{d.festa}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}