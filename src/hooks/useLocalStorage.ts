import React, { useState, useEffect } from "react"

const getLocalStorage = <T>(key: string, initialValue: T | (() => T)): T => {

    const storedItem = localStorage.getItem(key)

    if (storedItem) return JSON.parse(storedItem) as T

    return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue

}

const useLocalStorage =
    <T>(key: string, initialValue: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] => {

        const [value, setValue] = useState<T>(() => getLocalStorage(key, initialValue))

        useEffect(() => {
            const updatedItem = JSON.stringify(value)
            localStorage.setItem(key, updatedItem)
        }, [key, value])

        return [value, setValue]
    }

export default useLocalStorage
