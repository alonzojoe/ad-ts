import Container from "../components/Shared/Container";
import React, { useState } from "react";

const SETTINGS = ["normal", "light", "heavy"] as const;

type Active = (typeof SETTINGS)[number];

const Settings = () => {
  const [active, setActive] = useState<Active>("normal");
  return (
    <Container>
      <h1 className="text-2xl font-bold">Settings</h1>
      <Options
        selections={SETTINGS}
        selected={active}
        onSelect={(theme) => setActive(theme)}
      />
      <p className="my-5 text-2xl">
        Selected Control: <span className="font-bold">{active}</span>
      </p>
    </Container>
  );
};

type OptionsProps<T> = {
  selections: readonly T[];
  selected: T;
  onSelect: (theme: T) => void;
};

const Options = <T extends React.ReactNode>({
  selections,
  selected,
  onSelect,
}: OptionsProps<T>) => {
  return (
    <ul className="list-disc space-y-2 text-xl mt-5">
      {selections.map((item, index) => (
        <li
          className={`cursor-pointer ${selected === item ? "font-bold" : ""}`}
          key={`item-${index}`}
          onClick={() => onSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Settings;
