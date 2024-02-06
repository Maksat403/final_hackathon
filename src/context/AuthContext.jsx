import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const API = "http://34.16.110.19/api";

  //! REGISTER
  const handleRegister = async (formData, navigate) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/user/register/`, formData);
      console.log(res, "regisr responce");
      navigate("/login");
    } catch (error) {
      console.log(error, "register error");
      setError(
        error.response?.data ? Object.values(error.response.data).flat(2) : null
      );
    } finally {
      setLoading(false);
    }
  };

  //! LOGIN

  const handleLogin = async (formData, email, navigate) => {
    try {
      const res = await axios.post(`${API}/user/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      console.log(res, "res");
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(Object.values(error.response.data).flat(2));
    }
  };

  const values = { handleRegister, handleLogin, setError, error };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
