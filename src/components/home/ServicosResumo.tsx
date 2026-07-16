import { UtensilsCrossed, Beer, Baby, Camera, Disc3, PartyPopper } from 'lucide-react'

const servicos = [
  {
    icone: PartyPopper,
    titulo: 'Tipos de Festa',
    descricao: 'Aniversários, casamentos, formaturas, confraternizações e muito mais.',
  },
  {
    icone: UtensilsCrossed,
    titulo: 'Comida',
    descricao: 'Cardápio variado para agradar a todos os convidados com qualidade.',
  },
  {
    icone: Beer,
    titulo: 'Bar Completo',
    descricao: 'Drinks, bebidas e coquetéis para tornar a festa ainda mais especial.',
  },
  {
    icone: Camera,
    titulo: 'Totem de Fotos',
    descricao: 'Registre os melhores momentos com nosso totem interativo.',
  },
  {
    icone: Disc3,
    titulo: 'Pista de LED',
    descricao: 'Pista de dança com iluminação LED para animar a festa.',
  },
  {
    icone: Baby,
    titulo: 'Brinquedos',
    descricao: 'Espaço kids completo para a criançada se divertir com segurança.',
  },
]

export default function ServicosResumo() {
  return (
    <section className="bg-fundo py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título da seção */}
        <div className="text-center mb-14">
          <h2 className="font-titulo text-4xl md:text-5xl text-escuro">
            Tudo para sua <span className="text-primaria">festa perfeita</span>
          </h2>
          <p className="text-texto-suave mt-4 text-lg max-w-xl mx-auto">
            O Espaço Eventos reúne tudo que você precisa em um só lugar.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="bg-branco rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 group">
              <div className="w-14 h-14 bg-primaria/10 rounded-xl flex items-center justify-center group-hover:bg-primaria transition-colors">
                <servico.icone size={28} className="text-primaria group-hover:text-branco transition-colors" />
              </div>
              <h3 className="font-titulo text-xl text-escuro">{servico.titulo}</h3>
              <p className="text-texto-suave text-sm leading-relaxed">{servico.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}