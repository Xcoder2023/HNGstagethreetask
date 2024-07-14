import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Cart from "../components/productDetail/Checkout";
import Checkout from "../components/checkoutPage/Cart";
import Shop from "../components/productListPage/Shop";
import ScrollToTop from "../ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/productList" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
