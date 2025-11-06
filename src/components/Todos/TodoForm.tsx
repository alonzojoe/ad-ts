import { type FormEvent, useRef } from "react";
import { useContext } from "react";
import TodoContext from "../../context/todo/todo-context";
import type { ITodoContext } from "../../types/@types.todo";

const TodoForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodoContext) as ITodoContext;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputEl = titleRef.current;
    if (!inputEl) return;

    const todoTitle = inputEl.value.trim();
    if (todoTitle === "") return;

    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      completed: false,
    };

    addTodo(newTodo);
    inputEl.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Title:</label>
        <input ref={titleRef} type="text" />
        <button>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
