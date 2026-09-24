import SobreVideo from '../components/SobreVideo'
import VenueImage from '../components/VenueImage'
import Reveal from '../components/home/Reveal'
import CtaWhatsapp from '../components/home/CtaWhatsapp'
import { imagensGaleria } from '../data/galeria'

const diferenciais = [
  { titulo: 'Espaço completo', descricao: 'Um ambiente preparado para receber diferentes tipos de celebração, com conforto, estrutura e tudo o que você precisa para aproveitar o momento.' },
  { titulo: 'Tudo em um só lugar', descricao: 'Do ambiente à decoração, reunimos diferentes serviços para tornar a organização do seu evento mais simples e prática.' },
  { titulo: 'Momentos personalizados', descricao: 'Cada celebração merece ser única. Por isso, buscamos entender cada evento e criar uma experiência especial para nossos clientes.' },
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
        Um espaço criado para transformar celebrações em momentos inesquecíveis.
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
            <p className="eyebrow mb-6">Mais que um espaço</p>
            <h2 className="section-heading">Um lugar para criar <em className="block">grandes momentos.</em></h2>
          </div>
          <p className="body-copy">O Espaço Eventos foi pensado para ser o cenário perfeito para celebrar momentos que merecem ser lembrados. Um ambiente acolhedor e versátil, preparado para receber diferentes tipos de eventos com conforto, personalidade e atenção a cada detalhe.</p>
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
            <h2 className="section-heading mb-8">Um espaço criado <em className="block">para celebrar.</em></h2>
            <p className="body-copy">O Espaço Eventos nasceu do desejo de criar um ambiente onde cada celebração pudesse ser vivida de forma especial. Desde o início, nosso propósito foi oferecer um espaço acolhedor, elegante e preparado para receber momentos importantes ao lado de quem realmente importa.</p>
            <p className="body-copy">Ao longo dos anos, o espaço foi evoluindo para acompanhar as necessidades de cada evento, reunindo estrutura, conforto e diferentes possibilidades de personalização. Hoje, continuamos com o mesmo propósito: transformar cada celebração em uma experiência única e inesquecível.</p>
          </Reveal>
        </div>
      </section>
      <section className="site-container section-space">
        <Reveal>
          <p className="eyebrow mb-6">O que nos diferencia</p>
          <h2 className="section-heading">Mais que um espaço, <em>uma experiência.</em></h2>
        </Reveal>
        <Reveal className="values-list" stagger={.12} y={32}>
          {diferenciais.map((item, index) => <div key={item.titulo} className="value-row">
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.titulo}</h3>
            <p className="body-copy">{item.descricao}</p>
          </div>)}
        </Reveal>
      </section>
      <CtaWhatsapp description="Entre em contato e descubra como podemos tornar seu evento ainda mais especial." label="Falar no WhatsApp">
        Pronto para criar <em className="block">momentos inesquecíveis?</em>
      </CtaWhatsapp>
    </>
  )
}
