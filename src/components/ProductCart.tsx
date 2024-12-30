"use client";

import Image from "next/image";
import React from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

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
    <div className="px-4 border border-gray-200 rounded-xl mx-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>

        <div className="font-bold flex gap-4">
          Rp. {price}
          <del className="text-gray-500 font-medium">
            Rp. {parseInt(price) + 100}.000
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
