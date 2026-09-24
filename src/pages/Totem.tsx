import { useEffect, useRef, useState } from 'react'
import { Upload, AlertCircle, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { imagensGaleria } from '../data/galeria'
import { WHATSAPP_URL } from '../lib/constants'

type EstadoUpload = 'idle' | 'selecionado' | 'enviando' | 'erro'

export default function Totem() {
  const [estado, setEstado] = useState<EstadoUpload>('idle')
  const [nomeArquivo, setNomeArquivo] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])
  useEffect(() => { if (estado === 'erro') headingRef.current?.focus() }, [estado])

  const handleSelecao = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = event.target.files?.[0]
    if (!arquivo) return
    setNomeArquivo(arquivo.name)
    setEstado('selecionado')
  }
  const handleEnvio = () => {
    // O fluxo existente é informativo; não há backend de upload configurado.
    setEstado('enviando')
    timerRef.current = setTimeout(() => setEstado('erro'), 1000)
  }

  return (
    <>
      <PageHeader eyebrow="Guarde essa memória" description="Sua foto tirada no totem, uma lembrança da celebração." image={imagensGaleria[9].src} caption="Totem de fotos · Espaço Eventos">
        Totem de <em className="block">fotos.</em>
      </PageHeader>
      <section className="site-container section-space totem-layout">
        <div>
          <p className="eyebrow mb-6">Os momentos ficam</p>
          <h2 className="section-heading">Uma lembrança <em className="block">para guardar.</em></h2>
          <p className="body-copy mt-8">Selecione a foto que você tirou no totem para fazer o upload.</p>
          <p className="upload-notice">O envio de fotos será disponibilizado em breve. Em caso de dúvidas, fale com a equipe do espaço.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="editorial-link mt-6">Falar com a equipe <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="totem-panel" aria-busy={estado === 'enviando'}>
          {(estado === 'idle' || estado === 'selecionado') && <>
            <h2>Enviar minha foto</h2>
            <label className="upload-choice">
              <input ref={inputRef} type="file" accept="image/*" className="sr-only" onChange={handleSelecao} aria-label="Selecionar foto para upload" />
              <Upload className="mx-auto mb-5 text-primaria-texto" size={28} aria-hidden="true" />
              <span className="upload-filename">{nomeArquivo ?? 'Clique para selecionar uma foto'}</span>
            </label>
            <p className="text-xs leading-relaxed text-texto-suave">Formatos aceitos: JPG, PNG, HEIC · Tamanho máximo: 20MB</p>
            {estado === 'selecionado' && <button type="button" onClick={handleEnvio} className="button mt-6 w-full">Enviar foto <ArrowUpRight aria-hidden="true" /></button>}
          </>}
          <div role="status" aria-live="polite">
            {estado === 'enviando' && <p className="body-copy py-8">Enviando sua foto…</p>}
            {estado === 'erro' && <div>
              <AlertCircle size={28} className="text-primaria-texto mb-6" aria-hidden="true" />
              <h2 ref={headingRef} tabIndex={-1}>Upload em breve</h2>
              <p className="body-copy mt-4">O envio de fotos será disponibilizado em breve. Em caso de dúvidas, fale com a equipe do espaço.</p>
              <button type="button" className="button button-outline mt-6" onClick={() => { setEstado('idle'); setNomeArquivo(null); requestAnimationFrame(() => inputRef.current?.focus()) }}>Tentar novamente</button>
            </div>}
          </div>
        </div>
      </section>
    </>
  )
}
