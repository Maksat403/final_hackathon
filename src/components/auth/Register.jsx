import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import CustomModal from "../modal/CustomModal";
import Modal from "../modal/CheckGmailModal";

const Register = () => {
  const { handleRegister, setError, error } = useContext(authContext);

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setError(false);
  }, []);

  const handleSave = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !firstName.trim() ||
      !lastName.trim()
    ) {
      setMessage("Please do not leave blank fields");
      setIsOpen(true);
      return;
    }

    if (password.length < 6) {
      setMessage("The password must contain at least 6 characters");
      setIsOpen(true);
      return;
    }

    if (password !== passwordConfirm) {
      setMessage("Passwords don't match");
      setIsOpen(true);
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    setShowModal(true);
    setTimeout(() => {
      handleRegister(formData, navigate);
    }, 10000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <h2 style={{ fontSize: "3.8rem", marginTop: "18rem" }}>Register</h2>
      {error ? <h3>{error}</h3> : null}
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your surname"
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSave}>Register</button>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
      {showModal && <Modal onClose={closeModal}></Modal>}
    </div>
  );
};

export default Register;
