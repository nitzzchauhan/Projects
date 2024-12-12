

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import Product from './Product';


const ProductList = () => {
  const products = useSelector((state) => state.products);
  console.log(products)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={() => dispatch(addToCart(product))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
