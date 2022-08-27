import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { CheckoutPage } from "./CheckoutPage";
import { Account } from "./CreateAccount";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/signup" element={<Account />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
