import React, { useState } from "react";
import type { ITodo } from "../../types/@types.todo";
import TodoContext from "./todo-context";

type TodoProviderProps = {
  children: React.ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {};

  const deleteTodo = (id: number) => {};

  const toggleTodo = (id: number) => {};

  const todoContextValue = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
