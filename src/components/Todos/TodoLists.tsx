import { useContext } from "react";
import TodoContext from "../../context/todo/todo-context";
import type { ITodoContext, ITodo } from "../../types/@types.todo";

const TodoLists = () => {
  const { todos } = useContext(TodoContext) as ITodoContext;

  return (
    <div>
      <h1>Lists</h1>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

type TodoItem = {
  todo: ITodo;
};

const TodoItem = ({ todo }: TodoItem) => {
  return (
    <div>
      <span>{todo.title}</span>
    </div>
  );
};

export default TodoLists;
