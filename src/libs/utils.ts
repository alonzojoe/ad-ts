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
//1. typeof / keyof
const person = 'joe'
type Person = typeof person

const obj = {
    name: 'Joe',
    address: 'Pampanga',
    role: 'Dev'
}

type Obj = keyof typeof obj

//2 Fn Return Type

const sumNum = (a: number, b: number) => {
    return a + b
}

type FnReturn = ReturnType<typeof sumNum>

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async <APIResponse>(): Promise<APIResponse> => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")

        if (!res.ok) {
            throw new Error(`An error occured while fetching the data: ${res.status}`)
        }

        const data = await res.json()

        return data as APIResponse
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
        throw error;
    }
}


type TodoData = Awaited<ReturnType<typeof fetchData<Todo>>>


interface MainType {
    name: string;
    department: string;
}

type NestedType = MainType & {
    isDeveloper: boolean
}

type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

type IDK = Prettify<NestedType>


interface Task {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const updateTask = (task: Task, fieldsToUpdate: Partial<Task>) => {
    return { ...task, fieldsToUpdate }
}

const initialTask: Task = {
    title: 'Clean the house',
    description: 'Follow the safety rules on how to clean a house',
}

const updatedTodo = updateTask(initialTask, { description: 'updated description' })

type Ommited = Omit<Task, "createdAt" | "updatedAt">

type Shapes =
    | { kind: 'circle', radius: number }
    | { kind: 'square', x: number }

type ExcludeShape = Exclude<Shapes, { kind: 'circle' }>

type Picked = Pick<Task, "title" | "description">

export default ""