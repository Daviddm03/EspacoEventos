import { UtensilsCrossed, Beer, Baby, Camera, Disc3, PartyPopper } from 'lucide-react'
import { MessageCircle } from 'lucide-react'

const servicos = [
  {
    icone: PartyPopper,
    titulo: 'Tipos de Festa',
    descricao: 'Realizamos eventos de todos os tipos e tamanhos. Aniversários infantis, festas de 15 anos, casamentos, formaturas, confraternizações de empresa e muito mais. Nossa estrutura se adapta ao seu evento para que tudo saia perfeito.',
    itens: ['Aniversários', 'Casamentos', 'Formaturas', 'Confraternizações', 'Festas Infantis'],
  },
  {
    icone: Beer,
    titulo: 'Bar Completo',
    descricao: 'Nosso bar é totalmente equipado com as melhores bebidas e drinks. Contamos com barman experiente para preparar coquetéis personalizados para o seu evento.',
    itens: ['Drinks e Coquetéis', 'Cervejas e Vinhos', 'Bebidas sem álcool', 'Barman profissional'],
  },
  {
    icone: Camera,
    titulo: 'Totem de Fotos',
    descricao: 'Nossa atração mais amada! O totem interativo permite que os convidados tirem fotos divertidas com molduras personalizadas e recebam na hora via QR Code.',
    itens: ['Molduras personalizadas', 'Envio via QR Code', 'Galeria online', 'Impressão na hora'],
  },
  {
    icone: Disc3,
    titulo: 'Pista de LED',
    descricao: 'A pista de dança com iluminação LED transforma qualquer festa em uma experiência inesquecível. Efeitos de luz sincronizados com a música para animar todos os convidados.',
    itens: ['Iluminação colorida', 'Efeitos sincronizados', 'DJ incluso opcional', 'Estrutura completa'],
  },
  {
    icone: Baby,
    titulo: 'Espaço Kids',
    descricao: 'As crianças merecem se divertir com segurança! Nossa área kids conta com brinquedos supervisionados para que os pequenos se divirtam enquanto os adultos aproveitam a festa.',
    itens: ['Pula-pula', 'Escorregador', 'Mesa de atividades', 'Monitor responsável'],
  },
  {
    icone: UtensilsCrossed,
    titulo: 'Gastronomia',
    descricao: 'Cardápio variado e saboroso para agradar todos os paladares. Trabalhamos com buffet personalizado de acordo com o tipo e tamanho do seu evento.',
    itens: ['Buffet personalizado', 'Salgados e frios', 'Mesa de doces', 'Bolo temático'],
  },
]

export default function Servicos() {
  return (
    <div className="bg-fundo">

      {/* Header da página */}
      <div className="bg-escuro py-20 px-6 text-center">
        <h1 className="font-titulo text-5xl md:text-6xl text-branco">
          Nossos <span className="text-primaria">Serviços</span>
        </h1>
        <p className="text-texto-suave mt-4 text-lg max-w-xl mx-auto">
          Tudo que você precisa para uma festa perfeita em um só lugar.
        </p>
      </div>

      {/* Lista de serviços */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-16">
        {servicos.map((servico, index) => (
          <div
            key={servico.titulo}
            className={`flex flex-col md:flex-row gap-10 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}>

            {/* Ícone lado */}
            <div className="flex-none w-full md:w-64 h-64 bg-primaria/10 rounded-3xl flex items-center justify-center">
              <servico.icone size={80} className="text-primaria" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="font-titulo text-3xl text-escuro">{servico.titulo}</h2>
              <p className="text-texto-suave leading-relaxed">{servico.descricao}</p>
              <ul className="flex flex-col gap-2 mt-2">
                {servico.itens.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-texto-suave text-sm">
                    <span className="w-2 h-2 rounded-full bg-primaria flex-none" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* CTA final */}
    <div className="bg-escuro py-16 px-6 text-center">
      <h3 className="font-titulo text-3xl text-branco mb-4">
        Ficou interessado?
        </h3>
        <a
          href="https://wa.me/5551980114747"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primaria text-branco px-10 py-4 rounded-full text-lg font-semibold hover:opacity-80 transition-opacity">
          <MessageCircle size={22} />
            Falar no WhatsApp
        </a>
    </div>
  </div>
  )
}