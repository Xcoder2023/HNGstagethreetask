import React from 'react'

export const HeroProduct = () => {
  return (
    <>
      <div>
        <div className="bg-[url('/src/assets/images/herowoman.png')] bg-no-repeat bg-cover bg-center h-screen w-full flex justify-center object-fill">
        <div className='flex flex-col w-[90%] m-auto'>
          <p className='font-bold text-[48px] lg:w-[622px] text-[#e9f6e2]'>Naturally Grown, Packed 
          with Nutrients</p>
          <p className='text-[18px] text-[#ffff] lg:w-[490px]'>Start your daily shopping with our exclusive offers and 
          enjoy unbeatable freshness.</p>
        </div>

        </div>
      </div>
    </>
  )
}
