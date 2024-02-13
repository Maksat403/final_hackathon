import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  ingridients: [],
  pages: 4,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload.results };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_INGRIDIENTS:
      return { ...state, ingridients: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //! CONFIG
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };

  //! CREATE

  const createProduct = async (newProduct) => {
    try {
      // Проверяем, есть ли данные об ингредиентах в объекте newProduct
      if (newProduct.has("ingridients")) {
        // Преобразуем данные об ингредиентах в формат, ожидаемый сервером
        const ingridientsData = newProduct.get("ingridients");
        const ingridientsDict = {};
        Array.from(ingridientsData).forEach(([key, value]) => {
          ingridientsDict[key] = value;
        });

        // Заменяем данные об ингредиентах в объекте FormData
        newProduct.set("ingridients", JSON.stringify(ingridientsDict));
      }

      const res = await axios.post(`${API}/dish/`, newProduct, getConfig());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //! CATEGORIES/INGRIDIENTS
  const getIngridients = async () => {
    try {
      const res = await axios(`${API}/ingridients/get/`, getConfig());
      // Распаковываем данные об ингредиентах из ответа сервера
      const ingridientsData = res.data;
      // Отправляем данные об ингредиентах в редуктор
      dispatch({
        type: ACTIONS.GET_INGRIDIENTS,
        payload: ingridientsData,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      await axios.delete(`${API}/dish/${id}`, getConfig());
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
    ingridients: state.ingridients,
    getIngridients,
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
