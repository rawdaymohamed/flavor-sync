import { pizzas } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500 ">
      {pizzas.map((item) => (
        <Link
          href={`/products/${item.id}`}
          key={item.id}
          className="flex flex-col justify-between w-full sm:w-1/2 lg:w-1/3 p-4 h-[60vh] border-b-2 border-r-2 border-red-500"
        >
          {/* Image container */}
          <div className="relative w-full h-[90%]">
            <Image src={item.img} alt="" fill className="object-contain" />
          </div>
          {/* Text container */}
          <div className="flex justify-between items-center font-bold">
            <h1 className="text-red-500 uppercase">{item.title}</h1>
            <p className="text-red-500">${item.price}</p>
            <button className="text-red-500 hover:text-red-800 px-2 py-1 rounded-sm text-3xl">
              <MdOutlineAddShoppingCart />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
