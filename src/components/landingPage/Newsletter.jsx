import React from "react";
import { flower, redgrape } from "../../assets/Index";

const Newsletter = () => {
  return (
    <>
      <div className="flex justify-between items-center py-10 bg-[#fafafa] w-full md:h-[560px]"style={{fontFamily:"poppins"}}>
        <div className="relative md:bottom-32 bottom-24 md:-mb-4">
          <img src={redgrape} alt="" className="w-[60px md:w-[unset]"/>
        </div>

        <div className="bg-[#e9f6e2] shadow-xl md:p-5 p-2 w-[342px md:w-[unset] md:h-[340px] rounded-md flex flex-col justify-center">
          <p className="text-[8px] md:text-[16px]">Stay Fresh with Our Updates!</p>
          <p className="md:text-[18px] text-[8.5px] md:w-[600px]">
            Never miss out on our latest arrivals, exclusive discounts, and
            fresh veggie tips.
          </p>
          <p className="text-[#7AC74F] md:text-[24px] text-[12px]  font-semibold md:w-[664px]">
            Subscribe today and enjoy a fresher way to shop!
          </p>
          <div className="flex items-center gap-2 py-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded-lg w-[10em] lg:w-[20em]  outline-none"
            />
            <button className="bg-[#7AC74F]  p-2 rounded-lg text-[#fff]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex relative md:top-32 top-20">
          <img src={flower} alt="" className=""/>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
