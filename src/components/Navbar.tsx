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
            Categories
          </Link>
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Men's
          </Link>
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Women's
          </Link>
          <Link className="navbar_link relative" rel="stylesheet" href="#">
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
