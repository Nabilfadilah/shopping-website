import React from "react";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitterX} from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-2">
            <div className="header_top_icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <BsTwitterX />
            </div>
            <div className="header_top_icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <BsLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER -Rp. 50.000
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="IDR">IDR</option>
              <option value="USD $">USD $</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="Indonesia">Indonesia</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
