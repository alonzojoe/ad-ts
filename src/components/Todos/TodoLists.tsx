import { useContext } from "react";
import TodoContext from "../../context/todo/todo-context";
import type { ITodoContext, ITodo } from "../../types/@types.todo";

const TodoLists = () => {
  const { todos } = useContext(TodoContext) as ITodoContext;

  return (
    <div className="my-5 w-full max-w-7xl py-3 px-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {todos.length === 0 ? (
        <div className="col-span-full text-center">
          No record(s) found. Add Some?
        </div>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </div>
  );
};

type TodoItem = {
  todo: ITodo;
};

const TodoItem = ({ todo }: TodoItem) => {
  const { deleteTodo, toggleTodo } = useContext(TodoContext) as ITodoContext;

  const labelText = todo.completed ? "Undo" : "Mark Completed";

  const bg = todo.completed ? "bg-red-500" : "bg-green-500";

  return (
    <div className="p-5 border border-gray-300 rounded shadow-md">
      <div className="flex justify-between items-center">
        <span
          className={`font-semibold text-xl ${
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
