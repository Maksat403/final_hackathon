import React from "react";
import { useSpring, animated } from "react-spring";

const ActivationModal = ({ onClose, activationLink }) => {
  const modalAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={modalAnimation}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "62rem",
          height: "55%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "3rem",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
          borderRadius: "8px",
          zIndex: 5,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.8rem" }}>
          Please check your{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "red" }}
            href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKXGp1VDLth7ZlTToq9iPMD6THjLcCE8spxYHntkyHPYYUEudSJyrbwS3KPjDNkP8I-s63IIAfRwg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-972723250%3A1707404490292938&theme=glif"
          >
            email
          </a>
          . We have sent you an account activation code.
        </p>
        <p style={{ fontSize: "1.8rem" }}>
          If you don't see the email, check the Spam folder.
        </p>
        <button
          style={{ backgroundColor: "#469597", marginTop: "4rem" }}
          onClick={onClose}
        >
          Okey
        </button>
      </div>
    </animated.div>
  );
};

export default ActivationModal;
