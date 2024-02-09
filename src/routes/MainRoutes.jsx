import React from "react";
import StartPage from "../components/pages/StartPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
import ProductItem from "../components/products/ProductItem";
import ProductList from "../components/products/ProductList";

const MainRoutes = () => {
  // const PUBLIC_ROUTES = [{ id: 1, link: "/", element: <StartPage /> }];
  // return (
  //   <div>
  //     <Routes>
  //       {PUBLIC_ROUTES.map((elem) => (
  //         <Route path={elem.link} key={elem.id} element={elem.element} />
  //       ))}
  //       {user
  //         ? PRIVATE_ROUTES.map((elem) => (
  //             <Route
  //               key={elem.id}
  //               path={elem.link}
  //               element={
  //                 user.email === ADMIN ? elem.element : <Navigate to="*" />
  //               }
  //             />
  //           ))
  //         : null}
  //     </Routes>
  //   </div>
  // );
  // это первый способ

  // второй способ
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/productList" element={<ProductList />} />
      {/* <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/productItem" element={<ProductItem />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} /> */}
    </Routes>
  );
};

export default MainRoutes;
