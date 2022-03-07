import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1
        ? 0
        : setCurrentSlide(currentSlide + 1);
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0
        ? CarouselData.length - 1
        : setCurrentSlide(currentSlide + 1);
    setCurrentSlide(newSlide);
  };
  return (
    <div className="mt-8">
      <div className="max-w-lg h-72 flex overflow-hidden relative">
        <AiOutlineLeft
          onClick={prevSlide}
          className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
        />

        <AiOutlineRight
          onClick={nextSlide}
          className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
        />
        {CarouselData.map((slide, index) => {
          return (
            <img
              src={slide.image}
              alt="This is a carousel slide"
              key={index}
              className={
                index === currentSlide
                  ? "block w-full h-auto object-cover"
                  : "hidden"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
