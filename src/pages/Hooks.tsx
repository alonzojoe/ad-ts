import Container from "../components/Shared/Container";
import UsePrevious from "../features/hooks/UsePrevious";
import GridContainer from "../components/Shared/GridContainer";

const Hooks = () => {
  return (
    <Container>
      <h1 className="">Hooks</h1>

      <UsePrevious />

      <GridContainer className="w-full bg-red-500" cols={4}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </GridContainer>
    </Container>
  );
};

export default Hooks;
