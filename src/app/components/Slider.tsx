"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh & Always crispy & Always hot",
    image: "/slide4.jpg",
  },
  {
    id: 1,
    title: "We deliver order where you are",
    image: "/slide5.jpg",
  },
  {
    id: 1,
    title: "The best pizza to share with your family",
    image: "/slide6.jpg",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)]">
      {/* Text container */}
      <div className="flex flex-col justify-center items-center gap-8 flex-1">
        <h1 className="text-red-500 text-4xl md:text-5xl font-extrabold uppercase text-center p-8 md:p-10">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 px-8 py-4 text-slate-100 font-extrabold rounded-sm">
          Order Now
        </button>
      </div>
      {/* Image container */}
      <div className="relative flex-1">
        <Image
          src={data[currentSlide].image}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
