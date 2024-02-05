export default function formatCurrency(value: number | string) {
  const numberFormat = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return numberFormat.format(Number(value))
}
