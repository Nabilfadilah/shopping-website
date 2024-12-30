"use client";

import React from "react";
import Slide from "./Slide";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
};

const slideData = [
  {
    id: 0,
    img: "/banner1.jpg",
    title: "Fashion and Action",
    mainTitle: "MEN'S Latest sale",
    price: "Rp. 320.000",
  },
  {
    id: 1,
    img: "/banner2.jpg",
    title: "Trending",
    mainTitle: "WOMEN'S Latest sale",
    price: "Rp. 320.000",
  },
];

const Hero = () => {
  return (
    <>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
