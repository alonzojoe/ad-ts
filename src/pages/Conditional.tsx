import Container from "../components/Shared/Container";

const Conditional = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Conditional</h1>
      <Child name="Jane" gender="female" weight={55} />
    </Container>
  );
};

type ChildProps = {
  name: string;
} & (MaleProps | FemaleProps); //Discriminated Union

type MaleProps = {
  gender: "male"; //discriminator
  salary: number;
};

type FemaleProps = {
  gender: "female"; //discriminator
  weight: number;
};

const Child = ({ name }: ChildProps) => {
  return (
    <>
      <span>Child Component</span>
      <h1>{name}</h1>
    </>
  );
};

export default Conditional;
