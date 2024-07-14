import React from 'react';
import { brandlogo, cart } from '../../assets/Index';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';

const NavMini = () => {
  const { cartCount } = useCart();

  return (
    <>
      <div className='hidden lg:block sticky top-0 z-10 bg-[#ffff] w-full'>
        <div className="flex justify-between items-center w-[90%] m-auto ">
          <div className="flex items-center gap-2 py-5">
            <Link to="/"><img src={brandlogo} alt="" title='home page' width={141.02} /></Link>
            <input
              type="search"
              placeholder="search for product"
              className="border border-[#7AC74F] p-2 rounded-lg w-[466px] outline-none"
            />
            <button className="bg-[#7AC74F] p-2 rounded-lg text-[#fff] w-[111px]">search</button>
          </div>
          <div className="flex gap-5 items-center">
            <Link to="/cart" className="relative">
              <img src={cart} alt="" width={24} height={27} title='see the the items in your cart'/>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button title='click to register with us' className="bg-[#7AC74F] p-2 rounded-lg text-[#fff] w-[157px]">My Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMini;
