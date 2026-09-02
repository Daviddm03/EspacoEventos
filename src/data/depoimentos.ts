export interface Depoimento {
  id: number
  nome: string
  festa: string
  texto: string
  estrelas: number
}

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: 'Mariana & João',
    festa: 'Casamento',
    texto:
      'Desde o primeiro contato até o final da festa, tudo foi pensado com muito cuidado. O espaço estava impecável e nossos convidados adoraram.',
    estrelas: 5,
  },
  {
    id: 2,
    nome: 'Carolina Mendes',
    festa: 'Aniversário de 30 anos',
    texto:
      'Foi exatamente o que imaginávamos. Um ambiente bonito, confortável e com toda a estrutura necessária para aproveitar a noite sem preocupações.',
    estrelas: 5,
  },
  {
    id: 3,
    nome: 'Ricardo Almeida',
    festa: 'Festa de Formatura',
    texto:
      'Uma experiência incrível do início ao fim. A estrutura, o atendimento e o ambiente fizeram toda a diferença para tornar a celebração especial.',
    estrelas: 5,
  },
]