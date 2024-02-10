import React, { useState } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";

const ActivationModal = ({ isOpenAct, onClose, activationLink }) => {
  const modalAnimation = useSpring({
    opacity: isOpenAct ? 1 : 0,
    transform: isOpenAct ? "translateY(0)" : "translateY(-50px)",
  });

  const openModal = () => {
    isOpen = { isOpenAct };
  };

  return (
    <Modal
      isOpen={isOpenAct}
      onRequestClose={onClose}
      contentLabel="Activation Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        content: {
          width: "45rem",
          height: "17rem",
          margin: "auto",
          borderRadius: "20px",
          border: "none",
          padding: "0.5rem",
        },
      }}
    >
      <animated.div style={modalAnimation}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "2rem",
              marginTop: "2.5rem",
              color: "black",
            }}
          >
            Please activate your account by clicking the link below:
          </p>
          <a
            href={activationLink}
            style={{
              color: "#007BFF",
              textDecoration: "none",
              marginTop: "1rem",
              wordBreak: "break-all",
            }}
          >
            {activationLink}
          </a>
          <button
            style={{
              marginTop: "2rem",
              borderRadius: "2rem",
              border: "1px solid #0000",
              boxShadow: "none",
              backgroundColor: "#F1BAA1",
              color: "#ffff",
              padding: "1rem 5rem",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </animated.div>
    </Modal>
  );
};

export default ActivationModal;
