"use client";

import { useCartStore } from "@/lib/store";
import { Product } from "@/types/types";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface PriceProps {
  product: Product
}
const updateColor = (selectedOptionIndex: number, i: number) => {
  return selectedOptionIndex === i ? "#f87171" : "#f1f5f9";
};
const updateBgColor = (selectedOptionIndex: number, i: number) => {
  return selectedOptionIndex === i ? "#f1f5f9" : "#f87171";
};
const Price = ({ product }: PriceProps) => {
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const { addToCart } = useCartStore()
  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      imageURL: product.imageURL,
      price: totalPrice,
      ...(product.options?.length && { optionTitle: product.options[selectedOptionIndex].title }),
      quantity: quantity
    });
    toast.success("The product successfully added to the cart")
  }
  useEffect(() => {
    if (product.options?.length) {

      setTotalPrice(
        Number(quantity) * (Number(product.price) + Number(product.options[selectedOptionIndex].additionalPrice))
      );
    } else {
      setTotalPrice(quantity * product.price);
    }
  }, [product.price, quantity, selectedOptionIndex, product.options]);

  const increaseQuantity = () => {
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);

    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

    }
  };
  return (
    <>
      <p className="font-extrabold text-2xl text-red-500">
        ${totalPrice}
      </p>
      {product.options && (
        <div className="flex gap-4">
          {product.options.map((o, i) => (
            <button
              key={o.title}
              onClick={() => setSelectedOptionIndex(i)}
              className="text-red-500 px-2 py-1 min-w-24 ring-1 ring-red-400  rounded-sm"
              style={{
                backgroundColor: updateColor(selectedOptionIndex, i),
                color: updateBgColor(selectedOptionIndex, i),
              }}
            >
              {o.title}
            </button>
          ))}
        </div>
      )}
      {/* Quantity and Add button container */}
      <div className="flex items-center md:w-3/4 border border-red-500 ">
        <div className="flex-1 flex justify-between px-2 text-red-500">
          <span className="">Quantity</span>
          <div className="flex gap-1">
            <button onClick={decreaseQuantity}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>{">"}</button>
          </div>
        </div>
        <button className="uppercase text-slate-100 bg-red-500 px-4 py-2" onClick={handleCart}>
          Add to cart
        </button>
      </div >
    </>
  );
};

export default Price;
