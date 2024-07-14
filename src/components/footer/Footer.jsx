import React from "react";
import {
  Bancontact,
  Mastercard,
  apple,
  facebook,
  googleplay,
  group,
  instagram,
  linkedin,
  payPal,
  payoneer,
  twittericon,
  visa,
} from "../../assets/Index";
import Mobilefooter from "./Mobilefooter";

const Footer = () => {
  return (
    <>
      <div className="hidden bg-[#589c32] lg:flex justify-center items-center text-[#ffff]" style={{fontFamily:"poppins"}}>
        <div className="flex justify-between py-10  w-[90%] m-auto">
          <div className="flex flex-col gap-5 w-[40%]">
            <div>
              <img src={group} alt="" />
            </div>
            <p className="w-[430px]">
              At FarmFresh, we are committed to delivering the freshest and
              healthiest vegetables straight from the farm to your table. Our
              mission is to make healthy eating easy and accessible for
              everyone. Join us on our journey towards a healthier lifestyle.
            </p>
            <div className="flex gap-5">
              <div>
                <img src={googleplay} alt="" width={150}/>
              </div>
              <div>
                <img src={apple} alt="" width={150}/>
              </div>
            </div>
            <div className="flex gap-2">
              <div><img src={facebook} alt={""} /></div>
              <div><img src={instagram} alt={""} /></div>
              <div><img src={twittericon} alt={""} /></div>
              <div><img src={linkedin} alt={""} /></div>
            </div>
          </div>

          <div className="flex w-[50%] gap-10 pt-5">
          <div className="w-[156px]">
            <p>My Account</p>
            <ul>
              <li>Log In</li>
              <li>Register</li>
              <li>Order History</li>
              <li>Wishlist</li>
              <li>Account Settings</li>
            </ul>
          </div>

          <div className="w-[174px]">
            <p>Helps</p>
            <ul>
              <li>FAQs</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="w-[128px]">
            <p>Proxy</p>
            <ul>
            <li>About Us</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Sustainability</li>
            <li>Sustainability</li>
            <li>Community</li>
            </ul>
          </div>
        </div>
          </div>

      </div>

      <div className="hidden lg:flex justify-end items-end gap-5 py-5 w-[90%] mx-auto">
        <div>
          <img src={Bancontact} alt={""} width={70}/>
        </div>
        <div>
          <img src={payPal} alt={""} width={70}/>
        </div>
        <div>
          <img src={Mastercard} alt={""} width={70}/>
        </div>
        <div>
          <img src={payoneer} alt={""} width={70}/>
        </div>
        <div>
          <img src={visa} alt={""} width={70}/>
        </div>
      </div>
      <Mobilefooter />
    </>
  );
};

export default Footer;
