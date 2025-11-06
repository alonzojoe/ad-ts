import { type FormEvent, useRef } from "react";
import useTodoContext from "../../context/todo/hook/useTodoContext";

const TodoForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodoContext();

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
    <>
      <h1 className="text-lg font-bold my-3">Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <label className="text-lg font-semibold">Title:</label>
          <input
            className="border border-gray-400 txt-base py-1 px-2 rounded outline-0 focus:ring-0"
            ref={titleRef}
            type="text"
          />
          <button className="py-1 px-3 rounded bg-green-500 text-white cursor-pointer hover:opacity-65 transition-all ease-in duration-200">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
