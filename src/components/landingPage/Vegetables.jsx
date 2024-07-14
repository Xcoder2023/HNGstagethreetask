import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import { crisp, eggplants, freshtomatoes, grape, hamimix, kalegreen, mellon, oliveoil, shoppingcart, sprout, squash, watermellon, yums } from '../../assets/Index';
import { useCart } from '../../CartContext';

const products = [
  {
    image: kalegreen,
    title: 'Fresh Kale Greens',
    price: '₦2000',
    oldPrice: '₦3500',
    tag: '12%',
    animation: 'fade-up',
  },
  {
    image: eggplants,
    title: 'Garden Fresh Eggplants',
    price: '₦5000',
    oldPrice: '₦7000',
    tag: '12%',
    animation: 'fade-down',
  },
  {
    image: mellon,
    title: 'Cantaloupe Mellon',
    price: '₦4000',
    oldPrice: '₦7000',
    tag: 'New',
    animation: 'fade-up',
  },
  {
    image: watermellon,
    title: 'Farm-Fresh Watermelon',
    price: '₦7000',
    oldPrice: '₦10000',
    animation: 'fade-down',
  },
  {
    image: freshtomatoes,
    title: 'Farm-Fresh Tomatoes',
    price: '₦2000',
    oldPrice: '₦3500',
    tag: '10%',
    animation: 'fade-up',
  },
  {
    image: squash,
    title: 'Organic Baby Spinach',
    price: '₦5000',
    oldPrice: '₦7000',
    animation: 'fade-down',
  },
  {
    image: crisp,
    title: 'Sweet Bell Hami Mix',
    price: '₦4000',
    oldPrice: '₦7000',
    animation: 'fade-up',
  },
  {
    image: grape,
    title: 'Fresh Grape',
    price: '₦7000',
    oldPrice: '₦10000',
    tag: 'New',
    animation: 'fade-down',
  },
];

const Vegetables = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  
  const { incrementCart } = useCart();
  
  return (
    <>
      <div className='w-[90%] m-auto flex flex-col gap-5 my-5' style={{ fontFamily: "poppins" }}>
        <p data-aos="fade-left" className="hidden md:flex font-bold text-[28px] text-[#488129] text-center justify-center">Vegetable foods</p>
        <ul className='hidden text-[#5a5555] md:flex justify-between items-center md:w-[55%] m-auto gap-5 md:gap-[unset]'>
          <li className='text-[#589c32]'>All</li>
          <li>Featured</li>
          <li>Deal</li>
          <li>New</li>
          <li>On sale</li>
        </ul>
        <div className='flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-4 w-full gap-5'>
          {products.map((product, index) => (
            <div key={index} data-aos={product.animation} className='bg-[#fafafa] lg:w-[25% h-[399px] w-full rounded-md flex flex-col justify-center'>
              {product.tag && (
                <div className='flex justify-end'>
                  <p className={`w-[14%] font-bold ${product.tag === 'New' ? 'bg-[#F4D03F]' : 'bg-[#67b83a]'} flex justify-center p-1 rounded-${product.tag === 'New' ? 'tr' : 'tl'}-lg relative bottom-[3.5em]`}>
                    {product.tag}
                  </p>
                </div>
              )}
              <div className='flex flex-col items-center'>
                <img src={product.image} alt={product.title} />
                <p className='font-semibold text-[18px] text-[#0a0b0a]'>{product.title}</p>
                <p className='text-[#488129]'>{product.price}</p>
                <p className='text-[#9f9c9c] line-through'>{product.oldPrice}</p>
                <button
                  onClick={incrementCart}
                  title='click to add to your cart'
                  className='bg-[#7AC74F] p-2 rounded-lg w-[20%] text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]'
                >
                  <img src={shoppingcart} alt="Add to cart" />
                  add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vegetables;
