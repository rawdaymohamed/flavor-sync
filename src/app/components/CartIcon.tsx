"use client"
import Image from "next/image";
import React from "react";
import { useCartStore } from "@/lib/store";
const CartIcon = () => {
  const { totalItems } = useCartStore();
  return (
    <div className="flex items-center gap-4">
      <div className="h-8 w-8 md:h-6 md:w-6 relative">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart ({totalItems})</span>
    </div>
  );
};

export default CartIcon;
