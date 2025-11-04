import React from "react";

// const ExampleComponent: React.FC = () => {}; //works only on arrow functions and also add children prop-type automatically

type Color = "red" | "blue" | "green" | "yellow" | "purple";

type ButtonProps = {
  backgroundColor: Color; //union type
  textColor?: Color;
  pillShape?: boolean;
  padding: [number, number, number, number];
};

const Button = ({
  backgroundColor,
  textColor,
  pillShape,
  padding,
}: ButtonProps) => {
  return (
    <button className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2">
      Click Me
    </button>
  );
};

export default Button;
