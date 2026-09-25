import { useEffect, useRef } from 'react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const tryPlay = () => {
      if (
        document.hidden ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        video.pause()
        return
      }

      void video.play().catch(() => {
        // O navegador pode bloquear autoplay.
      })
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause()
      } else {
        tryPlay()
      }
    }

    tryPlay()

    video.addEventListener('canplay', tryPlay)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      video.removeEventListener('canplay', tryPlay)
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange,
      )
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="hero-video absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source
        src="/videos/Video-espaco-eventos.mp4"
        type="video/mp4"
      />
    </video>
  )
}