import { useMemo, useState, type ChangeEvent } from "react";
import useDebounce from "../../hooks/useDebounce";
import type { ITodo } from "../../types/@types.todo";
import useTodoContext from "../../context/todo/hook/useTodoContext";

const TodoLists = () => {
  const { todos } = useTodoContext();
  const [input, setInput] = useState("");

  const debounceValue = useDebounce(input, 500);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(debounceValue.toLowerCase())
    );
  }, [debounceValue, todos]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInput(value);
  };

  console.log("filteredTodos", filteredTodos);

  return (
    <div className="my-5 w-full py-3 px-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="col-span-full flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2">
          <h3>Search:</h3>
          <input
            onChange={handleChange}
            className="border border-gray-400 txt-base py-1 px-2 rounded outline-0 focus:ring-0"
            type="text"
          />
        </div>
        <h3>Total Items: {todos.length}</h3>
      </div>
      {todos.length === 0 ? (
        <div className="col-span-full text-center">
          No record(s) found. Add Some?
        </div>
      ) : (
        filteredTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </div>
  );
};

type TodoItem = {
  todo: ITodo;
};

const TodoItem = ({ todo }: TodoItem) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  const labelText = todo.completed ? "Undo" : "Mark Completed";

  const bg = todo.completed ? "bg-red-500" : "bg-green-500";

  return (
    <div className="p-5 border border-gray-300 rounded shadow-md">
      <div className="flex justify-between">
        <span
          className={`font-semibold text-xl mt-3 ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.title}
        </span>
        <div
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 font-semibold text-3xl cursor-pointer"
        >
          &times;
        </div>
      </div>
      <div className="flex items-center justify-end mt-10">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`py-1 px-3 rounded ${bg} text-white cursor-pointer hover:opacity-65 transition-all ease-in duration-200`}
        >
          {labelText}
        </button>
      </div>
    </div>
  );
};

export default TodoLists;
