import { useState } from "react"

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue)


    const toggleValue = (newVal?: boolean) => {
        setValue((prev) => (typeof newVal === 'boolean' ? newVal : !prev))
    }


    return [value, toggleValue]
}

export default useToggle
