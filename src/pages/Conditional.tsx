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

const Child = (props: ChildProps) => {
  //type narrowing
  if (props.gender === "male") {
    console.log(props.salary);
  } else if (props.gender === "female") {
    console.log(props.weight);
  }

  return (
    <>
      <span>Child Component</span>
      <h1>{props.name}</h1>
    </>
  );
};

export default Conditional;
