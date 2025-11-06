import { createContext } from "react";
import type { ITodoContext } from "../../types/@types.todo";

const TodoContext = createContext<ITodoContext | null>(null);

export default TodoContext;
