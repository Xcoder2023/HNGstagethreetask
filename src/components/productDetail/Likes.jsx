import React from 'react'
import { Arrowleftcircle, Arrowrightcircle, crisp, freshtomatoes, oliveoil, shoppingcart, squash } from '../../assets/Index'
import { CartProvider, useCart } from '../../CartContext';

const Likes = () => {
  const { incrementCart } = useCart();
  return (
    <>
       <div className='flex flex-col gap-5 w-[90%] mx-auto my-10'style={{fontFamily:"poppins"}}>

       <div className='flex justify-between'>
          <p className='text-[#000000] font-semibold text-[24px]'>You may also like</p>
          <div className='flex items-center gap-5'>
            <div>
              <img src={Arrowleftcircle} alt="" />
            </div>
            <div>
              <img src={Arrowrightcircle} alt="" />
            </div>
          </div>
        </div>

       <div className='flex flex-col lg:flex lg:flex-row md:grid md:grid-cols-2  gap-5'>
          <div className='bg-[#fafafa] lg:w-[25%] w-full rounded-md flex flex-col justify-center'>
            <p className='bg-[#67b83a] w-[30%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative lg:bottom-14'>10%</p>
            <div className='flex flex-col items-center'>
              <img src={freshtomatoes} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Farm-Fresh Tomatoes</p>
              <p className='text-[#488129]'>₦2000</p>
              <p className='text-[#9f9c9c] line-through'>₦3500</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div className='bg-[#fafafa] lg:w-[25%] w-full rounded-md flex flex-col justify-center'>
            <div className='flex flex-col items-center'>
              <img src={squash} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Organic Baby Spinach</p>
              <p className='text-[#488129]'>₦5000</p>
              <p className='text-[#9f9c9c] line-through'>₦7000</p>
              <button onClick={incrementCart}  title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div className='bg-[#fafafa] lg:w-[25%] w-full rounded-md flex flex-col justify-center'>
            <div className='flex flex-col items-center'>
              <img src={crisp} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Sweet Bell Hami Mix</p>
              <p className='text-[#488129]'>₦4000</p>
              <p className='text-[#9f9c9c] line-through'>₦7000</p>
              <button onClick={incrementCart}  title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div className='bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-md flex flex-col justify-center'>
          <div className='flex justify-end'>
            <p className='w-[30%] bg-[#F4D03F] flex justify-center p-1 rounded-tr-lg relative bottom-11'>New</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={oliveoil} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Fresh Green wafers</p>
              <p className='text-[#488129]'>₦7000</p>
              <p className='text-[#9f9c9c] line-through'>₦10000</p>
              <button onClick={incrementCart}  title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Likes