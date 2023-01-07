import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import { Hero } from "../components/Hero";
import Product from "../components/Products";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get database
  const filteredProducts = products.filter((item) => {
    return item.category;
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] max-w-sm
          mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
