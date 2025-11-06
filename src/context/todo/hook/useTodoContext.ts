import { useContext } from "react"
import TodoContext from "../todo-context"
import type { ITodoContext } from "../../../types/@types.todo"

const useTodoContext = () => {
    const context = useContext(TodoContext) as ITodoContext;

    if (!context) {
        throw new Error("The AppContext must be within an TodoProvider");
    }

    return context;
}

export default useTodoContext
