import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/index";
import Cart from "../cart/index";
import Products from "../products/index";
import ProductDetails from "../productDetails/index";
import Search from "../search/index";
function index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default index;
