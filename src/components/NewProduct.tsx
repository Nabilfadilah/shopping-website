import React from "react";
import ProductCart from "./ProductCart";

const NewProduct = () => {
  return (
    <>
      <div className="container pt-10">
        <h2 className="font-medium text-2xl pb-4">New Product</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 pb-8">
          {productData.map((item, index) => (
            <ProductCart
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewProduct;

const productData = [
  {
    img: "/watch1.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 3,
    price: "320.000",
  },
  {
    img: "/watch2.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 4,
    price: "320.000",
  },
  {
    img: "/watch3.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 5,
    price: "320.000",
  },
  {
    img: "/watch4.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 5,
    price: "320.000",
  },
  {
    img: "/watch5.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 5,
    price: "320.000",
  },
  {
    img: "/watch6.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 3,
    price: "320.000",
  },
  {
    img: "/watch7.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 3,
    price: "320.000",
  },
  {
    img: "/watch8.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 3,
    price: "320.000",
  },
  {
    img: "/watch9.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 3,
    price: "320.000",
  },
  {
    img: "/watch10.jpg",
    title: "Watch MEN",
    desc: "Trekking will the base",
    rating: 3,
    price: "320.000",
  },
];
