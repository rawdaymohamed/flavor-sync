import Image from "next/image";
import React from "react";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-8 w-8 md:h-6 md:w-6 relative">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;
