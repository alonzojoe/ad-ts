import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Navbar = () => {
  return (
    <nav className="p-3 shadow-md w-full">
      <ul className="flex items-center justify-start gap-5">
        {ROUTES.map(({ id, path, name }) => (
          <li key={id}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
