import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 text-gray-700">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden lg:block px-1 py-6">Order ID</th>
            <th className="px-1 py-6">Date</th>
            <th className="px-1 py-6">Price</th>
            <th className="hidden lg:block px-1 py-6 ">Product</th>
            <th className="px-1 py-6">Status</th>
          </tr>
        </thead>
        <tbody className=" text-sm md:text-base ">
          <tr className=" bg-red-100">
            <td className="hidden lg:block px-1 py-6">123456778</td>
            <td className="px-1 py-6">Jan 28, 2025</td>
            <td className="px-1 py-6">$65.00</td>
            <td className="hidden lg:block  px-1 py-6">
              Sicilian (2), Bacon Deluxe (1), Bella Napoli (2)
            </td>
            <td className="px-1 py-6 text-red-500 font-bold">
              On the way (approx. 10min)...
            </td>
          </tr>
          <tr className="odd:bg-slate-300">
            <td className="hidden lg:inline-block  px-1 py-6">123456778</td>
            <td className="px-1 py-6">Jan 28, 2025</td>
            <td className="px-1 py-6">$65.00</td>
            <td className="hidden lg:inline-block  px-1 py-6">
              Sicilian (2), Bacon Deluxe (1), Bella Napoli (2)
            </td>
            <td className="px-1 py-6 text-lime-700 font-bold">Delivered</td>
          </tr>
          <tr className="odd:bg-slate-300">
            <td className="hidden lg:inline-block  px-1 py-6">123456778</td>
            <td className="px-1 py-6">Jan 28, 2025</td>
            <td className="px-1 py-6">$65.00</td>
            <td className="hidden lg:inline-block  px-1 py-6">
              Sicilian (2), Bacon Deluxe (1), Bella Napoli (2)
            </td>
            <td className="px-1 py-6 text-lime-700 font-bold">Delivered</td>
          </tr>
          <tr className="odd:bg-slate-300">
            <td className="hidden lg:inline-block  px-1 py-6">123456778</td>
            <td className="px-1 py-6">Jan 28, 2025</td>
            <td className="px-1 py-6">$65.00</td>
            <td className="hidden lg:inline-block  px-1 py-6">
              Sicilian (2), Bacon Deluxe (1), Bella Napoli (2)
            </td>
            <td className="px-1 py-6 text-lime-700 font-bold">Delivered</td>
          </tr>
          <tr className="odd:bg-slate-300">
            <td className="hidden lg:inline-block  px-1 py-6">123456778</td>
            <td className="px-1 py-6">Jan 28, 2025</td>
            <td className="px-1 py-6">$65.00</td>
            <td className="hidden lg:inline-block  px-1 py-6">
              Sicilian (2), Bacon Deluxe (1), Bella Napoli (2)
            </td>
            <td className="px-1 py-6 text-lime-700 font-bold">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
