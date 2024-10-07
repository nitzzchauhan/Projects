import React from 'react';
import { Provider } from 'react-redux';

import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
