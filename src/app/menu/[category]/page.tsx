import { Products } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const getData = async (category: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products?category=${category}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) throw new Error("Failed!");
  return res.json();
};
type Props = {
  params: { category: string };
};
const CategoryPage = async ({ params }: Props) => {
  const products: Products = await getData(params.category);
  return (
    <div className="flex flex-wrap text-red-500 ">
      {products.map((item) => (
        <Link
          href={`/products/${item.id}`}
          key={item.id}
          className="flex flex-col justify-between w-full sm:w-1/2 lg:w-1/3 p-4 h-[60vh] border-b-2 border-r-2 border-red-500"
        >
          {/* Image container */}
          <div className="relative w-full h-[90%]">
            <Image src={item.imageURL} alt="" fill className="object-contain" />
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
