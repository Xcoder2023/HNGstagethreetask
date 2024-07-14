import React,{useEffect} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  Arrowleftcircle,
  Arrowrightcircle,
  coffeetea,
  fruits,
  grayline,
  greenline,
  juicecup,
  meat,
  strawbery,
  tomatoes,
  vegetables,
} from "../../assets/Index";
import { Link } from "react-router-dom";

const Categories = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className="flex flex-col gap-3 w-[90%] mx-auto overflow-hidden"style={{fontFamily:"poppins"}}>
        <p data-aos=""  className="font-bold text-[28px] text-[#488129] text-center overflow-hidden">
          Featured Categories
        </p>
        <div className="hidden md:flex justify-end gap-2 items-center">
          <img src={Arrowleftcircle} alt="" />
          <img src={Arrowrightcircle} alt="" />
        </div>

        <div className="md:flex justify-center gap-5 grid grid-cols-2 md:grid-cols-[unset]">
          <div data-aos="fade-up"  className="bg-[#d3ecc4] hover:bg-[#2a4a18] hover:text-[#ffff] flex flex-col items-center justify-center gap-4 rounded-xl lg:w-[25%] w-full text-[#2a4a18]">
            <img src={vegetables} alt="" />
            <p className="text-[24px] font-semibold">
              Vegetables
            </p>
          </div>

          <div data-aos="fade-down"  className="bg-[#d3ecc4] hover:bg-[#2a4a18] hover:text-[#ffff] flex flex-col items-center justify-center gap-4 rounded-xl lg:w-[25%] w-full text-[#2a4a18]">
            <img src={strawbery} alt="" />
            <p className="text-[24px] font-semibold">
              Strawberry
            </p>
          </div>

          <div data-aos="fade-up"  className="bg-[#d3ecc4] hover:bg-[#2a4a18] hover:text-[#ffff] flex flex-col items-center justify-center gap-4 rounded-xl lg:w-[25%] w-full text-[#2a4a18]">
            <img src={meat} alt="" />
            <p className="text-[24px] font-semibold">Meats</p>
          </div>

          <div data-aos="fade-down"  className="bg-[#d3ecc4] hover:bg-[#2a4a18] hover:text-[#ffff] flex flex-col items-center justify-center gap-4 rounded-xl lg:w-[25%] w-full md:h-[290px] h-full text-[#2a4a18]">
            <img src={coffeetea} alt="" />
            <p className="text-[24px] text-center md:text-start font-semibold">
              Coffee and Tea
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-between border border-[#488129] rounded-xl p-5 h-[277px] my-5">
          <div data-aos="fade-left"  className="bg-[#e3e3e3] rounded-xl w-[277px]">
            <p className="bg-[#a6da8a] w-[30%] flex justify-center p-1 rounded-tl-lg">
              20% OFF
            </p>
            <img src={tomatoes} alt="" />
          </div>

          <div data-aos="fade-right"  className="flex flex-col gap-4 justify-center">
            <p className="text-[40px] font-bold text-[#0a0b0a] hidden lg:block">Fresh Tomato</p>
            <div className="flex gap-5">
              <p>₦5000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
            </div>
            <div className="">
              <div className="flex justify-between text-[#726c6c]">
                <p>Available: 89</p>
                <p>Already Sold: 120</p>
              </div>
              <div>
                <img
                  src={greenline}
                  alt=""
                  className="relative top-3.5 -mt-3"
                />
                <img src={grayline} alt="" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
                <p>10</p>
                <p>DAYS</p>
              </div>

              <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
                <p>15</p>
                <p>HR</p>
              </div>

              <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
                <p>45</p>
                <p>MINS</p>
              </div>

              <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
                <p>14</p>
                <p>SEC</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"  className="lg:hidden flex flex-col border border-[#488129] rounded-xl p-2 gap-5 my-5">

          <div className="bg-[#a6da8a] w-[30%] flex p-1 rounded-tl-lg relative bottom-2 right-2">
            <p>20% OFF</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-5">
            <div className="bg-[#e3e3e3] rounded-xl">
              <div>
                <img src={tomatoes} alt="" />
              </div>
            </div>
            <div>
              <p className="text-[40px] font-bold text-[#0a0b0a] lg:hidden">
                Fresh Tomato
              </p>
              <div className="flex gap-5">
                <p>₦5000</p>
                <p className="text-[#9f9c9c] line-through">₦7000</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-between text-[#726c6c]">
              <p>Available: 89</p>
              <p>Already Sold: 120</p>
            </div>
            <div className="">
              <div className="relative top-[6px]">
                <img src={greenline} alt="" width={195}/>
              </div>
              <div className="">
                <img src={grayline} alt="" />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
              <p>10</p>
              <p>DAYS</p>
            </div>

            <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
              <p>15</p>
              <p>HR</p>
            </div>

            <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
              <p>45</p>
              <p>MIN</p>
            </div>

            <div className="bg-[#67b83a] text-[#ffff] flex flex-col items-center rounded-lg p-2 w-[58px]">
              <p>14</p>
              <p>SEC</p>
            </div>
          </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5 my-5">
          <div data-aos="fade-left"   className="bg-[#d3ecc4] hover:bg-[#2a4a18] flex justify-center items-center rounded-lg lg:w-[50%] w-full h-[227.9px] lg:h-[340px] pl-5">
            <div>
              <p className="lg:text-[28px] text-[20px] lg:w-[268px]  font-semibold">
                Nourish Your Body with Freshness
              </p>
              <Link to = "/productList"><button title="Shop to Nourish Your Body with Freshness" className="bg-[#7AC74F] p-2 rounded-lg text-[#fff]">
                Shop now
              </button></Link>
            </div>
            <div>
              <img src={juicecup} alt="" width={182.32}/>
            </div>
          </div>
          <div data-aos="fade-right"  className="bg-[#d3ecc4] hover:bg-[#2a4a18] flex justify-between items-center rounded-lg lg:w-[50%] w-full h-[227.9px] lg:h-[340px] pl-5">
            <div>
              <p className="lg:text-[28px] text-[20px] lg:w-[263px] w-[176.9px] font-semibold">
                From Our Fields to Your Plate
              </p>
             <Link to ="/productList"> <button title="Shop to Nourish Your Body with Freshness" className="bg-[#7AC74F] p-2 rounded-lg  text-[#fff]">
                Shop now
              </button></Link>
            </div>
            <div>
              <img src={fruits} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
