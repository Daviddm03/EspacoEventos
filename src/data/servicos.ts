export interface Servico {
  id: string
  titulo: string
  resumo: string
  descricao: string
  itens: string[]
  imagem?: string
}

export const servicos: Servico[] = [
  {
    id: 'festas',
    titulo: 'Tipos de Festa',
    resumo: 'Aniversários, casamentos, formaturas, confraternizações e muito mais.',
    descricao: '[DESCRIÇÃO COMPLETA DOS TIPOS DE FESTA REALIZADOS NO ESPAÇO]',
    itens: ['Aniversários', 'Casamentos', 'Formaturas', 'Confraternizações', 'Festas Infantis'],
    imagem: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'bar',
    titulo: 'Bar Completo',
    resumo: 'Drinks, bebidas e coquetéis para tornar a festa ainda mais especial.',
    descricao: '[DESCRIÇÃO DO BAR: BEBIDAS DISPONÍVEIS, BARMAN, DIFERENCIAIS]',
    itens: ['Drinks e Coquetéis', 'Cervejas e Vinhos', 'Bebidas sem álcool', 'Barman profissional'],
    imagem: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'totem',
    titulo: 'Totem de Fotos',
    resumo: 'Registre os melhores momentos com nosso totem interativo.',
    descricao: '[DESCRIÇÃO DO TOTEM: COMO FUNCIONA, MOLDURAS, ENVIO VIA QR CODE]',
    itens: ['Molduras personalizadas', 'Envio via QR Code', 'Galeria online', 'Impressão na hora'],
    imagem: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'led',
    titulo: 'Pista de LED',
    resumo: 'Pista de dança com iluminação LED para animar a festa.',
    descricao: '[DESCRIÇÃO DA PISTA DE LED: EFEITOS, TAMANHO, DIFERENCIAIS]',
    itens: ['Iluminação colorida', 'Efeitos sincronizados', 'DJ incluso opcional', 'Estrutura completa'],
    imagem: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'kids',
    titulo: 'Espaço Kids',
    resumo: 'Espaço kids completo para a criançada se divertir com segurança.',
    descricao: '[DESCRIÇÃO DO ESPAÇO KIDS: BRINQUEDOS, SEGURANÇA, MONITORES]',
    itens: ['Pula-pula', 'Escorregador', 'Mesa de atividades', 'Monitor responsável'],
    imagem: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gastronomia',
    titulo: 'Gastronomia',
    resumo: 'Cardápio variado para agradar a todos os convidados com qualidade.',
    descricao: '[DESCRIÇÃO DO CARDÁPIO: BUFFET, SALGADOS, DOCES, PERSONALIZAÇÃO]',
    itens: ['Buffet personalizado', 'Salgados e frios', 'Mesa de doces', 'Bolo temático'],
    imagem: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
  },
]