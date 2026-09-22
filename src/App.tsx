import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import PageMetadata from './components/PageMetadata'
import Footer from './components/Footer'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Totem from './pages/Totem'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageMetadata />
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:bg-escuro focus:text-branco focus:px-4 focus:py-3"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/totem" element={<Totem />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App