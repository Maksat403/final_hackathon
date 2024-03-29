import React from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";

const CustomModal = ({ isOpen, onClose, message }) => {
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-50px)",
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
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
            {message}
          </p>
          <button
            style={{
              marginTop: "4rem",
              borderRadius: "2rem",
              border: "1px solid #0000",
              boxShadow: "none",
              marginTop: "5rem",
              backgroundColor: "#F1BAA1",
              color: "#ffff",
              padding: "1rem 5rem",
            }}
            onClick={onClose}
          >
            Try again
          </button>
        </div>
      </animated.div>
    </Modal>
  );
};

export default CustomModal;
