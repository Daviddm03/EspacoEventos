import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// O React assume a metadata; remove o fallback estático para não duplicar tags.
document.head.querySelectorAll('[data-seo-fallback]').forEach(tag => tag.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
