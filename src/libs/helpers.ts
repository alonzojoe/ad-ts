
type User = {
    id: number;
    name: string;
} & (Admin | Employee)

type Admin = {
    type: 'admin';
    credentials: true;
}

type Employee = {
    type: 'employee';
    username: string;
}

const persons: User[] = [
    { id: 1, name: 'Joe', type: 'admin', credentials: true },
    { id: 2, name: 'Jane', type: 'employee', username: 'jane123' },
    { id: 3, name: 'John', type: 'employee', username: 'john1234' },
]


const isAdmin = (person: Admin | Employee): person is Admin => {
    return "credentials" in person
}

persons.forEach((person) => {
    if(isAdmin(person)) {
        console.log(`Hello, I am an Admin I have credentials: ${person.credentials}`)
    }else {
        console.log(`Hello, I am an employee and my username is: ${person.username}`)
    }
})


const isDefined = <T>(
    value?: T | null | undefined
): value is T => {
    return value !== null && value !== undefined
}

//type predicate helper
const arr = [1, 2, undefined, null, 3]

const filtered = arr.filter(isDefined)