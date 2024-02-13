import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "../components/pages/StartPage";
import AddProduct from "../components/products/AddProduct";
import ProductList from "../components/products/ProductList";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import ResetPasswordRequest from "../components/auth/ResetPasswordRequest";
import ResetPassword from "../components/auth/ResetPassword";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordResetReq" element={<ResetPasswordRequest />} />
      <Route path="/passwordReset" element={<ResetPassword />} />
      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
    </Routes>
  );
};

export default MainRoutes;
