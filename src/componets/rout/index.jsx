import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../products/index";
import ProductDetails from "../productDetails/index";
import Search from "../../pages/search/index";
function index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default index;
