import { useEffect, useRef, useState } from 'react'

export default function SobreVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [playbackAllowed, setPlaybackAllowed] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setPlaybackAllowed(!preference.matches)
    }

    preference.addEventListener('change', update)

    return () => {
      preference.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let inView = false
    let disposed = false

    const syncPlayback = () => {
      if (playbackAllowed && inView && !document.hidden) {
        void video
          .play()
          .then(() => {
            if (disposed || !inView || document.hidden) {
              video.pause()
            }
          })
          .catch(() => {})

        return
      }

      video.pause()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        syncPlayback()
      },
      { threshold: 0.01 },
    )

    observer.observe(video)

    document.addEventListener('visibilitychange', syncPlayback)

    return () => {
      disposed = true
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncPlayback)
      video.pause()
    }
  }, [playbackAllowed])

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
      <source src="/videos/Video-sobre.mp4" type="video/mp4" />
    </video>
  )
}