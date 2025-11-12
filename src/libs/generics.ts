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