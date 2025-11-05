import React, { type ComponentProps } from "react";

// const ExampleComponent: React.FC = () => {}; //works only on arrow functions and also add children prop-type automatically

type Color = "red" | "blue" | "green" | "yellow" | "purple";

type ButtonProps = {
  backgroundColor: Color; //union type
  textColor?: Color;
  pillShape?: boolean;
  padding: [number, number, number, number]; //tuple
  style: React.CSSProperties; //style Type builtin with React using CSSProperties
  borderRadius: Record<string, number>;
  onClick: () => void;
  children: React.ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
} & ComponentProps<"button">;

const Button = ({
  backgroundColor,
  textColor,
  pillShape,
  padding,
  style,
  borderRadius,
  onClick,
  children,
  setCount,
  ...rest
}: ButtonProps) => {
  console.log(pillShape);
  return (
    <button
      {...rest}
      onClick={() => setCount((count) => count + 1)}
      style={style}
      className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2"
    >
      {children}
    </button>
  );
};

export default Button;
