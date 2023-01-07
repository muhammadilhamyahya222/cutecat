import React, { useState, createContext } from "react";
// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
