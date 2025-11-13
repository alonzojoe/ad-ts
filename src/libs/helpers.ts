

const isDefined = <T>(
    value?: T | null | undefined
): value is T => {
    return value !== null && value !== undefined
}

//type predicate helper


const arr = [1, 2, undefined, null, 3]

const filtered = arr.filter(isDefined)