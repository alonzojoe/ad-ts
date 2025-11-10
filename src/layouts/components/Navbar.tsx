import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-3 shadow-md w-full">
      <ul className="flex items-center justify-start gap-5">
        <li>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/conditional"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Conditional
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
