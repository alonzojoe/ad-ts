import { useState, useRef, useEffect } from 'react'

const useThrottle = <T>(value: T, interval: number = 500) => {
    const [throttledValue, setThrottledValue] = useState<T>(value)
    const lastExecuted = useRef<number>(Date.now())


    useEffect(() => {

        if (Date.now() >= lastExecuted.current + interval) {
            lastExecuted.current = Date.now()
            setThrottledValue(value)
        } else {
            const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
                lastExecuted.current = Date.now()
                setThrottledValue(value)
            }, interval)


            return () => clearTimeout(timeout)
        }

    }, [value, interval])



    return throttledValue;
}

export default useThrottle
