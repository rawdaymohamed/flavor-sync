import React from "react";
import { menu } from "../data";
import Link from "next/link";
const MenuPage = () => {
  return (

    <div className="flex flex-col md:flex-row justify-center md:items-center gap-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] p-4 lg:px-20 xl:px-40">
    {/* Menu items */}
    {menu.map((item) => (
      <Link
        href={`/menu/${item.slug}`}
        key={item.id}
        className="relative flex flex-col justify-end h-1/3 md:h-1/2 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <div
          className="bg-black/50 text-white p-4 w-full"
          style={{ color: `${item.color}` }}
        >
          <h1 className="font-bold text-lg md:text-2xl uppercase">{item.title}</h1>
          <p className="text-sm md:text-base leading-relaxed">{item.desc}</p>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default MenuPage;
