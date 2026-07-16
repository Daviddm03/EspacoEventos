import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    imagem: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1400',
    titulo: 'Celebre os momentos',
    subtitulo: 'que importam',
  },
  {
    id: 2,
    imagem: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400',
    titulo: 'Espaço completo',
    subtitulo: 'para sua família',
  },
  {
    id: 3,
    imagem: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400',
    titulo: 'Momentos únicos',
    subtitulo: 'para toda a vida',
  },
]

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])
  const [slideAtual, setSlideAtual] = useState(0)

  const anterior = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const proximo = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setSlideAtual(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="relative h-[90vh] overflow-hidden">

      {/* Carrossel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-none w-full h-full relative">
              <img
                src={slide.imagem}
                alt={slide.titulo}
                className="w-full h-full object-cover"
              />
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Texto sobre a imagem */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="font-titulo text-5xl md:text-7xl text-branco leading-tight">
                  {slide.titulo}
                </h1>
                <p className="font-titulo text-3xl md:text-5xl text-primaria mt-2">
                  {slide.subtitulo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões anterior/próximo */}
      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-branco p-2 rounded-full transition-colors">
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={proximo}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-branco p-2 rounded-full transition-colors">
        <ChevronRight size={28} />
      </button>

      {/* Dots indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === slideAtual ? 'bg-primaria' : 'bg-branco/50'
            }`}
          />
        ))}
      </div>

    </section>
  )
}