import React, { useState } from "react";
import { message } from "antd";
import {
  Mastercard,
  arrowdown,
  arrowforward,
  payPal,
  payoneer,
  visa,
} from "../../assets/Index";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import NavMini from "../navbar/NavMini";
import HamburgerMenu from "../navbar/HamburgerMenu";
import ToggleButton from "./ToggleButton";
import ProductComponent from "./ProductComponent";
import { useCart } from "../../CartContext";

const Checkout = () => {
  const {
    cart,
    cartCount,
    removeFromCart,
    clearCart,
  } = useCart();
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const deliveryFee = 200;
  const taxRate = 0.05; 
  
  const subtotal = cart.reduce((sum, item) => sum + (item.current_price[0]?.NGN[0] || 0) * item.quantity, 0);
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + deliveryFee + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      cardNumber.trim() === "" ||
      expirationDate.trim() === "" ||
      cvv.trim() === ""
    ) {
      message.error("Please fill in all the fields.");
    } else {
      console.log('Checkout:', { name, cardNumber, expirationDate, cvv, grandTotal });
      message.success("Submit successful!");
      setName("");
      setCardNumber("");
      setExpirationDate("");
      setCvv("");
    }
  };
  

  return (
    <>
      <NavMini />
      <div className="sticky top-0 z-10 lg:hidden">
        <HamburgerMenu />
      </div>
      <div
        className="flex flex-col lg:flex-row md:gap-5 w-[90%] mx-auto my-10"
        style={{ fontFamily: "poppins" }}
      >
        <div className="flex flex-col shadow-lg rounded-2xl md:p-5 p-2 md:h-[660px lg:w-[80%]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center cursor-pointer">
              <div>
                <Link to="/productList">
                  <img src={arrowforward} alt="" />
                </Link>
              </div>
              <p title="click the arrow to shop more">Continue Shopping</p>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">Cart</p>
              <div className="flex justify-between text-[12px] md:text-[17px]">
                <p>You have {cartCount} items in your cart</p>
                <div className="flex items-center">
                  <p className="text-[#323232] ">Sort by: Date</p>
                  <div>
                    <img src={arrowdown} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-page flex flex-col gap-5">
              {cart.map((product) => (
                <ProductComponent
                  key={product.name}
                  product={product}
                  onDelete={() => removeFromCart(product.name)}
                />
              ))}
              <div className="flex justify-end">
              <button title="click to clear your cart"
                onClick={clearCart}
                className="bg-red-500 text-white p-2 rounded-lg mb-4 self-end"
              >
                Clear Cart
              </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center shadow-lg rounded-xl p-5 gap-5 md:h-[756px]"
          style={{ fontFamily: "poppins" }}
        >
          <ToggleButton />
          <p className="text-[#898483] text-[14px]">
            Delivery date: July 6th 2024{" "}
          </p>
          <p className="text-[14px]">Card type</p>

          <div className="flex justify-between">
            <div>
              <img src={Mastercard} alt={""} width={70} />
            </div>
            <div>
              <img src={visa} alt={""} width={70} />
            </div>
            <div>
              <img src={payPal} alt={""} width={70} />
            </div>
            <div>
              <img src={payoneer} alt={""} width={70} />
            </div>
          </div>

          <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <p className="text-[14px]">Name on card</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="full Name"
            required
            className="p-2 border rounded-lg w-[100%] outline-none"
          />
        </div>
        <div>
          <p className="text-[14px]">Card Number</p>
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="0000 0000 0000 0000"
            required
            className="p-2 border rounded-lg w-[100%] outline-none"
          />
        </div>
        <div className="flex gap-5 w-[100%] items-center">
          <div className="">
            <p className="text-[14px]">Expiration Date</p>
            <input
              type="number"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              placeholder="mm/yy"
              required
              className="p-2 border rounded-lg w-[100%] outline-none"
            />
          </div>
          <div>
            <p className="text-[14px]">CVV</p>
            <input
              type="number"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              required
              className="p-2 border rounded-lg w-[100%] outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-[14px]">Subtotal</p>
            <p className="font-bold text-[14px] text-[#0a0b0a]">₦{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px]">Delivery</p>
            <p className="font-bold text-[14px] text-[#0a0b0a]">₦{deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px]">Tax (5%)</p>
            <p className="font-bold text-[14px] text-[#0a0b0a]">₦{tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px]">Total (tax incl.)</p>
            <p className="font-bold text-[14px] text-[#0a0b0a]">₦{grandTotal.toFixed(2)}</p>
          </div>
        </div>
        <button title="click to place your order"
          type="submit"
          className="bg-[#7AC74F] p-2 rounded-lg text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]"
        >
          Checkout ₦{grandTotal.toFixed(2)}
        </button>
      </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
