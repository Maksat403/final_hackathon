import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const { handleLogin, error, setError } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleAuth = () => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  };

  useEffect(() => {
    setError(false);
  }, []);

  return error ? (
    <h2 style={{ fontSize: "3.8rem", marginTop: "18rem" }}>{error}</h2>
  ) : (
    <div className={styles.container}>
      <h2 style={{ fontSize: "3.8rem", marginTop: "18rem" }}>Login</h2>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleAuth}>Login</button>
    </div>
  );
};

export default Login;
