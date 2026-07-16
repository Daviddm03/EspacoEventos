import { Star } from 'lucide-react'

const depoimentos = [
  {
    id: 1,
    nome: 'Ana Paula Silva',
    festa: 'Aniversário de 15 anos',
    texto: 'O Espaço Eventos superou todas as nossas expectativas! A decoração estava linda, o bar impecável e as crianças adoraram a área kids. Com certeza voltaremos!',
    estrelas: 5,
  },
  {
    id: 2,
    nome: 'Carlos e Fernanda',
    festa: 'Casamento',
    texto: 'Realizamos nosso casamento aqui e foi perfeito. A equipe é super atenciosa, a pista de LED ficou incrível e o totem de fotos foi o sucesso da noite!',
    estrelas: 5,
  },
  {
    id: 3,
    nome: 'Rodrigo Mendes',
    festa: 'Confraternização de Empresa',
    texto: 'Contratamos para nossa confraternização de fim de ano e todo mundo amou. Espaço amplo, bar bem servido e uma estrutura completa. Recomendo demais!',
    estrelas: 5,
  },
]

export default function Depoimentos() {
  return (
    <section className="bg-fundo-alt py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="font-titulo text-4xl md:text-5xl text-escuro">
            O que nossos <span className="text-primaria">clientes dizem</span>
          </h2>
          <p className="text-texto-suave mt-4 text-lg max-w-xl mx-auto">
            Cada festa é única e especial. Veja o que quem já celebrou aqui tem a dizer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((d) => (
            <div
              key={d.id}
              className="bg-branco rounded-2xl p-8 shadow-sm flex flex-col gap-4">

              {/* Estrelas */}
              <div className="flex gap-1">
                {Array.from({ length: d.estrelas }).map((_, i) => (
                  <Star key={i} size={18} className="text-primaria fill-primaria" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-texto-suave text-sm leading-relaxed flex-1">
                "{d.texto}"
              </p>

              {/* Autor */}
              <div className="border-t border-texto-suave/10 pt-4">
                <p className="font-semibold text-escuro text-sm">{d.nome}</p>
                <p className="text-texto-suave text-xs">{d.festa}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}