import axios from "axios";
import React, { createContext, useReducer } from "react";
export const productContext = createContext();

const API = "http://34.16.110.19/api";

const INIT_STATE = {
  products: [],
  oneProducts: [],
  categories: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCategories() {
    try {
      const res = await axios(`${API}/dish/`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      console.log(tokens, "Tokens");

      const res = await axios.post(`${API}/dish/`, newProduct);
      console.log(res, "Product Created");
      navigate("/productList");
    } catch (error) {
      console.log(error);
    }
  }

  // const Authorization = `Bearer ${tokens.access}`;
  // const config = {
  //   headers: { Authorization },
  // };
  // return config;
  return (
    <productContext.Provider
      value={{ createProduct, getCategories, categories: state.categories }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
