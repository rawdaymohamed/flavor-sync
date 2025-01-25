import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";
const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] xl:w-[33vw] flex flex-col items-center justify-center gap-2 h-[70vh] xl:h-[90vh] hover:bg-fuchsia-100 transition-all duration-300 py-5 px-5"
          >
            {/* Image Container */}
            <div className="relative flex-1 w-full hover:rotate-[60deg] transition duration-300">
              <Image src={item.img} fill alt="" className="object-contain" />
            </div>
            {/* Text Container */}
            <div className="flex flex-col gap-5 items-center justify-center flex-1">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p className="px-4 text-center">{item.desc}</p>
              <p className="text-xl font-bold">${item.price}</p>
              <button className="bg-red-500 px-4 py-2 text-slate-100 rounded-sm self-center">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
