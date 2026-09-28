import SobreVideo from '../components/SobreVideo'
import VenueImage from '../components/VenueImage'
import Reveal from '../components/home/Reveal'
import CtaWhatsapp from '../components/home/CtaWhatsapp'
import { imagensGaleria } from '../data/galeria'

const diferenciais = [
  { titulo: 'Mais de 10 anos', descricao: 'Uma trajetória construída recebendo diferentes tipos de festas e celebrações.' },
  { titulo: 'Gastronomia no espaço', descricao: 'Parte da alimentação dos eventos é preparada no próprio salão, acompanhando de perto cada festa.' },
  { titulo: 'Presença em cada evento', descricao: 'Uma equipe próxima participa da preparação e da realização das festas no dia a dia do espaço.' },
]

export default function Sobre() {
  return (
    <>
      <section
  className="hero-section relative overflow-hidden bg-escuro"
  aria-labelledby="about-title"
>
  <SobreVideo />

  <div
    className="absolute inset-0 bg-black/40"
    aria-hidden="true"
  />

  <div
    className="absolute inset-0 bg-linear-to-r from-black/75 via-black/25 to-black/10"
    aria-hidden="true"
  />

  <div
    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20"
    aria-hidden="true"
  />

  <div className="hero-content relative z-10 mx-auto flex h-full max-w-400 items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24 xl:px-24">
    <div className="max-w-3xl">

      <div className="hero-eyebrow mb-6 flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primaria" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-branco/70 md:text-xs">
          Conheça o espaço
        </span>
      </div>

      <h1
        id="about-title"
        className="font-titulo text-[3.4rem] leading-[0.95] tracking-[-0.02em] text-branco sm:text-6xl md:text-7xl lg:text-[5.5rem]"
      >
        <span className="block">
          Sobre
        </span>

        <span className="mt-2 block italic text-primaria">
          nós.
        </span>
      </h1>

      <p className="hero-description mt-6 max-w-lg text-sm leading-relaxed text-branco/75 md:text-base">
        Conheça um pouco da história por trás do Espaço Eventos.
      </p>

    </div>
  </div>

  <div
    className="hero-scroll absolute bottom-16 right-8 z-10 hidden flex-col items-center gap-3 lg:flex xl:right-12"
    aria-hidden="true"
  >
    <span className="text-[8px] uppercase tracking-[0.3em] text-branco/50 [writing-mode:vertical-rl]">
      Scroll
    </span>

    <span className="h-10 w-px bg-branco/30" />
  </div>
</section>
      <section className="site-container section-space">
        <Reveal className="about-intro" stagger={.1}>
          <div>
            <p className="eyebrow mb-6">Onde estamos</p>
            <h2 className="section-heading">Em Porto Alegre, <em className="block">um espaço para celebrar.</em></h2>
          </div>
          <p className="body-copy">Estamos na Av. Professor Oscar Pereira, 1549, em Porto Alegre. Na galeria, você pode conhecer os ambientes e ver registros de festas realizadas no espaço.</p>
        </Reveal>
        <Reveal><figure className="about-feature">
          <div className="photo-frame about-photo"><VenueImage src={imagensGaleria[0].src} alt="Espaço para eventos" sizes="100vw" /></div>
          <figcaption className="photo-caption"><span>Espaço Eventos</span><span>Porto Alegre · RS</span></figcaption>
        </figure></Reveal>
      </section>
      <section className="bg-fundo-alt about-story-section">
        <div className="site-container about-story">
          <Reveal><div className="photo-frame"><VenueImage src={imagensGaleria[4].src} alt="Celebração no Espaço Eventos" /></div></Reveal>
          <Reveal>
            <p className="eyebrow mb-6">Nossa história</p>
            <h2 className="section-heading mb-8">Mais de 10 anos <em className="block">de celebrações.</em></h2>
            <p className="body-copy">Há mais de uma década, o Espaço Eventos recebe aniversários, casamentos, formaturas e outras comemorações em Porto Alegre.</p>
            <p className="body-copy">Somos um negócio familiar, construído por pessoas que acompanham de perto o dia a dia do salão e participam da preparação de cada evento. Essa presença continua fazendo parte da forma como trabalhamos até hoje.</p>
          </Reveal>
        </div>
      </section>
      <section className="site-container section-space">
        <Reveal>
          <p className="eyebrow mb-6">O nosso jeito de fazer</p>
          <h2 className="section-heading">Uma história construída <em>de perto.</em></h2>
        </Reveal>
        <Reveal className="values-list" stagger={.12} y={32}>
          {diferenciais.map((item, index) => <div key={item.titulo} className="value-row">
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.titulo}</h3>
            <p className="body-copy">{item.descricao}</p>
          </div>)}
        </Reveal>
      </section>
      <CtaWhatsapp description="Conte o que você está planejando e tire suas dúvidas sobre o espaço, os serviços e a disponibilidade." label="Falar no WhatsApp">
        Vamos conversar sobre <em className="block">a sua festa?</em>
      </CtaWhatsapp>
    </>
  )
}
