import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
import Galeria from '../src/pages/Galeria'
import Servicos from '../src/pages/Servicos'
import Sobre from '../src/pages/Sobre'
import Totem from '../src/pages/Totem'

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