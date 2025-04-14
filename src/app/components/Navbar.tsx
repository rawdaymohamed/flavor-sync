import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import CartIcon from "./CartIcon";
import { auth, signOut } from "@/auth";
const Navbar = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="h-12 md:h-16 flex justify-between items-center p-4 text-red-500 border-b-2 border-red-500 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex md:gap-5  flex-1">
        <Link href="/menu">Menu</Link>
        <Link href="/">Working Hours</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl font-bold flex-1">
        <Link href="/">FlavorSync</Link>
      </div>

      {/* Right Links */}

      <div className="hidden md:flex md:gap-5 items-center text-center">
        {user && <Link href="/">Orders</Link>}
        <Link href="/cart">
          <CartIcon />
        </Link>
        {user ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Logout</button>
          </form>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <div className="flex gap-3 bg-orange-300 p-2  rounded-md md:absolute top-1 right-2 lg:static">
          <Image src="/phone.png" width={20} height={20} alt="" />
          <span>123 456 78</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
