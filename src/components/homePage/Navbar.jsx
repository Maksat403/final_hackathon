import React, { useContext, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import logoutImg from "../assets/images/logout.png";
import registerImg from "../assets/images/register.png";

const Navbar = () => {
  const { currentUser, handleLogout, checkAuth } = useContext(authContext);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.hamburger_menu}>
          <input id={styles.menu__toggle} type="checkbox" />
          <label className={styles.menu__btn} for={styles.menu__toggle}>
            <span></span>
          </label>
          <ul className={styles.menu__box}>
            <li>
              <a className={styles.menu__item} href="#">
                Recipes
              </a>
            </li>
            <li>
              <a className={styles.menu__item} href="#">
                About
              </a>
            </li>
            <li>
              <a className={styles.menu__item} href="#">
                For Partners
              </a>
            </li>
            <li>
              <a className={styles.menu__item} href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.title}>
          <NavLink to={"/"} className={styles.navLinks}>
            <span style={{ fontSize: "3vw" }}>GOODZY</span>
            <span>Easy & Healthy Recipes</span>
          </NavLink>
        </div>
        <div className={styles.auth}>
          <div className={styles.authUser}>
            {currentUser ? (
              <div className={styles.currentUser}>
                <div>Hello, {currentUser}</div>
                <div className={styles.logoutImg}>
                  <img onClick={handleLogout} src={logoutImg} alt="" />
                </div>
              </div>
            ) : (
              <div className={styles.registerImg}>
                <img onClick={toggleDropdown} src={registerImg} alt="" />
                {isDropdownOpen && (
                  <div className={styles.dropdown}>
                    <ul>
                      <li>
                        <Link
                          onClick={closeDropdown}
                          className={styles.dropdown_link}
                          to="/register"
                        >
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeDropdown}
                          className={styles.dropdown_link}
                          to="/login"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
