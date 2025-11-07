import { useState, useEffect } from "react"

const getLocalStorage = (key: string) => {

    const storedItem = localStorage.getItem(key)
    if (storedItem) return JSON.parse(storedItem)

        

}

const useLocalStorage = <T>(key: string, value: T) => {
    const [storedItem, setStoredItem] = useState(() => getLocalStorage(key))


    useEffect(() => {
        const updatedItem = JSON.stringify(value)
        localStorage.setItem(key, updatedItem)
    }, [key, value])

    return storedItem
}

export default useLocalStorage
