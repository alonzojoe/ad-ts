//@Generics

const identity = <T>(value: T) => {
    return value
}

identity(42)
identity("hello")
identity({ name: "A" })


const getFirstElement = <T>(arr: T[]) => {
    if (arr.length === 0) return undefined;

    return arr[0]
}

getFirstElement([1, 2, 3]);
getFirstElement(["a", "b", "c"]);
getFirstElement([]);

const mergeObjects = <T, U>(obj1: T, obj2: U) => {
    return { ...obj1, ...obj2 }
}

mergeObjects({ name: "Alice" }, { age: 25 });
mergeObjects({ id: 1 }, { isAdmin: true });

const person = { name: "Alice", age: 25 }

const getProperty = <T extends object, K extends keyof T>(obj: T, key: K) => {
    if (!(key in obj)) { //why it shows here T is not assingable to type object?
        throw new Error('Key doesnt exists in object')
    }

    return obj[key]
}


getProperty(person, "name");
getProperty(person, "age");
getProperty(person, "email"); //throw error email doesn't exist on key of person


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 35 }
];

const filterByProperty = <T, K extends keyof T>(items: T[], key: K, value: T[K]) => {
    return items.filter((item) => item[key] === value)
}


filterByProperty(people, "name", "Alice");
filterByProperty(people, "age", 30);