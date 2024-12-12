
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <li>
      <span>{product.name} - ${product.price}</span>
      <button onClick={onAddToCart}>Add to Cart</button>
    </li>
  );
};

export default Product;
