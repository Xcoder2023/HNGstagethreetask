import React,{useEffect} from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { fruitsandveges } from '../../assets/Index'
import { Link } from 'react-router-dom'

const Promo = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className='bg-[#A6DA8A] hover:bg-[#2a4a18] w-full overflow-hidden'style={{fontFamily:"poppins"}}>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center p-2 '>
        <div data-aos="fade-up">
          <img src={fruitsandveges} alt="" />
        </div>
        <div data-aos="fade-down" className='flex flex-col items-center justify-center gap-2 md:gap-0'>
          <p className='font-bold md:text-[48px] text-[28px] text-[#396520]
           md:w-[428px] w-[250px]'>Save up to 30% 
          on Fresh Veggies!</p>
          <p className='md:text-[16px] text-[11px] md:w-[435px] w-[262px] text-center md:text-start'>Start your daily shopping with our exclusive offers and 
          enjoy unbeatable freshness.</p>
          <Link to ='/productList'><button title='shop to get 30% discount' className="bg-[#7AC74F] p-2 rounded-lg md:w-[272px] text-[#fff]">Shop Now and Save</button></Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Promo