import React from "react";
import Link from "next/link";
import { Menu } from "@/types/types";
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categories`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Failed!");
  return res.json();
};
const MenuPage = async () => {
  const menu: Menu = await getData();
  return (
    <div className="flex flex-col md:flex-row justify-center md:items-center gap-2 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] p-4 lg:px-20 xl:px-40">
      {/* Menu item 1 container */}
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="relative h-1/3 md:h-1/2 bg-cover"
          style={{ backgroundImage: `url(${item.imageURL})` }}
        >
          <div
            className={`flex flex-col gap-3 p-4 w-1/2`}
            style={{ color: `${item.color}` }}
          >
            <h1 className="font-extrabold text-lg lg:text-xl uppercase">
              {item.title}
            </h1>
            <p className="text-sm overflow-hidden lg:text-base">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
