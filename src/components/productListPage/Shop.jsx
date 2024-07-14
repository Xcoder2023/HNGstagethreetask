import React from 'react'
import NavMini from '../navbar/NavMini'
import { HeroProduct } from './HeroProduct'
import Footer from '../footer/Footer'
import ProductStore from './ProductStore'
import HamburgerMenu from '../navbar/HamburgerMenu'

const Shop = () => {
  return (
    <>
    <NavMini/>
    <div className="sticky top-0 z-10 lg:hidden">
        <HamburgerMenu />
      </div>
    <HeroProduct/>
    <ProductStore/>
    <Footer/>
    </>
  )
}

export default Shop