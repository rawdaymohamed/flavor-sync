import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row h-screen md:h-[70vh] bg-gray-950 md:bg-[url('/offerBg.png')]">
      {/* Text container */}
      <div className="md:h-1/2 flex-1 flex flex-col gap-8 justify-center items-center text-center text-slate-100 p-6">
        <h1 className="text-4xl font-extrabold">
          Delicious Burger & French Fry
        </h1>
        <p className="lg:text-xl xl:w-2/3">
          Experience the ultimate comfort food duo with our juicy Burger and
          golden, seasoned French Fries at their finest.
        </p>
        <CountDown />
        <button className="bg-red-500 text-slate-100 px-4 py-2 rounded-sm self-center">
          Order Now
        </button>
      </div>
      {/* Image container */}
      <div className="relative w-full flex-1 md:h-1/2">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
