import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { HomePage } from "./HomePage";
import LoginPage from "./LoginPage";
import Product from "./Product";
import Shopping from "./Shopping";
import CreateAccount from "./CreateAccount";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="shopping/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/singup" element={<CreateAccount />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
