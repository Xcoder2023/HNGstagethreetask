import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import Promo from "./Promo";
import Vegetables from "./Vegetables";
import Newsletter from "./Newsletter";
import Footer from "../footer/Footer";
import { Nav } from "../navbar/Nav";
import { CartProvider } from "../../CartContext";

const ProductList = () => {
  return (
    <>
      <CartProvider >
        <Nav />
        <Hero />
        <div className="overflow-hidden">
        <Categories />
        <Products />
        <Promo />
        <Vegetables />
        </div>
        <Newsletter />
        <Footer />
      </CartProvider>
    </>
  );
};

export default ProductList;
