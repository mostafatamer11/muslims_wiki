import { NavLink } from "react-router-dom";

const ToggleButton = ({ routePath, text }) => {
  return (
    <li className="toggle-button">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={`/sign/${routePath}`}
      >
        { text }
      </NavLink>
    </li>
  );
};

export default ToggleButton;
