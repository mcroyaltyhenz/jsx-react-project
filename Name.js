import React from 'react';
import product from '../product';
import { Badge } from 'react-bootstrap';

const Name = () => {
  return (
    <h2 className="product-name">
      {product.name} 
      <Badge bg="info" className="ms-2">New</Badge>
    </h2>
  );
};

export default Name;
