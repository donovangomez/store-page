import React from "react";
import Navbar from "../components/Navbar";
import photo from "../assets/laura-fashion.png";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className={styles.headerWrapper}>
        <div className={styles.headerContentWrapper}>
          <div className={styles.headerDescWrapper}>
            <h1 className={styles.heading}>Spring 2021 Preview</h1>
            <p className={styles.headerText}>View the lookbook now</p>
            <button className={styles.headerButton}>View</button>
          </div>
          <div className={styles.headerImageWrapper}>
            <img
              className={styles.headerImage}
              src={photo}
              alt="adidas track suit lady"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
