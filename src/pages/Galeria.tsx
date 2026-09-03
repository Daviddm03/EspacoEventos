import { useState } from 'react'
import { X } from 'lucide-react'
import { imagensGaleria, categoriasGaleria } from '../data/galeria'
import type { CategoriaGaleria } from '../data/galeria'

export default function Galeria() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaGaleria>('todos')
  const [imagemAberta, setImagemAberta] = useState<number | null>(null)

  const imagensFiltradas = categoriaAtiva === 'todos'
    ? imagensGaleria
    : imagensGaleria.filter(img => img.categoria === categoriaAtiva)

  const imagemAtual = imagemAberta !== null
    ? imagensGaleria.find(img => img.id === imagemAberta)
    : null

  const temImagens = imagensFiltradas.some(img => img.src !== '')

  return (
    <div className="bg-fundo min-h-screen">

      {/* Header */}
      <div className="bg-escuro py-20 px-6 text-center">
        <p className="text-primaria uppercase tracking-[0.3em] text-xs font-semibold mb-5">
          Momentos especiais
        </p>
        <h1 className="font-titulo text-5xl md:text-6xl lg:text-7xl text-branco leading-tight">
          Nossa <span className=" text-primaria italic"> Galeria </span>
        </h1>
        <div className="w-12 h-px bg-primaria mx-auto my-7" />
        <p className="text-branco/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Momentos reais celebrados no Espaço Eventos.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="Filtrar galeria">
          {categoriasGaleria.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={categoriaAtiva === id}
              onClick={() => setCategoriaAtiva(id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                categoriaAtiva === id
                  ? 'text-primaria'
                  : 'text-texto-suave hover:text-primaria'
              }`}>
              {label}
              {categoriaAtiva === id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-px bg-primaria" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        {!temImagens ? (
          <div className="text-center py-20 border border-dashed border-texto-suave/20 rounded-2xl">
            <p className="text-texto-suave text-sm">
              [IMAGENS DA GALERIA SERÃO ADICIONADAS AQUI]
            </p>
            <p className="text-texto-suave/50 text-xs mt-2">
              Adicione as imagens em <code className="font-mono">src/data/galeria.ts</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagensFiltradas.filter(img => img.src !== '').map((img) => (
              <button
                key={img.id}
                onClick={() => setImagemAberta(img.id)}
                className="relative aspect-square overflow-hidden rounded-xl group focus-visible:outline focus-visible:outline-primaria"
                aria-label={`Ver foto: ${img.alt}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" aria-hidden="true"/>
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                    <span className="text-branco text-xs uppercase tracking-[0.2em]">
                      Ver imagem
                    </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {imagemAtual && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizar foto"
          onClick={() => setImagemAberta(null)}>
          <button
            onClick={() => setImagemAberta(null)}
            aria-label="Fechar"
            className="absolute top-4 right-4 text-branco hover:text-primaria transition-colors p-2">
            <X size={32} />
          </button>
          <img
            src={imagemAtual.src}
            alt={imagemAtual.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  )
}