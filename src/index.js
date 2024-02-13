import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";

import AuthContext from "./context/AuthContext";
import Loader from "./components/homePage/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Loader />
    <ProductContextProvider>
      <AuthContext>
        <App />
      </AuthContext>
    </ProductContextProvider>
  </BrowserRouter>
);
