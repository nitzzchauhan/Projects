

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../redux/actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name} - ${item.price} x {item.quantity}</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(updateCartQuantity(item.id, Number(e.target.value)))
                }
                min="1"
              />
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
