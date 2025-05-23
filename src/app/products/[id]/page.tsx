import React from "react";
import Image from "next/image";
import Price from "@/app/components/Price";
import { Product } from "@/types/types";
import DeleteButton from "@/app/components/DeleteButton";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error("Failed!");
    return res.json();
  };
  const product: Product = await getData();
  if (!product) return <div>Product not found</div>;
  return (

    <div className="relative flex flex-col md:flex-row gap-5 md:gap-8 items-center h-[calc(100vh-6rem)] p-4 lg:px-20 xl:px-40 mb-5">

      {/* Image container */}
      <div className="w-full h-1/2 relative lg:h-3/4">
        <Image src={product.imageURL} fill className="object-contain" alt="" />
      </div>
      {/* Text container */}
      <div className="flex flex-col justify-center gap-5 w-full h-1/2 lg:h-3/4">
        <h1 className="uppercase text-2xl font-extrabold text-red-500">
          {product.title}
        </h1>
        <p className="text-red-500">{product.description}</p>
        <Price product={product} />
      </div>
      <DeleteButton id={product.id} />
    </div>
  );
};

export default SingleProductPage;
