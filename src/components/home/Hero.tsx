import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    src: '',
    alt: '[FOTO PRINCIPAL DO ESPAÇO]',
    titulo: 'Celebre os momentos',
    subtitulo: 'que importam',
  },
  {
    id: 2,
    src: '',
    alt: '[FOTO DE FESTA NO ESPAÇO]',
    titulo: 'Espaço completo',
    subtitulo: 'para sua família',
  },
  {
    id: 3,
    src: '',
    alt: '[FOTO DA PISTA DE LED]',
    titulo: 'Momentos únicos',
    subtitulo: 'para toda a vida',
  },
]

// Cor de fundo para quando a imagem ainda não foi adicionada
const PLACEHOLDER_BG = 'bg-escuro'

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const [slideAtual, setSlideAtual] = useState(0)

  const anterior = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const proximo = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setSlideAtual(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="relative h-[90vh] overflow-hidden" aria-label="Carrossel de imagens">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-none w-full h-full relative">
              {slide.src ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  fetchPriority={slide.id === 1 ? 'high' : 'auto'}
                  loading={slide.id === 1 ? 'eager' : 'lazy'}
                />
              ) : (
                <div className={`w-full h-full ${PLACEHOLDER_BG} flex items-center justify-center`}>
                  <span className="text-branco/20 text-sm font-mono">{slide.alt}</span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

              <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
                <div className="max-w-3xl">

                  <p className="text-primaria uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-5">
                    Espaço Eventos
                  </p>

                  <h1 className="font-titulo text-5xl md:text-7xl lg:text-8xl text-branco leading-[0.95]">
                    {slide.titulo}
                    <span className="block text-primaria mt-2">
                      {slide.subtitulo}
                    </span>
                  </h1>

                  <div className="w-16 h-px bg-primaria mt-8" />

                  <p className="text-branco/80 text-sm md:text-base max-w-md mt-6 leading-relaxed">
                    Um espaço pensado para transformar momentos especiais em memórias inesquecíveis.
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={anterior}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-branco p-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-primaria"
      >
        <ChevronLeft size={28} aria-hidden="true" />
      </button>
      <button
        onClick={proximo}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-branco p-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-primaria"
      >
        <ChevronRight size={28} aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === slideAtual}
            aria-label={`Ir para slide ${i + 1}: ${slide.titulo}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-primaria ${
              i === slideAtual ? 'bg-primaria' : 'bg-branco/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}