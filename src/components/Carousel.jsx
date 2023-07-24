import React, { useState } from "react";
import bg1 from "../assets/Projects/project1.png";
import bg2 from "../assets/Projects/project2.png";
import bg3 from "../assets/Projects/project3.png";
import bg4 from "../assets/Projects/project4.png";
import bg5 from "../assets/Projects/project1.png";
import bg6 from "../assets/Projects/project2.png";
import bg7 from "../assets/Projects/project3.png";
import bg8 from "../assets/Projects/project4.png";
import bg9 from "../assets/Projects/project1.png";
import bg10 from "../assets/Projects/project2.png";
import bg11 from "../assets/Projects/project3.png";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const Carousel = () => {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? images.length - getVisibleItems() : Math.max(prev - 1, 0)
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev >= images.length - getVisibleItems()
        ? 0
        : Math.min(prev + 1, images.length - getVisibleItems())
    );
  };

  const getVisibleItems = () => {
    // Adjust the number of visible items based on screen size
    // For small screens (sm and below), show 2 items. Otherwise, show 4 items.
    return window.innerWidth < 640 ? 2 : 4;
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="w-full flex transition-transform duration-300 transform"
          style={{
            transform: `translateX(-${startIndex * (50 / getVisibleItems())}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-1/${getVisibleItems()} h-64 p-4 flex-shrink-0`}
            >
              <img
                className="w-full shadow-sm hover:cursor-pointer scale-100 hover:scale-105 transition-all duration-500 h-full object-cover rounded-3xl"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 sm:-mt-7 md:-mt-6 sm:left-2 md:left-4">
        <button
          className="text-white p-2 px-4 rounded-full"
          onClick={prevSlide}
        >
          <AiFillLeftCircle className="w-10 h-10" />
        </button>
      </div>
      <div className="absolute top-1/2 sm:-mt-6 md:-mt-6 sm:right-2 md:right-4">
        <button
          className="text-white p-2 px-4 rounded-full"
          onClick={nextSlide}
        >
          <AiFillRightCircle className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
