import React from "react";

// const ExampleComponent: React.FC = () => {}; //works only on arrow functions and also add children prop-type automatically
  
type ButtonProps = {
  backgroundColor: "red" | "blue" | "green"; //union type
  pillShape?: boolean;
};

const Button = ({ backgroundColor, pillShape }: ButtonProps) => {
  return (
    <button className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2">
      Click Me  
    </button>
  );
};

export default Button;
