import React from "react";

// const ExampleComponent: React.FC = () => {}; //works only on arrow functions and also add children prop-type automatically

type ButtonProps = {
  backgroundColor: string;
};

const Button = ({ backgroundColor = "bg-blue-500" }: ButtonProps) => {
  return (
    <button className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2">
      Click Me
    </button>
  );
};

export default Button;
