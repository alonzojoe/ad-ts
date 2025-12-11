import { type ComponentProps } from "react";

const UseToggle = () => {
  return (
    <div className="flex flex-col space-y-2 items-center justify-center p-3">
      <h1 className="text-2xl font-bold">useToggle</h1>
      <div className="flex items-center mt-5 justify-between gap-5">
        <ToggleItem disabled={true} label="Turn On" />
        <ToggleItem label="Turn Off" />
        <ToggleItem label="Toggle" />
      </div>
      <div className="mt-5 w-100 flex flex-col justify-center items-center gap-3 p-5 bg-gray-100 shadow-md rounded"></div>
    </div>
  );
};

type ToggleItemProps = {
  label: string;
  onToggle: (val?: boolean) => void;
} & ComponentProps<"button">;

const ToggleItem = ({ label, onToggle, ...props }: ToggleItemProps) => {
  return (
    <button
      onClick={() => onToggle()}
      className="cursor-pointer text-dark underline disabled:text-gray-300 disabled:cursor-not-allowed"
      {...props}
    >
      {label}
    </button>
  );
};

export default UseToggle;
