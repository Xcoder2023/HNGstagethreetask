import React from "react";
import {
  arrowright,
  hami,
  lovestar,
  shoppingcart,
  stars,
} from "../../assets/Index";
import Likes from "./Likes";
import Footer from "../footer/Footer";
import NavMini from "../navbar/NavMini";
import HamburgerMenu from "../navbar/HamburgerMenu";
import { useCart } from '../../CartContext';

const Cart = () => {
  const { incrementCart } = useCart();
  return (
    <>
      <NavMini />
        <div className="flex flex-col justify-center">
          <div className="hidden md:flex items-center text-[14px] w-[90%] mx-auto">
            <p>Home page</p>
            <div>
              <img src={arrowright} alt="" />
            </div>
            <p>Popular Product</p>
            <div>
              <img src={arrowright} alt="" />
            </div>
            <p>Sweet Bell Hami Mix</p>
          </div>

          <div className="sticky top-0 z-10 lg:hidden">
            <HamburgerMenu />
          </div>

          <div className="flex flex-col w-[90%] m-auto my-10">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col shadow-2xl rounded-xl p-5 lg:w-[33.33%] h-[455px]">
                <div className="flex justify-end">
                  <img src={lovestar} alt="" />
                </div>
                <div className="flex justify-center">
                  <img src={hami} alt="" />
                </div>
              </div>
              <div>
                <p className="lg:text-[40px] text-[28px] font-bold text-[#000000] w-[336px]">
                  Sweet Bell Hami Mix
                </p>
                <p className="lg:w-[360px]">
                  Indulge in the vibrant and delicious flavors of our Sweet Bell
                  Hami Mix, a delightful assortment of the freshest bell
                  peppers. Perfectly packaged for convenience, this mix is ideal
                  for adding a splash of color and a burst of sweetness to your
                  meals.
                </p>
                <div className="flex items-center">
                  <img src={stars} alt="" />
                  <p className="text-[#000000] text-[24px] font-bold">4.5</p>
                  <p className="text-[18px]">(7 reviews)</p>
                </div>
                <p className="text-[#000000] font-bold text-[14px]">
                  Total Price
                </p>
                <p className="hidden lg:block font-bold text-[48px] text-[#488129]">
                  ₦4000
                </p>
                <p className="hidden lg:block text-[24px] text-[#9f9c9c] line-through">
                  ₦7000
                </p>
                <button onClick={incrementCart}
                  title="click to add to your cart"
                  className="hidden md:flex bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
                >
                  <img src={shoppingcart} alt="" />
                  add to shopping cart
                </button>

                <div className="lg:hidden flex items-center gap-5">
                  <p className="font-bold text-[32px] text-[#488129]">₦4000</p>
                  <p className="text-[16px] text-[#9f9c9c] line-through">
                    ₦7000
                  </p>
                  <button
                    title="click to add to your cart"
                    className="bg-[#bce3a7] text-[#396520] p-2 rounded-lg flex justify-center items-center"
                  >
                    <img src={shoppingcart} alt="" />
                    add to cart
                  </button>
                </div>
              </div>

              <div className="lg:hidden flex flex-col justify-center shadow-2xl rounded-xl py-2 px-2 my-5 w-[95%] mx-auto">
                <p className="font-semibold text-[24px] text-[#000000]">
                  Usage Tips
                </p>
                <ul className="flex flex-col list-disc gap-5 pl-10">
                  <li>Add to salads for a vibrant and nutritious touch.</li>
                  <li>Use in stir-fries for a sweet and colorful twist.</li>
                  <li>Enjoy as a fresh and healthy snack</li>
                </ul>
              </div>

              <div className="lg:w-[33.33%]  shadow-2xl rounded-xl p-5 gap-5">
                <p className="text-[#000000] text-[24px] font-semibold">
                  Key Features
                </p>
                <ul className="flex flex-col gap-5 my-5 pl-7 list-disc text-[#000000]">
                  <li className="lg:w-[313px]">
                    <span className="font-semibold text-[#000000]">
                      Fresh and Flavorful:
                    </span>
                    A mix of red, yellow, and orange bell peppers, known for
                    their sweet and crisp taste.
                  </li>
                  <li>
                    <span className="font-semibold text-[16px] text-[#000000]">
                      Nutritious:
                    </span>
                    Packed with vitamins A and C, antioxidants, and essential
                    nutrients for a healthy diet.
                  </li>
                  <li>
                    <span className="font-semibold text-[16px] text-[#000000]">
                      Convenient Packaging:
                    </span>
                    Pre-washed and ready to use, making meal preparation quick
                    and easy.
                  </li>
                </ul>
                <hr />
                <div className="flex flex-col my-5">
                  <p className="font-semibold text-[18px] text-[#9d8009]">
                    Review
                  </p>
                  <div className="flex flex-col gap-5 ">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-[18px] text-[#000000]">
                        Jane D
                      </p>
                      <div>
                        <img src={stars} alt="" />
                      </div>
                    </div>
                    <p className="">
                      The Sweet Bell Hami Mix is a game-changer for my meal
                      preps. Fresh and flavorful every time!
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-[18px] text-[#000000]">
                        Mark R.
                      </p>
                      <div>
                        <img src={stars} alt="" />
                      </div>
                    </div>
                    <p className="text-[14px]">
                      My kids love the colorful bell peppers in their
                      lunchboxes. A healthy and tasty option!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center w-[452px] shadow-2xl rounded-xl py-2 px-3 relative bottom-40 -mb-40">
              <p className="font-semibold text-[24px] text-[#000000]">
                Usage Tips
              </p>
              <ul className="flex flex-col list-disc gap-5 pl-10">
                <li>Add to salads for a vibrant and nutritious touch.</li>
                <li>Use in stir-fries for a sweet and colorful twist.</li>
                <li>Enjoy as a fresh and healthy snack</li>
              </ul>
            </div>
          </div>
        </div>
      <Likes />
      <Footer />
    </>
  );
};

export default Cart;
