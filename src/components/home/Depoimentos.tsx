import { Star } from 'lucide-react'
import { depoimentos } from '../../data/depoimentos'

export default function Depoimentos() {
  const temDepoimentos = depoimentos.some(d => !d.texto.startsWith('['))

  return (
    <section className="bg-fundo-alt py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-titulo text-4xl md:text-5xl text-escuro">
            O que nossos <span className="text-primaria">clientes dizem</span>
          </h2>
          <p className="text-texto-suave mt-4 text-lg max-w-xl mx-auto">
            Cada festa é única e especial. Veja o que quem já celebrou aqui tem a dizer.
          </p>
        </div>

        {!temDepoimentos ? (
          <p className="text-center text-texto-suave text-sm py-12 border border-dashed border-texto-suave/20 rounded-2xl">
            [DEPOIMENTOS REAIS DOS CLIENTES SERÃO ADICIONADOS AQUI]
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((d) => (
              <div key={d.id} className="bg-branco rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                <div className="flex gap-1" aria-label={`${d.estrelas} estrelas`}>
                  {Array.from({ length: d.estrelas }).map((_, i) => (
                    <Star key={i} size={18} className="text-primaria fill-primaria" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-texto-suave text-sm leading-relaxed flex-1">"{d.texto}"</p>
                <div className="border-t border-texto-suave/10 pt-4">
                  <p className="font-semibold text-escuro text-sm">{d.nome}</p>
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