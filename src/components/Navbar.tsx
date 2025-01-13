import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Home
          </Link>
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Kategori
          </Link>
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Pria
          </Link>
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Wanita
          </Link>
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Jam Tangan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
