import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="container pt-16 pb-16">
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-6 items-stretch">
          {/* Quote Section */}
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-8">
            <div className="text-center flex flex-col items-center gap-3">
              <Image
                className="rounded-full"
                src="/potonabil.jpeg"
                width={80}
                height={80}
                alt="dp"
              />
              <h5 className="text-gray-700 font-black">Nabil Fadilah</h5>
              <p className="text-gray-500">Mahasiswa</p>
              <Image
                className="inline-block"
                src="/quote.png"
                width={30}
                height={30}
                alt="quote"
              />
              <p className="max-w-[200px] text-gray-500 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                dignissimos vero cupiditate inventore. Delectus consequatur
                repudiandae perferendis cum pariatur nesciunt nemo rem corrupti
                animi.
              </p>
            </div>
          </div>

          {/* Discount Section */}
          <div
            className="relative bg-cover bg-center bg-gray-800 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: "url('/your-background-image.jpg')",
              minHeight: "100%",
            }}
          >
            <div className="bg-[#ffffffab] w-full max-w-[90%] rounded-xl p-6 flex flex-col items-center gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727] text-center">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-lg text-center">
                Starting @ Rp. 50.000 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
