import React from "react";

export const Hero = () => {
  return (
    <section className="w-11/12 xl:w-4/5 m-auto bg-orange-200 rounded-2xl">
      <div className="container h-full mx-auto flex justify-around items-center">
        <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-semibold">Find the Perfect Food</h1>
          <h1 className="font-semibold ml-1 text-yellow-800">
            for Your Lovely Cat
          </h1>
        </div>
        <div className="hidden lg:block">
          <img src="img/cat.png" alt="" />
        </div>
      </div>
    </section>
  );
};
