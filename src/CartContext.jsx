import React, { createContext, useContext, useState } from 'react';
import { message } from 'antd';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.name === product.name);
    const price = product.current_price[0]?.NGN[0] || 0; // Extracting the correct price

    if (existingProduct) {
      setCart(cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1, price: price }
          : item
      ));
    } else {
      setCart([...cart, { ...product, price: price, quantity: 1 }]);
    }
    setCartCount(cartCount + 1);
    message.success(`${product.name} has been added to your cart successfully!`);
  };

  const removeFromCart = (productName) => {
    const productToRemove = cart.find(item => item.name === productName);
    if (productToRemove) {
      setCartCount(cartCount - productToRemove.quantity);
    }
    setCart(cart.filter(item => item.name !== productName));
    message.success('Item removed from cart successfully!');
  };

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
    message.success('Cart cleared successfully!');
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
