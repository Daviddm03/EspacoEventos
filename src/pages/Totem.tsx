import { useState } from 'react'
import { Camera, Upload, CheckCircle, AlertCircle } from 'lucide-react'

type EstadoUpload = 'idle' | 'selecionado' | 'enviando' | 'sucesso' | 'erro'

export default function Totem() {
  const [estado, setEstado] = useState<EstadoUpload>('idle')
  const [nomeArquivo, setNomeArquivo] = useState<string | null>(null)

  const handleSelecao = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0]
    if (!arquivo) return
    setNomeArquivo(arquivo.name)
    setEstado('selecionado')
  }

  const handleEnvio = () => {
    // TODO: Conectar ao backend/storage real aqui.
    // O envio real da foto deve ser implementado quando
    // o serviço de armazenamento (ex: Supabase, S3, Firebase)
    // estiver configurado.
    setEstado('enviando')
    setTimeout(() => {
      // Simulação removida — exibe mensagem informativa
      setEstado('erro')
    }, 1000)
  }

  const resetar = () => {
    setEstado('idle')
    setNomeArquivo(null)
  }

  return (
    <div className="bg-fundo min-h-screen flex flex-col">

      {/* Header */}
      <div className="bg-escuro py-12 px-6 text-center">
        <div className="flex justify-center mb-4">
          <Camera size={48} className="text-primaria" aria-hidden="true" />
        </div>
        <h1 className="font-titulo text-4xl md:text-5xl text-branco">
          Totem de <span className="text-primaria">Fotos</span>
        </h1>
        <p className="text-texto-suave mt-3 text-base max-w-md mx-auto">
          Faça o upload da sua foto tirada no totem e guarde essa memória para sempre.
        </p>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          {/* Idle / Selecionado */}
          {(estado === 'idle' || estado === 'selecionado') && (
            <div className="bg-branco rounded-3xl p-8 shadow-sm flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-primaria/10 rounded-full flex items-center justify-center">
                <Upload size={36} className="text-primaria" aria-hidden="true" />
              </div>

              <div className="text-center">
                <h2 className="font-titulo text-2xl text-escuro mb-2">Enviar minha foto</h2>
                <p className="text-texto-suave text-sm">
                  Selecione a foto que você tirou no totem para fazer o upload.
                </p>
              </div>

              <label className="w-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleSelecao}
                  aria-label="Selecionar foto para upload"
                />
                <div className="border-2 border-dashed border-primaria/30 hover:border-primaria rounded-2xl p-6 text-center transition-colors">
                  {nomeArquivo ? (
                    <p className="text-escuro text-sm font-medium">{nomeArquivo}</p>
                  ) : (
                    <p className="text-texto-suave text-sm">
                      Clique para selecionar uma foto
                    </p>
                  )}
                </div>
              </label>

              {estado === 'selecionado' && (
                <button
                  onClick={handleEnvio}
                  className="w-full bg-primaria text-branco py-4 rounded-full font-semibold hover:opacity-80 transition-opacity">
                  Enviar foto
                </button>
              )}

              <p className="text-texto-suave/60 text-xs text-center">
                Formatos aceitos: JPG, PNG, HEIC · Tamanho máximo: 20MB
              </p>
            </div>
          )}

          {/* Enviando */}
          {estado === 'enviando' && (
            <div className="bg-branco rounded-3xl p-8 shadow-sm flex flex-col items-center gap-6 text-center">
              <div className="w-16 h-16 border-4 border-primaria border-t-transparent rounded-full animate-spin" aria-label="Enviando..." />
              <p className="text-escuro font-medium">Enviando sua foto...</p>
            </div>
          )}

          {/* Sucesso */}
          {estado === 'sucesso' && (
            <div className="bg-branco rounded-3xl p-8 shadow-sm flex flex-col items-center gap-6 text-center">
              <CheckCircle size={64} className="text-green-500" aria-hidden="true" />
              <div>
                <h2 className="font-titulo text-2xl text-escuro mb-2">Foto enviada!</h2>
                <p className="text-texto-suave text-sm">
                  Sua foto foi salva com sucesso. Obrigado por compartilhar esse momento!
                </p>
              </div>
              <button
                onClick={resetar}
                className="bg-primaria text-branco px-8 py-3 rounded-full font-medium hover:opacity-80 transition-opacity">
                Enviar outra foto
              </button>
            </div>
          )}

          {/* Erro / Upload não disponível */}
          {estado === 'erro' && (
            <div className="bg-branco rounded-3xl p-8 shadow-sm flex flex-col items-center gap-6 text-center">
              <AlertCircle size={64} className="text-primaria" aria-hidden="true" />
              <div>
                <h2 className="font-titulo text-2xl text-escuro mb-2">Upload em breve</h2>
                <p className="text-texto-suave text-sm">
                  O envio de fotos será disponibilizado em breve. Em caso de dúvidas, fale com a equipe do espaço.
                </p>
              </div>
              <button
                onClick={resetar}
                className="border border-primaria text-primaria px-8 py-3 rounded-full font-medium hover:bg-primaria hover:text-branco transition-colors">
                Tentar novamente
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}