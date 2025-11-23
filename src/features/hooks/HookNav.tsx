import { useNavigate } from "react-router-dom";
import GridContainer from "../../components/Shared/GridContainer";
import { HOOKS } from "../../constants/hook-lists";

const HookNav = () => {
  return (
    <GridContainer className="mx-auto w-full gap-5" cols={4}>
      {HOOKS.map(({ id, name, description, path }) => (
        <HookItem key={id} name={name} description={description} path={path} />
      ))}
    </GridContainer>
  );
};

type HookItemProps = {
  name: string;
  description: string;
  path: string;
};

const HookItem = ({ name, description, path }: HookItemProps) => {
  const navigate = useNavigate();

  const visitPage = (path: string) => {
    navigate(`/hooks${path}`);
  };

  return (
    <div
      onClick={() => visitPage(path)}
      className="p-5 bg-gray-100 rounded-xl shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <h1 className="font-bold text-2xl text-sky-500 leading-tight">{name}</h1>
      <p className="text-lg mt-3">{description}</p>
    </div>
  );
};

export default HookNav;
