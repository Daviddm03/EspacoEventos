export type CategoriaGaleria = 'todos' | 'espaco' | 'eventos' | 'decoracao'

export interface ImagemGaleria {
  id: number
  src: string
  alt: string
  categoria: Exclude<CategoriaGaleria, 'todos'>
}

export const categoriasGaleria: { id: CategoriaGaleria; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'espaco', label: 'Espaço' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'decoracao', label: 'Decoração' },
]

export const imagensGaleria: ImagemGaleria[] = [
  {
    id: 1,
    src: '/fotos/optimized/Salão-foto.webp',
    alt: 'Salão de eventos',
    categoria: 'espaco',
  },
  {
    id: 2,
    src: '/fotos/optimized/Pista-dança.webp',
    alt: 'Pista de dança em evento',
    categoria: 'espaco',
  },
  {
    id: 3,
    src: '/fotos/optimized/Bar-foto.webp',
    alt: 'Bar em espaço de eventos',
    categoria: 'espaco',
  },
  {
    id: 4,
    src: '/fotos/optimized/Festa-aniversario.webp',
    alt: 'Festa de aniversário',
    categoria: 'eventos',
  },
  {
    id: 5,
    src: '/fotos/optimized/Casamento.webp',
    alt: 'Casamento',
    categoria: 'eventos',
  },
  {
    id: 6,
    src: '/fotos/optimized/Robo-foto.webp',
    alt: 'Evento e confraternização',
    categoria: 'eventos',
  },
  {
    id: 7,
    src: '/fotos/optimized/Decoração-foto.webp',
    alt: 'Decoração de evento',
    categoria: 'decoracao',
  },
  {
    id: 8,
    src: '/fotos/optimized/Mesa-doce.webp',
    alt: 'Mesa de doces',
    categoria: 'decoracao',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Totem em evento',
    categoria: 'espaco',
  },
  {
    id: 10,
    src: '/fotos/optimized/Convidados-foto.webp',
    alt: 'Convidados em evento',
    categoria: 'espaco',
  },
]

// Seleções por ID mantêm as fotos das seções independentes da ordem da galeria.
export const imagensDestaque = {
  salao: imagensGaleria.find(imagem => imagem.id === 1)!,
  aniversario: imagensGaleria.find(imagem => imagem.id === 4)!,
  casamento: imagensGaleria.find(imagem => imagem.id === 5)!,
}
