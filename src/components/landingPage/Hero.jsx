import React from "react";
import { cash, delivery, securepayment, supportagent } from "../../assets/Index";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="lg:bg-[url('/src/assets/images/customer.png')] bg-[url('/src/assets/images/hero.png')] bg-center bg-no-repeat bg-cover w-full md:h-screen h-[483px] flex md:-mt-0" style={{fontFamily:"poppins"}}>
        <div className="flex flex-col gap-5 w-[90%] m-auto">
          <p className="text-[#F4D03F]">Taste the Freshness</p>
          <p className="font-bold md:text-[56px] text-[28px] md:w-[520px] w-[260px]">
            Experience the True <span className="text-[#7AC74F]">Taste of Fresh</span>
          </p>
          <p className="w-[238px] md:w-[unset]">Farm-Fresh Vegetables Delivered Straight to Your Door</p>
          <Link to ="/productList"><button className="bg-[#7AC74F] p-2 rounded-lg md:w-[20%] w-[50%] text-[#fff] hover:bg-[#2a4a18]">Shop now</button></Link>
        </div>
      </div>
      <div className="md:flex grid grid-cols-2 md:grid-cols-[unset]  justify-center items-center md:gap-5 lg:gap-16 bg-[#fafafa] shadow-xl rounded-2xl relative p-5 bottom-20 lg:left-10  lg:w-[963px] md:w-[581.5px] md:h-[170px] w-[300px] m-auto" style={{fontFamily:"poppins"}}>
        <div className="flex flex-col items-center gap-1">
          <img src={delivery} alt="" />
          <p className="text-[14px] text-[#0a0b0a] font-bold">Free shipping</p>
          <p className="text-[#9f9c9c] md:text-[10px] text-[8px]">Free shipping within lagos</p>
        </div>
        <div className="flex flex-col items-center gap-1 md:text-[10px] text-[8px]">
        <img src={cash} alt="" />
          <p className="md:text-[14px] text-[8px]  text-[#0a0b0a] font-bold">100% Money back</p>
          <p className="text-[#9f9c9c] ">30 days money guarantee</p>
        </div>
        <div className="flex flex-col items-center gap-1 md:text-[10px] text-[8px]">
        <img src={supportagent} alt="" />
          <p className="text-[14px] text-[#0a0b0a] font-bold">Support 24/7</p>
          <p className="text-[#9f9c9c]">We support 24hrs a day</p>
        </div>
        <div className="flex flex-col items-center gap-1 md:text-[10px] text-[8px]">
        <img src={securepayment} alt="" />
          <p className="text-[14px] text-[#0a0b0a] font-bold">Secure payment</p>
          <p className="text-[#9f9c9c]">We ensure secure payment</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
