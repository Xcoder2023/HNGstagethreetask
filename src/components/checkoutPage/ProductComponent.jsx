import React, { useState, useEffect } from 'react';
import { deleteicon, minus, plus } from '../../assets/Index';

const ProductComponent = ({ product, onDelete }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [basePrice, setBasePrice] = useState(product.price);

  useEffect(() => {
    setBasePrice(product.price * quantity);
  }, [quantity, product.price]);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(product.name); // Ensure the correct product name is passed
    }
  };

  return (
    <div className="flex justify-between items-center border rounded-xl p-3">
      <div className="flex gap-5">
        <div className="bg-[#e9f6e2] flex p-5 rounded-lg items-center w-[77px]">
          <img src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} alt={product.name} width={product.imageWidth || 50} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-[18px] text-[12px]">
            {product.name}
          </p>
          <p className="text-[12px] text-[#b5b3b3]">
            ₦{product.price} {product.availability}
          </p>
          <div className="flex items-center gap-2">
            <img src={minus} alt="Decrease quantity" onClick={decrementQuantity} />
            <p>{quantity}</p>
            <img src={plus} alt="Increase quantity" onClick={incrementQuantity} />
            <p className="md:text-[unset] text-[12.67px]">x ₦{(product.price * quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold md:text-[24px] text-[10px]">
          ₦{(product.price * quantity).toFixed(2)}
        </p>
        <div className="flex justify-end">
          <img src={deleteicon} title="Click to remove this item from your cart" alt="Delete" onClick={handleDelete} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
