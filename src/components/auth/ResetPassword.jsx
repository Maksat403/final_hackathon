import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./resetPassword.module.css";
import Modal from "../modal/ActivationModal";
import { useNavigate } from "react-router-dom";

const API = "http://34.16.110.19/api";

const ResetPassword = () => {
  const [resetToken, setResetToken] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `${API}/user/forgot_password_confirm/`,
        {
          code_confirm: resetToken,
          new_password: password,
          password_confirm: passwordConfirm,
        }
      );

      setMessage(response.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <h2 style={{ fontSize: "3.8rem", marginTop: "10rem" }}>Reset Password</h2>
      {message && (
        <p style={{ color: "orangered", fontSize: "1.8rem" }}>{message}</p>
      )}
      <input
        type="text"
        placeholder="Enter your reset token"
        value={resetToken}
        onChange={(e) => setResetToken(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your new password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>

      {showModal && <Modal onClose={closeModal}></Modal>}
    </div>
  );
};

export default ResetPassword;
