import Container from "../components/Shared/Container";
import UsePrevious from "../features/hooks/UsePrevious";
import GridContainer from "../components/Shared/GridContainer";
import { HOOKS } from "../constants/hook-lists";

const Hooks = () => {
  return (
    <Container>
      <h1 className="">Hooks</h1>

      <UsePrevious />

      <GridContainer className="mx-auto w-full gap-5" cols={4}>
        {HOOKS.map(({ id, name, description }) => (
          <HookItem key={id} name={name} description={description} />
        ))}
      </GridContainer>
    </Container>
  );
};

type HookItemProps = {
  name: string;
  description: string;
};

const HookItem = ({ name, description }: HookItemProps) => {
  return (
    <div className="p-5 bg-gray-100 rounded-xl shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <h1 className="font-bold text-2xl text-sky-500 leading-tight">{name}</h1>
      <p className="text-lg mt-3">{description}</p>
    </div>
  );
};

export default Hooks;
