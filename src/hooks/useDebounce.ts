import { useState, useEffect } from "react"

const useDebounce = <T>(value: T, delay: number = 200) => {

    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {

        const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(timeout)

    }, [value, delay])

    return debounceValue
}

export default useDebounce
