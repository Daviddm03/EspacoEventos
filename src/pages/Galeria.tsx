import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { imagensGaleria, categoriasGaleria } from '../data/galeria'
import type { CategoriaGaleria } from '../data/galeria'

export default function Galeria() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaGaleria>('todos')
  const [imagemAberta, setImagemAberta] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDialogElement>(null)
  const fotoAcionadoraRef = useRef<HTMLButtonElement | null>(null)

  const imagensFiltradas = categoriaAtiva === 'todos'
    ? imagensGaleria
    : imagensGaleria.filter(img => img.categoria === categoriaAtiva)

  const imagemAtual = imagemAberta !== null
    ? imagensGaleria.find(img => img.id === imagemAberta)
    : null

  const temImagens = imagensFiltradas.some(img => img.src !== '')

  useEffect(() => {
    const dialog = lightboxRef.current
    if (!imagemAtual || !dialog) return

    const acionador = fotoAcionadoraRef.current
    const overflowAnterior = document.body.style.overflow
    const paddingAnterior = document.body.style.paddingRight
    const larguraScrollbar = window.innerWidth - document.documentElement.clientWidth
    const paddingAtual = window.getComputedStyle(document.body).paddingRight

    document.body.style.overflow = 'hidden'
    if (larguraScrollbar > 0) {
      document.body.style.paddingRight = `calc(${paddingAtual} + ${larguraScrollbar}px)`
    }

    // showModal torna o restante da página inerte e contém o foco no dialog.
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
    dialog.showModal()

    return () => {
      dialog.close()
      document.body.style.overflow = overflowAnterior
      document.body.style.paddingRight = paddingAnterior
      if (acionador?.isConnected) acionador.focus({ preventScroll: true })
    }
  }, [imagemAtual])

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
        <div className="flex flex-wrap gap-2 justify-center mb-12" role="group" aria-label="Filtrar galeria">
          {categoriasGaleria.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={categoriaAtiva === id}
              onClick={() => setCategoriaAtiva(id)}
              className={`relative min-h-11 px-4 py-2 text-sm font-medium transition-colors ${
                categoriaAtiva === id
                  ? 'text-primaria-texto'
                  : 'text-texto-suave hover:text-primaria-texto'
              }`}>
              {label}
              {categoriaAtiva === id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-px bg-primaria-texto" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        {!temImagens ? (
          <div className="text-center py-20 border border-dashed border-texto-suave/20 rounded-2xl">
            <p className="text-texto-suave text-sm">
              Não há imagens disponíveis nesta categoria.
            </p>
            <p className="text-texto-suave text-xs mt-2">
              Volte em breve para conferir novos momentos.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagensFiltradas.filter(img => img.src !== '').map((img) => (
              <button
                key={img.id}
                onClick={(event) => {
                  fotoAcionadoraRef.current = event.currentTarget
                  setImagemAberta(img.id)
                }}
                className="relative aspect-square overflow-hidden rounded-xl group focus-visible:outline focus-visible:outline-primaria"
                aria-label={`Ver foto: ${img.alt}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
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
        <dialog
          ref={lightboxRef}
          className="fixed inset-0 m-0 h-dvh w-screen max-h-none max-w-none border-0 bg-transparent p-4 open:flex items-center justify-center backdrop:bg-black/90"
          aria-label="Visualizar foto"
          onCancel={(event) => {
            event.preventDefault()
            setImagemAberta(null)
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setImagemAberta(null)
          }}>
          <button
            onClick={() => setImagemAberta(null)}
            autoFocus
            aria-label="Fechar foto"
            className="absolute top-4 right-4 text-branco hover:text-primaria transition-colors p-2">
            <X size={32} aria-hidden="true" />
          </button>
          <img
            src={imagemAtual.src}
            alt={imagemAtual.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            decoding="async"
          />
        </dialog>
      )}
    </div>
  )
}