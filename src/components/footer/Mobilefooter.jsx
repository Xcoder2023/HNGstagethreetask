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

const Mobilefooter = () => {
  return (
    <>
      <div className="lg:hidden bg-[#589c32] flex flex-col justify-center items-cente text-[#ffff]"style={{fontFamily:"poppins"}}>
        <div className="flex flex-col justify-between py-10 gap-5  w-[90%] m-auto">
          <div className="flex flex-col gap-2">
            <div>
              <img src={group} alt="" />
            </div>
            <p className=" text-[12.4px]">
              At FarmFresh, we are committed to delivering the freshest and
              healthiest vegetables straight from the farm to your table. Our
              mission is to make healthy eating easy and accessible for
              everyone. Join us on our journey towards a healthier lifestyle.
            </p>
          </div>

          <div className="flex justify-center md:justify-between">
            <div className="w-[114.74px] flex flex-col gap-2">
              <p className="font-semibold text-[13px]">My Account</p>
              <ul className="text-[11.79px] flex flex-col gap-2">
                <li>Log In</li>
                <li>Register</li>
                <li>Order History</li>
                <li>Wishlist</li>
                <li>Account Settings</li>
              </ul>
            </div>

            <div className="w-[128.74px] flex flex-col gap-2">
              <p className="font-semibold text-[13px]">Helps</p>
              <ul className="text-[11.79px] flex flex-col gap-2">
                <li>FAQs</li>
                <li>Shipping & Delivery</li>
                <li>Returns & Refunds</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="w-[93.74px] flex flex-col gap-2">
              <p className="font-semibold text-[13px]">Proxy</p>
              <ul className="text-[11.79px] flex flex-col gap-2">
                <li>About Us</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Sustainability</li>
                <li>Sustainability</li>
                <li>Community</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <img src={googleplay} alt="" width={150} />
            </div>
            <div>
              <img src={apple} alt="" width={150} />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <img src={facebook} alt={""} />
            </div>
            <div>
              <img src={instagram} alt={""} />
            </div>
            <div>
              <img src={twittericon} alt={""} />
            </div>
            <div>
              <img src={linkedin} alt={""} />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center gap-5 h-[100px] px-3">
        <div>
          <img src={Bancontact} alt={""} width={100}/>
        </div>
        <div>
          <img src={payPal} alt={""} width={100} />
        </div>
        <div>
          <img src={Mastercard} alt={""} width={100} />
        </div>
        <div>
          <img src={payoneer} alt={""} width={100} />
        </div>
        <div>
          <img src={visa} alt={""} width={100} />
        </div>
      </div>
    </>
  );
};

export default Mobilefooter;
