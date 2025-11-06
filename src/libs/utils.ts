const convertCurrency = (amount: number, currency: string): string => {
    return `${currency}: ${amount.toString()}`
}

convertCurrency(100, "PHP")


const convertToArray = <T,>(value: T): T[] => {
    return [value]
}

convertToArray(5)
convertToArray("a")
convertToArray(true)