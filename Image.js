import React from 'react';
import product from '../product';
import { Image } from 'react-bootstrap';

const ProductImage = () => {
  return (
    <Image 
      src={product.imageUrl} 
      alt={product.name}
      rounded
      fluid
      className="product-image"
    />
  );
};

export default ProductImage;
