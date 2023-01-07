import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ProductProvider from "./contexts/ProductContext";
// sidebar provider
import CartProvider from './contexts/CartContext';
// cart provider
import CartItemProvider from './contexts/CartItemContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <CartItemProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartItemProvider>
  </CartProvider>
);