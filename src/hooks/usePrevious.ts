import { useEffect, useRef } from "react"


const usePrevious = <T>(current: T) => {
    const previousValue = useRef<T>(null);

    useEffect(() => {
        previousValue.current = current
    }, [current])


    return previousValue;
}

export default usePrevious;
