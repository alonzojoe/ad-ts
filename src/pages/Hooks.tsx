import { useState } from "react";
import usePrevious from "../hooks/usePrevious";
import Container from "../components/Shared/Container";
import UsePrevious from "../features/hooks/UsePrevious";

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

      <UsePrevious />
    </Container>
  );
};

export default Hooks;
