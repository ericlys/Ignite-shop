export function formatterPrice(moneyInCents: number){
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(moneyInCents / 100);
}