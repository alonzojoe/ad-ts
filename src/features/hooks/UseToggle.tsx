import { type ComponentProps } from "react";
import useToggle from "../../hooks/useToggle";


const UseToggle = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div className="flex flex-col space-y-2 items-center justify-center p-3">
      <h1 className="text-2xl font-bold">useToggle</h1>
      <div className="flex items-center mt-5 justify-between gap-5">
        <ToggleItem
          onClick={() => toggleValue(true)}
          disabled={value === true}
          label="Turn On"
        />
        <ToggleItem
          disabled={value === false}
          onClick={() => toggleValue(false)}
          label="Turn Off"
        />
        <ToggleItem onClick={() => toggleValue()} label="Toggle" />
      </div>
      <div className="mt-5 w-100 flex flex-col justify-center items-center gap-3 p-5 bg-gray-100 shadow-md rounded">
        {JSON.stringify(value)}
      </div>
    </div>
  );
};

type ToggleItemProps = {
  label: string;
} & ComponentProps<"button">;

const ToggleItem = ({ label, ...props }: ToggleItemProps) => {
  return (
    <button
      className="cursor-pointer text-dark underline disabled:text-gray-300 disabled:cursor-not-allowed"
      {...props}
    >
      {label}
    </button>
  );
};

export default UseToggle;
