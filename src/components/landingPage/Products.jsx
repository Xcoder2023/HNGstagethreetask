import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  crisp,
  freshtomatoes,
  hamimix,
  kalegreen,
  oliveoil,
  shoppingcart,
  sprout,
  squash,
  yums,
} from "../../assets/Index";
import { useCart } from "../../CartContext";
import { Link } from "react-router-dom";

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const { addToCart } = useCart();

  const products = [
    {
      img: kalegreen,
      name: "Fresh Kale Greens",
      price: "₦2000",
      oldPrice: "₦3500",
      discount: "12%",
      animation: "fade-up",
    },
    {
      img: sprout,
      name: "Organic Baby Spinach",
      price: "₦5000",
      oldPrice: "₦7000",
      discount: "12%",
      animation: "fade-down",
    },
    {
      img: hamimix,
      name: "Sweet Bell Hami Mix",
      price: "₦4000",
      oldPrice: "₦7000",
      new: true,
      animation: "fade-up",
    },
    {
      img: yums,
      name: "Fresh Green Wafers",
      price: "₦7000",
      oldPrice: "₦10000",
      animation: "fade-down",
    },
    {
      img: freshtomatoes,
      name: "Farm-Fresh Tomatoes",
      price: "₦2000",
      oldPrice: "₦3500",
      discount: "10%",
      animation: "fade-up",
    },
    {
      img: squash,
      name: "Organic Baby Spinach",
      price: "₦5000",
      oldPrice: "₦7000",
      animation: "fade-down",
    },
    {
      img: crisp,
      name: "Sweet Bell Hami Mix",
      price: "₦4000",
      oldPrice: "₦7000",
      animation: "fade-up",
    },
    {
      img: oliveoil,
      name: "Fresh Green Wafers",
      price: "₦7000",
      oldPrice: "₦10000",
      new: true,
      animation: "fade-down",
    },
  ];
  return (
    <div
      className="w-[90%] m-auto flex flex-col gap-5 my-5 overflow-hidden"
      style={{ fontFamily: "Poppins" }}
    >
      <p className="font-bold text-[28px] text-[#488129] text-center">
        Popular Product
      </p>
      <ul className="text-[#5a5555] flex justify-between items-center md:w-[55%] w-full m-auto">
        <li className="text-[#589c32]">All</li>
        <li>Featured</li>
        <li>Deal</li>
        <li>New</li>
        <li>On sale</li>
      </ul>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            data-aos={product.animation}
            className="bg-[#fafafa] h-[399px] w-full rounded-md flex flex-col"
          >
            {product.discount && (
              <div className="flex">
                <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#fff] relativ md:bottom- bottom-9">
                {product.discount}
              </p>
              </div>
            )}
            {product.new && (
              <div className="flex justify-end">
                <p className="w-[14%] bg-[#F4D03F] flex justify-center p-1 rounded-tr-lg relativ bottom-1">
                  New
                </p>
              </div>
            )}
           <div className="flex justify-center items-center m-auto">
           <div className="flex flex-col items-center justify-center gap-2">
              <div><img src={product.img} alt={product.name}/></div>
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                {product.name}
              </p>
              <p className="text-[#488129]">{product.price}</p>
              <p className="text-[#9f9c9c] line-through">{product.oldPrice}</p>
             <Link to = "/productList"> <button
                title="visit to shop"
                className="bg-[#7AC74F] p-2 rounded-lg  text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]"
              >
                <img src={shoppingcart} alt="shopping cart" />
                add
              </button></Link>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
