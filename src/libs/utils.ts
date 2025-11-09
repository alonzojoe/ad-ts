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



const getIndexOfArrayItem = <T>(arr: T[], arrayItem: T) => {
    return arr.findIndex((item) => item === arrayItem)
}

const arr = [12, 55, 27]
const indexOf2nd = getIndexOfArrayItem(arr, 55)

const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
    return [input1, input2]
}

createArrayPair(true, 1)


//useful ts
const person = 'joe'
type Person = typeof person

const obj = {
    name: 'Joe',
    address: 'Pampanga',
    role: 'Dev'
}

type Obj = keyof typeof obj

export default ""