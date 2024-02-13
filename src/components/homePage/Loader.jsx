import React, { useState, useEffect } from "react";
import styles from "./loader.module.css";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Функция, которая будет вызвана при монтировании компонента
    const timer = setTimeout(() => {
      setShowLoader(false); // Скрыть загрузчик после определенного времени (например, 1 секунда)
    }, 1000);

    // Функция очистки таймера, чтобы избежать утечек памяти
    return () => clearTimeout(timer);
  }, []); // Пустой массив зависимостей означает, что этот эффект будет вызываться только при монтировании компонента

  return (
    // Отобразить загрузчик только если showLoader равно true
    showLoader && (
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
          position: "fixed",
          zIndex: "15",
        }}
      >
        <div className={styles.loader}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    )
  );
};

export default Loader;
