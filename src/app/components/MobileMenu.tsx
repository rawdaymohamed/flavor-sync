"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import CartIcon from "./CartIcon";

import { useSession } from "next-auth/react";
const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];
const MobileMenu = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);

  const user = data?.user;
  return (
    <div>
      {open ? (
        <Image
          src="/close.png"
          width={20}
          height={20}
          alt="menu icon"
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      ) : (
        <Image
          src="/open.png"
          width={20}
          height={20}
          alt="menu icon"
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-slate-100 absolute top-24 left-0 text-2xl flex flex-col justify-center items-center gap-8 h-[calc(100vh-96px)] w-full z-10 uppercase">
          {links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
