import React, { useContext } from "react";
// import icon
import { BsBag } from "react-icons/bs";
// import context
import { CartContext } from "../contexts/CartContext";
import { CartItemContext } from "../contexts/CartItemContext";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  const { itemAmount } = useContext(CartItemContext);
  return (
    <nav className="w-11/12 xl:w-4/5 m-auto flex justify-between py-5">
      <h1 className="text-2xl font-semibold">
        Cute<span className="text-orange-500">Cat</span>
      </h1>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="mt-1 text-2xl" />
        <div className="bg-orange-300 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center mb-2 mr-1">
          {" "}
          {itemAmount}
        </div>
      </div>
    </nav>
  );
};
