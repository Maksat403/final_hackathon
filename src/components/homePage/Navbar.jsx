import React from "react";
import styles from "./navbar.module.css";
import searchIcon from "../assets/images/search_icon.png";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <div className={styles.links_title}>
            <span>Recipes</span>
            <span>About</span>
            <span>For Partners</span>
          </div>
        </div>
        <div className={styles.title}>
          <span style={{ fontSize: "4rem" }}>GOODZY</span>
          <span>Easy & Healthy Recipes</span>
        </div>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Want a desert?"
          />
          <img
            className={styles.search_icon}
            src={searchIcon}
            alt="Иконка поиска"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
