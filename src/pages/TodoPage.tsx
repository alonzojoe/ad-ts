import TodoLists from "../components/Todos/TodoLists";
import TodoForm from "../components/Todos/TodoForm";
import Container from "../components/Shared/Container";

const TodoPage = () => {
  return (
    <Container>
      <TodoForm />
      <TodoLists />
    </Container>
  );
};

export default TodoPage;
