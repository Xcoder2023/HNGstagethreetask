import React from 'react';
import { minus, plus } from '../../assets/Index';

const Counter = ({ increment, decrement, count }) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={decrement}>
        <img src={minus} alt="-" />
      </button>
      <p>{count}</p>
      <button onClick={increment}>
        <img src={plus} alt="+" />
      </button>
      <p className="md:text-[unset] text-[12.67px]">x ₦4000</p>
    </div>
  );
};

export default Counter;
