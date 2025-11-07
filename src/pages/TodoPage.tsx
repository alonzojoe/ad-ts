import TodoLists from "../components/Todos/TodoLists";
import TodoForm from "../components/Todos/TodoForm";

const TodoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TodoForm />
      <TodoLists />
    </div>
  );
};

export default TodoPage;
