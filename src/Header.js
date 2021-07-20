import React from "react";
import Navbar from "./Navbar";
import styles from "./styles/header.module.css";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className={styles.headerContent}>
        <h2>Why does React take so fucking long</h2>
      </div>
    </header>
  );
};

export default Header;
