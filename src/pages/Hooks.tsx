import { useState } from "react";
import usePrevious from "../hooks/usePrevious";
import Container from "../components/Shared/Container";

const getRandomColor = () => {
  const colors = ["red", "blue", "green", "pink", "purple"] as const;
  return colors[Math.floor(Math.random() * colors.length)];
};

const mappedColors = {
  red: "bg-red-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
  pink: "bg-pink-600",
  purple: "bg-purple-600",
} as const;

const Hooks = () => {
  const [color, setColor] = useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    let newColor = getRandomColor();

    while (color === newColor) {
      newColor = getRandomColor();
    }

    setColor(newColor);
  };

  console.log(`previous: ${previousColor}`);
  console.log(`current: ${color}`);

  return (
    <Container>
      <h1 className="">Hooks</h1>

      <div className="flex flex-col space-y-2 items-center justify-center p-3">
        <h1 className="text-2xl font-bold">usePrevious</h1>
        <button
          className="underline text-blue-600 cursor-pointer"
          onClick={handleClick}
        >
          next
        </button>
      </div>

      <div className="w-100 flex justify-center items-center gap-3 p-5 bg-gray-100 shadow-md rounded">
        <div className="w-100/3 flex flex-col items-center justify-center">
          <div className={`rounded bg-${previousColor}-600 w-full p-10 mt-3`} />
          <span className="text-base mt-2">Previous</span>
        </div>

        <div className="w-100/3 flex flex-col items-center justify-center">
          <div className={`rounded bg-${color}-600 w-full p-10 mt-3`} />
          <span className="text-base mt-2">Current</span>
        </div>
      </div>
    </Container>
  );
};

export default Hooks;
