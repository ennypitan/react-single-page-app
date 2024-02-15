import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>LOGO</h1>
        <ul className={styles["nav-menu"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
