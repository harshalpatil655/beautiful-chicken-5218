import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { HomePage } from "./HomePage";
import Product from "./Product";
import Shopping from "./Shopping";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
