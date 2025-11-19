import Container from "../components/Shared/Container";
import UsePrevious from "../features/hooks/UsePrevious";
import GridContainer from "../components/Shared/GridContainer";

const HOOKS = [
  { id: 1, title: "useDebounce", description: "Description here" },
  { id: 2, title: "useDebounce", description: "Description here" },
  { id: 3, title: "useDebounce", description: "Description here" },
  { id: 4, title: "useDebounce", description: "Description here" },
];

const Hooks = () => {
  return (
    <Container>
      <h1 className="">Hooks</h1>

      <UsePrevious />

      <GridContainer className="w-full gap-5" cols={4}>
        {HOOKS.map(({ title, description }) => (
          <HookItem title={title} description={description} />
        ))}
      </GridContainer>
    </Container>
  );
};

type HookItemProps = {
  title: string;
  description: string;
};

const HookItem = ({ title, description }: HookItemProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Hooks;
