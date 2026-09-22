import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  const previousPathname = useRef(pathname)

  // https://reactrouter.com/7.16.0/api/hooks/useLocation
  useLayoutEffect(() => {
    const changedPage = previousPathname.current !== pathname
    previousPathname.current = pathname
    if (changedPage && navigationType !== 'POP' && !hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.getElementById('conteudo-principal')?.focus({ preventScroll: true })
    }
  }, [pathname, hash, navigationType])

  return null
}
