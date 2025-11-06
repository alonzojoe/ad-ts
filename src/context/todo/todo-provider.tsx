import React, { useState } from "react";
import type { ITodo } from "../../types/@types.todo";
import TodoContext from "./todo-context";

type TodoProviderProps = {
  children: React.ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

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
