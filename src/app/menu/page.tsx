import React from "react";
import { menu } from "../data";
import Link from "next/link";
const MenuPage = () => {
  return (
<<<<<<< HEAD
    
    <div className="flex flex-col md:flex-row justify-center md:items-center gap-2 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] p-4 lg:px-20 xl:px-40">
      {/* Menu item 1 container */}
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="relative h-1/3 md:h-1/2 bg-cover"
          style={{ backgroundImage: `url(${item.img})` }}
=======
    <div className="flex flex-col md:flex-row justify-center md:items-center gap-2 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] p-4 lg:px-20 xl:px-40">
      {/* Menu item 1 container */}
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="relative h-1/3 md:h-1/2 bg-cover"
          style={{ backgroundImage: `url(${item.img})` }}
>>>>>>> 008f8437a009d700bfbb4d3863368a7b8323002d
        >
<<<<<<< HEAD
          <div
            className={`flex flex-col gap-5 p-4 w-1/2`}
            style={{ color: `${item.color}` }}
          >
            <h1 className="font-bold text-2xl uppercase">{item.title}</h1>
            <p className="text-sm overflow-hidden">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
=======
          <div
            className={`flex flex-col gap-4 p-4 w-1/2`}
            style={{ color: `${item.color}` }}
          >
            <h1 className="font-bold text-xl uppercase">{item.title}</h1>
            <p className="text-sm">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
>>>>>>> 008f8437a009d700bfbb4d3863368a7b8323002d
  );
};

export default MenuPage;
