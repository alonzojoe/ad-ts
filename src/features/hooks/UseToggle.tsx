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
      <div className="mt-5 w-100 flex flex-col justify-center items-center gap-3 p-5 bg-white shadow-md rounded">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => toggleValue(e.target.checked)}
            className="sr-only peer"
          />
          <div className="relative w-9 bg-gray-300 border-2 border-gray-300 h-5 bg-neutral-gray-300 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0 after:start-px after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-400"></div>
          <span className="ms-3 text-sm font-medium text-heading select-none">
            {value ? "On" : "Off"}
          </span>
        </label>
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
