import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>LOGO</h1>
        <ul className={styles["nav-menu"]}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
