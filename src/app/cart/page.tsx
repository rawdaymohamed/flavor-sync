import React from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
const CartPage = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between p-4 lg:px-20 xl:px-40 w-full h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] gap-20 text-sm md:text-base lg:text-xl">
      {/* Products container */}
      <div className="h-1/2 md:h-full md:w-2/3 xl:w-1/2 overflow-y-scroll flex flex-col gap-5 md:p-4 lg:p-12 xl:p-20">
        <div className="flex items-center justify-between text-red-500 text-sm">
          <Image
            src="/temporary/p1.png"
            width={80}
            height={80}
            className="object-contain"
            alt="pizza"
          />

          <div className="w-2/5 flex flex-col gap-1 ">
            <div className="font-bold uppercase">Veggie Supreme</div>
            <div>Small</div>
          </div>
          <div>$60.00</div>
          <span className="cursor-pointer">
            <IoCloseSharp />
          </span>
        </div>
        <div className="flex items-center justify-between text-red-500 text-sm">
          <Image
            src="/temporary/p2.png"
            width={80}
            height={80}
            className="object-contain"
            alt="pizza"
          />

          <div className="w-2/5   flex flex-col gap-1">
            <div className="font-bold uppercase">Pesto Primavera</div>
            <div>Large</div>
          </div>
          <div>$20.00</div>
          <span className="cursor-pointer">
            <IoCloseSharp />
          </span>
        </div>
        <div className="flex items-center justify-between text-red-500 text-sm">
          <Image
            src="/temporary/p3.png"
            width={80}
            height={80}
            className="object-contain"
            alt="pizza"
          />

          <div className="w-2/5 flex flex-col gap-1">
            <div className="font-bold uppercase">Mediterranean Delight</div>
            <div>Large</div>
          </div>
          <div>$20.00</div>
          <span className="cursor-pointer">
            <IoCloseSharp />
          </span>
        </div>

        <div className="flex items-center justify-between text-red-500 text-sm">
          <Image
            src="/temporary/p3.png"
            width={80}
            height={80}
            className="object-contain"
            alt="pizza"
          />

          <div className="w-2/5 flex flex-col gap-1">
            <div className="font-bold uppercase">Mediterranean Delight</div>
            <div>Large</div>
          </div>
          <div>$20.00</div>
          <span className="cursor-pointer">
            <IoCloseSharp />
          </span>
        </div>
      </div>
      {/* Payment container */}
      <div className="h-1/2 md:h-full md:w-1/3 xl:w-1/2 flex flex-col gap-8 text-red-500 text-sm  md:p-4 lg:p-12 xl:p-20">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$100.00</span>
          </div>
          <div className="flex justify-between">
            <span>Service Cost</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Cost</span>
            <span className="text-lime-600">FREE!</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="uppercase">Total(Inc VAT)</span>
            <strong>$100.00</strong>
          </div>
          <button className="uppercase self-end bg-red-500 hover:bg-red-700 px-6 py-2 w-1/2 rounded-sm text-slate-100">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
