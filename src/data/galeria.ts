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
  { id: 1, src: '', alt: '[FOTO DO SALÃO PRINCIPAL]', categoria: 'espaco' },
  { id: 2, src: '', alt: '[FOTO DA PISTA DE LED]', categoria: 'espaco' },
  { id: 3, src: '', alt: '[FOTO DO BAR]', categoria: 'espaco' },
  { id: 4, src: '', alt: '[FOTO DE FESTA DE ANIVERSÁRIO]', categoria: 'eventos' },
  { id: 5, src: '', alt: '[FOTO DE CASAMENTO]', categoria: 'eventos' },
  { id: 6, src: '', alt: '[FOTO DE CONFRATERNIZAÇÃO]', categoria: 'eventos' },
  { id: 7, src: '', alt: '[FOTO DE DECORAÇÃO TEMÁTICA]', categoria: 'decoracao' },
  { id: 8, src: '', alt: '[FOTO DE MESA DE DOCES]', categoria: 'decoracao' },
  { id: 9, src: '', alt: '[FOTO DO TOTEM EM USO]', categoria: 'totem' },
  { id: 10, src: '', alt: '[FOTO DE CONVIDADOS NO TOTEM]', categoria: 'totem' },
]