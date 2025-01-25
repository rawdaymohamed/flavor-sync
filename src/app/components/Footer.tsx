import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-12 md:h-16 text-red-500 flex justify-between items-center p-4 lg:p-20 xl:p-40">
      <div className="flex-1 flex items-center">
        <Link href="/" className="font-bold text-lg">
          FlavorSync
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <p className="uppercase text-sm">&copy; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
