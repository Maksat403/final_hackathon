import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import CustomModal from "../modal/CustomModal";

const Login = () => {
  const { handleLogin, error, setError, checkAuth } = useContext(authContext);

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleAuth = () => {
    if (!email.trim() || !password.trim()) {
      setMessage("Please do not leave blank fields");
      setIsOpen(true);
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
    checkAuth();
  };

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <h2 style={{ fontSize: "3.8rem", marginTop: "18rem" }}>Login</h2>
      {error ? <h2 style={{ color: "orangered" }}>{error}</h2> : null}
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter your email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
      />
      <button className="loginBravo" onClick={handleAuth}>
        Login
      </button>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
      <span style={{ fontSize: "1.5rem", cursor: "default" }}>
        Forgot password? <Link to="/passwordResetReq">Click here</Link>
      </span>
    </div>
  );
};

export default Login;
