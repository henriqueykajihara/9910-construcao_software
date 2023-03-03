export const formatNumberToCurrency = (number: number): string => {
    return new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' })
                    .format(number)
}
