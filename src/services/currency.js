import currency from 'currency.js'

export default value => {
    return currency(value, {
        separator: '.', 
        decimal: ',',
        symbol: 'R$',
        pattern: `! #`,
        formatWithSymbol: true,
    })
}
