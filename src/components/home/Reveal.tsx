import { useEffect, useRef } from 'react'

import type { ReactNode } from 'react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  stagger?: number
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
  stagger = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        /*
         * Quando existe stagger, cada filho recebe
         * seu próprio ScrollTrigger.
         *
         * Isso impede a segunda fileira de animar
         * antes de realmente aparecer na tela.
         */
        if (stagger > 0) {
          const children = Array.from(element.children)

          children.forEach((child, index) => {
            gsap.fromTo(
              child,
              {
                opacity: 0,
                y,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * stagger,
                ease: 'power3.out',

                scrollTrigger: {
                  trigger: child,
                  start: 'top 90%',

                  toggleActions:
                    'play none none reverse',
                },
              },
            )
          })

          return
        }

        /*
         * Reveal normal para elementos sem stagger.
         */
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            ease: 'power3.out',

            scrollTrigger: {
              trigger: element,
              start: 'top 90%',

              toggleActions:
                'play none none reverse',
            },
          },
        )
      }, element)

      /*
       * Acessibilidade:
       * conteúdo focado nunca permanece invisível.
       */
      const showOnFocus = () => {
        gsap.set(element, {
          opacity: 1,
          y: 0,
        })

        gsap.set(element.children, {
          opacity: 1,
          y: 0,
        })
      }

      element.addEventListener('focusin', showOnFocus)

      return () => {
        element.removeEventListener('focusin', showOnFocus)
        context.revert()
      }
    }, element)

    return () => {
      media.revert()
    }
  }, [delay, y, stagger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}