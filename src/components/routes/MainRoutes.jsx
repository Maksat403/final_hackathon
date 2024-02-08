import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../auth/Register";
import StartPage from "../pages/StartPage";
import Login from "../auth/Login";
import ResetPasswordRequest from "../auth/ResetPasswordRequest";
import ResetPassword from "../auth/ResetPassword";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordResetReq" element={<ResetPasswordRequest />} />
      <Route path="/passwordReset" element={<ResetPassword />} />

      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
    </Routes>
  );
};

export default MainRoutes;
