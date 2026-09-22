import { useEffect, useRef, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const slides = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85',
    alt: 'Salão de eventos',
    titulo: 'Celebre os momentos',
    subtitulo: 'que importam',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=85',
    alt: 'Evento no espaço',
    titulo: 'Espaço completo',
    subtitulo: 'para sua família',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2000&q=85',
    alt: 'Pista de dança em evento',
    titulo: 'Momentos únicos',
    subtitulo: 'para toda a vida',
  },
]

const PLACEHOLDER_BG = 'bg-escuro'

export default function Hero() {
  const [autoplay] = useState(() => Autoplay({
    delay: 5000,
    playOnInit: false,
    stopOnInteraction: true,
  }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])
  const [slideAtual, setSlideAtual] = useState(0)
  const [rotacaoAtiva, setRotacaoAtiva] = useState(true)
  const rotacaoNoToqueRef = useRef<boolean | null>(null)
  const [movimentoReduzido, setMovimentoReduzido] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  const pausar = useCallback(() => {
    autoplay.stop()
    setRotacaoAtiva(false)
  }, [autoplay])

  useEffect(() => {
    const preferencia = window.matchMedia('(prefers-reduced-motion: reduce)')
    const atualizar = () => {
      setMovimentoReduzido(preferencia.matches)
      pausar()
    }
    preferencia.addEventListener('change', atualizar)
    return () => preferencia.removeEventListener('change', atualizar)
  }, [pausar])

  useEffect(() => {
    if (!emblaApi) return
    const selecionar = () => setSlideAtual(emblaApi.selectedScrollSnap())
    const controlarRotacao = () => {
      if (rotacaoAtiva && !movimentoReduzido) autoplay.play()
      else autoplay.stop()
    }
    const reiniciar = () => {
      selecionar()
      // O Embla reinstala seus listeners no reInit; aplica nossa política depois.
      document.removeEventListener('visibilitychange', aoVoltarParaAba)
      document.addEventListener('visibilitychange', aoVoltarParaAba)
      controlarRotacao()
    }
    // Revalida a preferência se ela mudar enquanto a aba estiver oculta.
    const aoVoltarParaAba = () => {
      if (!document.hidden) controlarRotacao()
    }
    document.addEventListener('visibilitychange', aoVoltarParaAba)
    emblaApi.on('select', selecionar)
    emblaApi.on('reInit', reiniciar)
    emblaApi.on('pointerDown', pausar)
    controlarRotacao()
    return () => {
      document.removeEventListener('visibilitychange', aoVoltarParaAba)
      emblaApi.off('select', selecionar)
      emblaApi.off('reInit', reiniciar)
      emblaApi.off('pointerDown', pausar)
      autoplay.stop()
    }
  }, [emblaApi, autoplay, rotacaoAtiva, movimentoReduzido, pausar])

  const anterior = () => {
    pausar()
    emblaApi?.scrollPrev(movimentoReduzido)
  }
  const proximo = () => {
    pausar()
    emblaApi?.scrollNext(movimentoReduzido)
  }

  return (
    <section
      className="relative h-[90vh] overflow-hidden"
      aria-label="Destaques do Espaço Eventos"
      aria-roledescription="carrossel"
      onMouseEnter={pausar}
      onFocusCapture={pausar}
    >
      {/* A rotação só volta por ação explícita, conforme o padrão WAI-ARIA. */}
      {!movimentoReduzido && (
        <button
          type="button"
          onPointerDown={() => { rotacaoNoToqueRef.current = rotacaoAtiva }}
          onPointerCancel={() => { rotacaoNoToqueRef.current = null }}
          onClick={(event) => {
            // O foco pausa antes do click; preserva a intenção inicial do toque.
            const estavaAtiva = event.detail === 0 ? null : rotacaoNoToqueRef.current
            rotacaoNoToqueRef.current = null
            setRotacaoAtiva(ativa => !(estavaAtiva ?? ativa))
          }}
          aria-label={rotacaoAtiva ? 'Pausar carrossel' : 'Iniciar carrossel'}
          className="absolute bottom-2 right-4 z-10 w-11 h-11 flex items-center justify-center bg-black/40 hover:bg-black/60 text-branco rounded-full transition-colors"
        >
          {rotacaoAtiva ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
        </button>
      )}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full" aria-live={rotacaoAtiva && !movimentoReduzido ? 'off' : 'polite'} aria-atomic="false">
          {slides.map((slide, index) => {
            const Heading = index === 0 ? 'h1' : 'h2'
            return (
            <div
              key={slide.id}
              className="flex-none w-full h-full relative"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slides.length}`}
              aria-hidden={index !== slideAtual}
            >
              {slide.src ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  fetchPriority={slide.id === 1 ? 'high' : 'auto'}
                  loading={slide.id === 1 ? 'eager' : 'lazy'}
                  decoding="async"
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
                  <Heading className="font-titulo text-5xl md:text-7xl lg:text-8xl text-branco leading-[0.95]">
                    {slide.titulo}
                    <span className="block text-primaria mt-2">
                      {slide.subtitulo}
                    </span>
                  </Heading>
                  <div className="w-16 h-px bg-primaria mt-8" />
                  <p className="text-branco/80 text-sm md:text-base max-w-md mt-6 leading-relaxed">
                    Um espaço pensado para transformar momentos especiais em memórias inesquecíveis.
                  </p>
                </div>
              </div>
            </div>
            )
          })}
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
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex" role="group" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={i === slideAtual}
            aria-label={`Ir para slide ${i + 1}: ${slide.titulo}`}
            onClick={() => {
              pausar()
              emblaApi?.scrollTo(i, movimentoReduzido)
            }}
            className="w-11 h-11 flex items-center justify-center rounded-full"
          >
            <span aria-hidden="true" className={`w-3 h-3 rounded-full transition-colors ${
              i === slideAtual ? 'bg-primaria' : 'bg-branco/50'
            }`} />
          </button>
        ))}
      </div>
    </section>
  )
}