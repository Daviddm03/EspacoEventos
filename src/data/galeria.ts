export type CategoriaGaleria = 'todos' | 'espaco' | 'eventos' | 'decoracao' | 'totem'

export interface ImagemGaleria {
  id: number
  src: string
  alt: string
  categoria: CategoriaGaleria
}

export const categoriasGaleria: { id: CategoriaGaleria; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'espaco', label: 'Espaço' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'decoracao', label: 'Decoração' },
  { id: 'totem', label: 'Totem' },
]

export const imagensGaleria: ImagemGaleria[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Salão de eventos',
    categoria: 'espaco',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pista de dança em evento',
    categoria: 'espaco',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bar em espaço de eventos',
    categoria: 'espaco',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Festa de aniversário',
    categoria: 'eventos',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    alt: 'Casamento',
    categoria: 'eventos',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    alt: 'Evento e confraternização',
    categoria: 'eventos',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80',
    alt: 'Decoração de evento',
    categoria: 'decoracao',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mesa de doces',
    categoria: 'decoracao',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Totem em evento',
    categoria: 'totem',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Convidados em evento',
    categoria: 'totem',
  },
]