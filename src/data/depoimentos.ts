export interface Depoimento {
  id: number
  nome: string
  texto: string
  estrelas: number
}

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: 'Lurdiomara Dias',
    texto:
      'Profissionais maravilhosos, ambiente acolhedor e comida saborosa. Tudo perfeito, do início ao fim. Gratidão! Super indico!',
    estrelas: 5,
  },
  {
    id: 2,
    nome: 'Elaine Leitão',
    texto:
      'O carinho que é dedicado à festa e o atendimento que aproxima as pessoas, como se fossem da família. Melhor lugar.',
    estrelas: 5,
  },
  {
    id: 3,
    nome: 'Marjorie Toledo',
    texto:
      'A equipe toda está de parabéns! O primeiro aninho da nossa filha foi perfeito em todos os aspectos. Super recomendo!',
    estrelas: 5,
  },
]