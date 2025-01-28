import Image from "next/image";
import React from "react";
import { pizzas } from "@/app/data";
import Price from "@/app/components/Price";
const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = pizzas.find((pizza) => pizza.id === Number(id));
  if (!product) return <div>Product not found</div>;
  return (

    <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center h-[calc(100vh-6rem)] p-4 lg:px-20 xl:px-40 mb-5">

      {/* Image container */}
      <div className="w-full h-1/2 relative lg:h-3/4">
        <Image src={product.img} fill className="object-contain" alt="" />
      </div>
      {/* Text container */}
      <div className="flex flex-col justify-center gap-5 w-full h-1/2 lg:h-3/4">
        <h1 className="uppercase text-2xl font-extrabold text-red-500">
          {product.title}
        </h1>
        <p className="text-red-500">{product.desc}</p>
        <Price product={product} />
      </div>
    </div>
  );
};

export default SingleProductPage;
