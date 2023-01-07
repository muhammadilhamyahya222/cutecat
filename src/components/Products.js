import React, { useContext } from "react";
// import icon
import { BsPlus } from "react-icons/bs";
// import context
import { CartItemContext } from "../contexts/CartItemContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartItemContext);
  // destructure product
  const { id, image, category, title, price } = product;
  // formatting price in rupiah
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div>
      <div className="border border-[#e4e4e4} h-[150px] w-[200px] mb-4 relative overflow-hidden group transition rounded-xl">
        <div className="w-11/12 xl:w-4/5 m-auto flex justify-between py-5">
          {/*image*/}
          <div className="w-[150px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[110px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute bottom-2 -right-11 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-6 h-6 bg-orange-300">
              <BsPlus className="text-3xl" />
            </div>
          </button>
        </div>
      </div>
      {/* category, title, and price  */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <h2 className="font-semibold mb-1 w-[200px]">{title}</h2>
        <div className="font-semibold">{formatRupiah(price)}</div>
      </div>
    </div>
  );
};

export default Product;
