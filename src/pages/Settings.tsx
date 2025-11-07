import Container from "../components/Shared/Container";
import { useState } from "react";

const SETTINGS = ["normal", "light", "heavy"] as const;

type Active = (typeof SETTINGS)[number];

const Settings = () => {
  const [active, setActive] = useState<Active>("normal");
  return (
    <Container>
      <h1 className="text-2xl font-bold">Settings</h1>
      <ul className="list-disc space-y-2 text-lg mt-5">
        {SETTINGS.map((item, index) => (
          <li
            className={`cursor-pointer ${active === item ? "font-bold" : ""}`}
            key={`item-${index}`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Settings;
