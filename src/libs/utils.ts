const convertCurrency = (amount: number, currency: string): string => {
    return `${currency}: ${amount.toString()}`
}

convertCurrency(100, "PHP")