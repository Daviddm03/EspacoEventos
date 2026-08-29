import Hero from '../components/home/Hero'
import ServicosResumo from '../components/home/ServicosResumo'
import Depoimentos from '../components/home/Depoimentos'
import CtaWhatsapp from '../components/home/ctaWhatsapp'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicosResumo />
      <Depoimentos />
      <CtaWhatsapp />
    </>
  )
}