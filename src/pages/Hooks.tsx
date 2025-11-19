import Container from "../components/Shared/Container";
import UsePrevious from "../features/hooks/UsePrevious";

const Hooks = () => {
  return (
    <Container>
      <h1 className="">Hooks</h1>

      <UsePrevious />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4 w-full bg-red-500">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </div>
    </Container>
  );
};

export default Hooks;
