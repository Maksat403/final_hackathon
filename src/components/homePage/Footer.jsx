import React from "react";
import styles from "./Footer.module.css";
import img1 from "../homePage/Cooking.jpg";

const Footer = () => {
  return (
    <div id={styles.footer_section}>
      <div id={styles.footer_container}>
        <div id={styles.flex_vertical}>
          <div id={styles.logo}>
            <a href="#" id={styles.brand}>
              <img
                src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62d944773758c13cfad6a3cc_GOODZY-white.svg"
                alt="COOK"
                id={styles.logo_png}
              />
            </a>
            <div id={styles.text_under_logo}>
              Easy healthy recipes that make you feel good
            </div>
          </div>
          <div id={styles.social_links_logo}>
            <a href="#">
              <img
                src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62cd3f24adf5f623436942e2_Facebook.svg"
                alt="dacebook"
              />
            </a>
            <a href="#">
              <img
                src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62cd3f241101fa587c519611_Instagram.svg"
                alt="insta"
              />
            </a>
            <a href="#">
              <img
                src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62cd3f247a0de2d040338e64_Twitter.svg"
                alt="X"
              />
            </a>
          </div>
          <div id={styles.links}>
            <a href="#" id={styles.footer_links}>
              All recipes
            </a>
            <a href="#" id={styles.footer_links}>
              About
            </a>
            <a href="#" id={styles.footer_links}>
              For partners
            </a>
            <a href="#" id={styles.footer_links}>
              Recipe FAQ
            </a>
          </div>
          {/* <div id={styles.links_for_admin}></div> */}
          <div id={styles.Copyright}>
            Copyright 2022 — Powered by Webflow — Developed by Anastasiia G.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
