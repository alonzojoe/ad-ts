import Container from "../components/Shared/Container";
import UsePrevious from "../features/hooks/UsePrevious";
import GridContainer from "../components/Shared/GridContainer";

const HOOKS = [
  {
    id: 1,
    title: "useDebounce",
    description:
      "Delay the execution of function or state update with useDebounce",
  },
  { id: 2, title: "useDebounce", description: "Description here" },
  { id: 3, title: "useDebounce", description: "Description here" },
  { id: 4, title: "useDebounce", description: "Description here" },
];

const Hooks = () => {
  return (
    <Container>
      <h1 className="">Hooks</h1>

      <UsePrevious />

      <GridContainer className="mx-auto w-full gap-5" cols={4}>
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
    <div className="p-5 bg-gray-100 rounded-xl shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <h1 className="font-bold text-2xl text-sky-500 leading-tight">{title}</h1>
      <p className="text-lg mt-3">{description}</p>
    </div>
  );
};

export default Hooks;
