import React, { useState } from "react";
import axios from "axios";
import styles from "./resetPassword.module.css";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";

const API = "http://34.16.110.19/api";

const ResetPasswordRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleResetRequest = async () => {
    try {
      const response = await axios.post(`${API}/user/forgot_password/`, {
        email,
      });
      setMessage(response.data.message);
      navigate("/passwordReset");
    } catch (error) {
      console.error("Error requesting password reset:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 style={{ fontSize: "3.8rem", marginTop: "10rem" }}>Reset Password</h2>
      {message && (
        <p style={{ color: "orangered", fontSize: "1.8rem" }}>{message}</p>
      )}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetRequest}>Continue</button>
    </div>
  );
};

export default ResetPasswordRequest;
