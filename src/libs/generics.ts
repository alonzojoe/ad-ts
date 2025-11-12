//@Generics

const identity = <T>(value: T) => {
    return value
}

identity(42)
identity("hello")
identity({ name: "A" })