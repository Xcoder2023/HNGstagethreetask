import React, { useState } from 'react';
import { brandlogo } from '../../assets/Index';
import { Link } from 'react-router-dom';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" style={{fontFamily:"poppins"}}>
      <div className="flex items-center justify-between p-4 bg-white shadow-md px-8">
        <Link to="/"><img src={brandlogo} alt="Logo" width={150}/></Link>
        <div className="flex flex-col justify-between w-8 h-6 cursor-pointer z-50" onClick={toggleMenu}>
          <div className={`h-1 bg-gray-800 transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-1 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-1 bg-gray-800 transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center gap-10 h-full text-[24px] pt-20">
          <Link to="/" className="text-gray-800">Home</Link>
          <Link to="/productList"  className="text-gray-800">shop</Link>
          <Link to="/cart" className="text-gray-800">Cart/chechout</Link>
          <Link to="/checkout"  className="text-gray-800">popular products</Link>
         
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
