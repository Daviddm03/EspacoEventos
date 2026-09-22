export const WHATSAPP_NUMBER = "5551980114747"

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de solicitar um orçamento para realizar um evento. Poderia me enviar mais informações sobre disponibilidade, serviços e valores?"

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const NAVIGATION_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/sobre', label: 'Sobre Nós' },
]
