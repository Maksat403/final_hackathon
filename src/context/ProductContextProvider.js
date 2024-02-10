// import axios from "axios";
// import React, { createContext, useReducer } from "react";
// export const productContext = createContext();

// const API = "http://34.16.110.19/api";

// const INIT_STATE = {
//   products: [],
//   oneProducts: [],
//   categories: [],
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case "GET_CATEGORIES":
//       return { ...state, categories: action.payload };
//     default:
//       return state;
//   }
// };

// const ProductContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   async function getCategories() {
//     try {
//       const res = await axios(`${API}/dish/`);
//       dispatch({
//         type: "GET_CATEGORIES",
//         payload: res.data.results,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function createProduct(newProduct, navigate) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       console.log(tokens, "Tokens");

//       const res = await axios.post(`${API}/dish/`, newProduct);
//       console.log(res, "Product Created");
//       navigate("/productList");
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   // const Authorization = `Bearer ${tokens.access}`;
//   // const config = {
//   //   headers: { Authorization },
//   // };
//   // return config;

//   return (
//     <productContext.Provider
//       value={{ createProduct, getCategories, categories: state.categories }}
//     >
//       {children}
//     </productContext.Provider>
//   );
// };

// export default ProductContextProvider;

import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
  pages: 13,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload.results };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //! Config

  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens")); // вытаскиваем токены
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };
  //! CREATE
  const createProduct = async (newProduct) => {
    try {
      const res = await axios.post(`${API}/dish/`, newProduct, getConfig());
      // console.log(res);
      // console.log(getConfig);
      navigate("/productList");
    } catch (error) {
      console.log(error);
    }
  };
  // //! CATEGORIES
  // const getCategories = async () => {
  //   const res = await axios(`${API}/category/list/`, getConfig());
  //   dispatch({
  //     type: ACTIONS.GET_CATEGORIES,
  //     payload: res.data.results,
  //   });
  // };
  //! GET
  const getProducts = async () => {
    try {
      const { data } = await axios(
        `${API}/dish/${window.location.search}`,
        getConfig()
      );
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! DELETE
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API}/dish/${id}/`, getConfig());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  //! GET_ONE_PRODUCT
  const getOneProduct = async (id) => {
    try {
      const { data } = await axios(`${API}/dish/${id}/`, getConfig());
      dispatch({
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! EDIT
  const editItem = async (id, newProduct) => {
    try {
      await axios.patch(`${API}/dish/${id}/`, newProduct, getConfig());
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    categories: state.categories,
    createProduct,
    getProducts,
    products: state.products,
    pages: state.pages,
    deleteItem,
    getOneProduct,
    oneProduct: state.oneProduct,
    editItem,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
