import { useEffect } from "react";

const buttonTextOptions = [
  "Click Me",
  "Click Me Again",
  "Click Me One More Time",
] as const;

type User = {
  sessionToken: string;
  name: string;
};

type Guest = Omit<User, "sessionToken">;

type ButtonColor = "red" | "blue" | "green";

const ButtonRef = () => {
  useEffect(() => {
    const buttonColor = localStorage.getItem("buttonColor") as ButtonColor;
  }, []);

  return (
    <button className="bg-green-500 cursor-pointer text-white rounded px-4 py-2 my-10">
      {buttonTextOptions.map((option) => {
        return option;
      })}
    </button>
  );
};

export default ButtonRef;
