export interface Servico {
  id: string
  titulo: string
  resumo: string
  descricao: string
  itens: string[]
  imagem: string
}

export const servicos: Servico[] = [
  {
    id: 'festas',
    titulo: 'Tipos de Festa',
    resumo: 'Aniversários, casamentos, formaturas, festas infantis e confraternizações.',
    descricao: 'O espaço recebe diferentes tipos de celebração, de aniversários e festas infantis a casamentos, formaturas e confraternizações.',
    itens: ['Aniversários', 'Casamentos', 'Formaturas', 'Confraternizações', 'Festas Infantis'],
    imagem: '/fotos/optimized/Formatura.webp',
  },
  {
    id: 'bar',
    titulo: 'Bar Completo',
    resumo: 'Drinks e coquetéis preparados para acompanhar cada momento da festa.',
    descricao: 'Drinks, coquetéis e frutas selecionadas fazem parte de um serviço de bar preparado especialmente para cada evento.',
    itens: ['Drinks e coquetéis', 'Seleção de frutas', 'Preparação própria'],
    imagem: '/fotos/optimized/Bar-foto-principal.webp',
  },
  {
    id: 'totem',
    titulo: 'Totem de Fotos',
    resumo: 'Fotos personalizadas para os convidados registrarem e levarem uma lembrança da festa.',
    descricao: 'Um ponto de fotos interativo durante o evento, com opções para personalizar, compartilhar e levar os registros da festa.',
    itens: ['Molduras personalizadas', 'Envio via QR Code', 'Galeria online', 'Impressão na hora'],
    imagem: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'led',
    titulo: 'Pista de LED',
    resumo: 'Luzes, música e uma pista preparada para colocar todo mundo para dançar.',
    descricao: 'A iluminação colorida e os efeitos em LED compõem a pista de dança. Consulte também a opção de incluir DJ.',
    itens: ['Iluminação colorida', 'Efeitos sincronizados', 'DJ opcional', 'Estrutura completa'],
    imagem: '/fotos/optimized/Pista-led.webp',
  },
  {
    id: 'kids',
    titulo: 'Espaço Kids',
    resumo: 'Um espaço com brinquedos e atividades para os pequenos aproveitarem a festa.',
    descricao: 'Uma área infantil com brinquedos e mesa de atividades, com acompanhamento de um monitor.',
    itens: ['Pula-pula', 'Escorregador', 'Mesa de atividades', 'Monitor responsável'],
    imagem: '/fotos/optimized/Kids-posando.webp',
  },
  {
    id: 'gastronomia',
    titulo: 'Gastronomia',
    resumo: 'Opções de alimentação para completar o seu evento.',
    descricao: 'A gastronomia é preparada no próprio espaço para acompanhar cada evento, com opções de alimentação, salgados e doces.',
    itens: ['Alimentação', 'Salgados', 'Doces'],
    imagem: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
  },
]