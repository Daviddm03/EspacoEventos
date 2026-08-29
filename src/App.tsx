import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Totem from './pages/Totem'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
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