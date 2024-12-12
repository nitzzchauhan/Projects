import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import App from './App.jsx';
import './styles.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
