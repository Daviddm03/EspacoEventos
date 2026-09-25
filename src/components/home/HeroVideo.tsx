import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const tryPlay = async () => {
      if (
        document.hidden ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return
      }

      try {
        await video.play()
        setAutoplayBlocked(false)
      } catch {
        setAutoplayBlocked(true)
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause()
        return
      }

      void tryPlay()
    }

    void tryPlay()

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange,
    )

    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange,
      )
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

  const [videoReady, setVideoReady] = useState(false)

  return (
    <>
      <video
        ref={videoRef}
        className={`hero-video absolute inset-0 h-full w-full object-cover ${
          videoReady ? 'hero-video--ready' : ''
        }`}
        onCanPlay={() => setVideoReady(true)}
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