import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import ProductCart from "./pages/ProductCart/ProductCart";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductPageBrand from "./pages/ProductPage/ProductPageBrand";
import Register from "./pages/Register/Register";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="/card-man-hinh" element={<ProductPage />} />
          <Route path="/card-man-hinh/:id" element={<ProductPageBrand />} />
          <Route path="/chi-tiet/:id" element={<DetailProduct />} />
          <Route path="/gio-hang" element={<ProductCart />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
