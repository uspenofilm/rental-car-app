import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";
import logo from "../../icons/Logo.svg";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Header() {
  return (
    <div className={css.container}>
      <img src={logo} alt="Logo" />
      <div className={css.navigation}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
