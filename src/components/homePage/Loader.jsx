import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f2ebe5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        position: "absolute",
        zIndex: "5",
      }}
    >
      <div className={styles.loader}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </div>
  );
};

export default Loader;
