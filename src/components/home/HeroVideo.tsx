import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const preference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    let inView = false
    let disposed = false

    const canAutoplay = () =>
      !disposed && inView && !document.hidden && !preference.matches

    const tryPlay = async () => {
      if (!canAutoplay()) {
        video.pause()
        return
      }

      try {
        await video.play()

        if (!canAutoplay()) {
          video.pause()
          return
        }

        setAutoplayBlocked(false)
      } catch (error) {
        if (
          canAutoplay() &&
          !(error instanceof DOMException && error.name === 'AbortError')
        ) {
          setAutoplayBlocked(true)
        }
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (inView === entry.isIntersecting) return
        inView = entry.isIntersecting
        void tryPlay()
      },
      { threshold: 0.01 },
    )

    observer.observe(video)
    preference.addEventListener('change', tryPlay)
    document.addEventListener('visibilitychange', tryPlay)

    return () => {
      disposed = true
      observer.disconnect()
      preference.removeEventListener('change', tryPlay)
      document.removeEventListener('visibilitychange', tryPlay)
      video.pause()
    }
  }, [])

  const handleManualPlay = async () => {
    const video = videoRef.current

    if (!video) return

    try {
      await video.play()
      setAutoplayBlocked(false)
    } catch {
      // O navegador ainda não permitiu a reprodução.
    }
  }
  

  return (
    <>
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 h-full w-full object-cover"
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

      {autoplayBlocked && (
        <button
          type="button"
          onClick={handleManualPlay}
          className="hero-video-play"
          aria-label="Reproduzir vídeo"
        >
          <Play size={15} fill="currentColor" aria-hidden="true" />
          <span>Reproduzir vídeo</span>
        </button>
      )}
    </>
  )
}