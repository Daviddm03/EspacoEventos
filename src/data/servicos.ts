import { UtensilsCrossed, Beer, Baby, Camera, Disc3, PartyPopper} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Servico {
  id: string
  icone: LucideIcon
  titulo: string
  resumo: string
  descricao: string
  itens: string[]
}

export const servicos: Servico[] = [
  {
    id: 'festas',
    icone: PartyPopper,
    titulo: 'Tipos de Festa',
    resumo: 'Aniversários, casamentos, formaturas, confraternizações e muito mais.',
    descricao: '[DESCRIÇÃO COMPLETA DOS TIPOS DE FESTA REALIZADOS NO ESPAÇO]',
    itens: ['Aniversários', 'Casamentos', 'Formaturas', 'Confraternizações', 'Festas Infantis'],
  },
  {
    id: 'bar',
    icone: Beer,
    titulo: 'Bar Completo',
    resumo: 'Drinks, bebidas e coquetéis para tornar a festa ainda mais especial.',
    descricao: '[DESCRIÇÃO DO BAR: BEBIDAS DISPONÍVEIS, BARMAN, DIFERENCIAIS]',
    itens: ['Drinks e Coquetéis', 'Cervejas e Vinhos', 'Bebidas sem álcool', 'Barman profissional'],
  },
  {
    id: 'totem',
    icone: Camera,
    titulo: 'Totem de Fotos',
    resumo: 'Registre os melhores momentos com nosso totem interativo.',
    descricao: '[DESCRIÇÃO DO TOTEM: COMO FUNCIONA, MOLDURAS, ENVIO VIA QR CODE]',
    itens: ['Molduras personalizadas', 'Envio via QR Code', 'Galeria online', 'Impressão na hora'],
  },
  {
    id: 'led',
    icone: Disc3,
    titulo: 'Pista de LED',
    resumo: 'Pista de dança com iluminação LED para animar a festa.',
    descricao: '[DESCRIÇÃO DA PISTA DE LED: EFEITOS, TAMANHO, DIFERENCIAIS]',
    itens: ['Iluminação colorida', 'Efeitos sincronizados', 'DJ incluso opcional', 'Estrutura completa'],
  },
  {
    id: 'kids',
    icone: Baby,
    titulo: 'Espaço Kids',
    resumo: 'Espaço kids completo para a criançada se divertir com segurança.',
    descricao: '[DESCRIÇÃO DO ESPAÇO KIDS: BRINQUEDOS, SEGURANÇA, MONITORES]',
    itens: ['Pula-pula', 'Escorregador', 'Mesa de atividades', 'Monitor responsável'],
  },
  {
    id: 'gastronomia',
    icone: UtensilsCrossed,
    titulo: 'Gastronomia',
    resumo: 'Cardápio variado para agradar a todos os convidados com qualidade.',
    descricao: '[DESCRIÇÃO DO CARDÁPIO: BUFFET, SALGADOS, DOCES, PERSONALIZAÇÃO]',
    itens: ['Buffet personalizado', 'Salgados e frios', 'Mesa de doces', 'Bolo temático'],
  },
]