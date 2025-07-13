import React from 'react';
import product from '../product';

const Price = () => {
  return (
    <div className="product-price">
      <span className="original-price">${product.price}</span>
      <span className="discount"> (20% OFF)</span>
    </div>
  );
};

export default Price;
