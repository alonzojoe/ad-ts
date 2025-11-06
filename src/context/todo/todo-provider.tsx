import React, { useState, useReducer } from "react";
import type { ITodo } from "../../types/@types.todo";
import TodoContext from "./todo-context";

type TodoProviderProps = {
  children: React.ReactNode;
};

const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  TOGGLE_TODO: "toggle-todo",
} as const;

type Action =
  | { type: typeof ACTIONS.ADD_TODO; payload: ITodo }
  | { type: typeof ACTIONS.REMOVE_TODO; payload: number }
  | { type: typeof ACTIONS.TOGGLE_TODO; payload: number };

const todoReducer = (todos: ITodo[], action: Action): ITodo[] => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const newTodo = action.payload;
      return [newTodo, ...todos];
    }

    case ACTIONS.REMOVE_TODO: {
      const id = action.payload;
      return todos.filter((todo) => todo.id !== id);
    }

    case ACTIONS.TOGGLE_TODO: {
      const id = action.payload;

      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    }

    default:
      return todos;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const [todos, dispatchTodo] = useReducer(todoReducer, []);

  const addTodo = (todo: ITodo) => {
    // setTodos((prev) => [todo, ...prev]);
    dispatchTodo({ type: ACTIONS.ADD_TODO, payload: todo });
  };

  const deleteTodo = (id: number) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatchTodo({ type: ACTIONS.REMOVE_TODO, payload: id });
  };

  const toggleTodo = (id: number) => {
    dispatchTodo({ type: ACTIONS.TOGGLE_TODO, payload: id });
    // setTodos((todos) =>
    //   todos.map((todo) => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   })
    // );
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
