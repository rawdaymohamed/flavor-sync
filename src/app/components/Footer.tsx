import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-12 md:h-16 text-red-500 flex justify-between items-center p-5 lg:px-20 xl:px-40">
      <div className="flex-1 flex items-center">
        <Link href="/" className="font-bold">
          FlavorSync
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <small className="uppercase text-xs">&copy; All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
