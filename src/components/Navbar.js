import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <span className={styles.logo}>🔥</span>
      </div>
      <ul className={styles.navItems}>
        <li>
          <span className={styles.link}>Mens</span>
        </li>
        <li>
          <span className={styles.link}>Womens</span>
        </li>
        <li>
          <span className={styles.link}>Jewlery</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
