import React from "react";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <span>🔥</span>
      </div>
      <ul className={styles.navItems}>
        <li>
          <span>Mens</span>
        </li>
        <li>
          <span>Womens</span>
        </li>
        <li>
          <span>Jewlery</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
