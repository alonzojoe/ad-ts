import { type FormEvent } from "react";
import { useContext } from "react";
import TodoContext from "../../context/todo/todo-context";
import type { ITodoContext } from "../../types/@types.todo";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext) as ITodoContext;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: "",
      completed: false,
    };

    addTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Title:</label>
        <input type="text" />
        <button>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
