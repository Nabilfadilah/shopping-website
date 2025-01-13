"use client";

import Image from "next/image";
import React from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {FaCartPlus} from "react-icons/fa";
interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

// opsi 1
// const generateRating = (rating: number) => {
//   const totalStars = 5; // Jumlah total bintang
//   const filledStars = Array(rating).fill(
//     <AiFillStar className="text-[#FF9529]" />
//   );
//   const outlineStars = Array(totalStars - rating).fill(
//     <AiOutlineStar className="text-[#FF9529]" />
//   );

//   return (
//     <div className="flex gap-1 text-[20px]">
//       {filledStars.concat(outlineStars)}
//     </div>
//   );
// };

// opsi 2
const generateRating = (rating: number) => {
  const totalStars = 5; // Jumlah total bintang
  const filledStars = Array(rating)
    .fill(null)
    .map((_, index) => (
      <AiFillStar key={`filled-${index}`} className="text-[#FF9529]" />
    ));
  const outlineStars = Array(totalStars - rating)
    .fill(null)
    .map((_, index) => (
      <AiOutlineStar key={`outline-${index}`} className="text-[#FF9529]" />
    ));

  return (
    <div className="flex gap-1 text-[20px]">
      {filledStars.concat(outlineStars)}
    </div>
  );
};

const ProductCart: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  return (
    <div className="w-[250px] h-[350px] border border-sky-300 rounded-xl mx-w-[250px] p-4 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-md shadow-red-200">
      <div>
        <Image
          className="w-full h-[150px] object-cover rounded-md"
          src={img}
          width={250}
          height={150}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2 flex-1">
        <h2 className="text-sky-800 font-medium uppercase truncate">{title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4 items-center">
          Rp. {price}
          <del className="text-gray-500 font-medium">
            Rp. {parseInt(price) + 100}.000
          </del>
        </div>
      </div>

      <button className="bg-sky-900 text-white font-semibold py-2 rounded-t-lg mt-4 hover:bg-sky-800 transition-colors duration-300 flex items-center justify-center gap-2">
        <FaCartPlus className="text-lg" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCart;
