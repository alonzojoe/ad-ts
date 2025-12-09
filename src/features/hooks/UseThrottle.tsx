import { useState, type ChangeEvent } from "react";
import useThrottle from "../../hooks/useThrottle";

const UseThrottle = () => {
  const [value, setValue] = useState<string>("");
  const throttleValue = useThrottle(value, 400);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2 items-center justify-center p-3">
      <h1 className="text-2xl font-bold">useThrottle</h1>
      <div className="mt-5 w-100 flex flex-col justify-center items-center gap-3 p-5 bg-gray-100 shadow-md rounded">
        <input
          value={value}
          onChange={handleChange}
          className="border border-gray-400 txt-base py-1 px-2 rounded outline-0 focus:ring-0"
          type="text"
        />
        <p>Value: {value}</p>
        <p>Throttle Value: {throttleValue}</p>
      </div>
    </div>
  );
};

export default UseThrottle;
