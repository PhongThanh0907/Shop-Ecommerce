import React, { useState } from "react";
import brand01 from "../../assets/brand1.jpg";
import brand02 from "../../assets/brand2.jpg";
import brand03 from "../../assets/brand3.jpg";
import brand04 from "../../assets/brand4.jpg";
import brand05 from "../../assets/brand5.png";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

type Props = {};

const Brand = (props: Props) => {
  const slider = React.useRef<HTMLDivElement | null>(null);
  const slideLeft = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft - 500;
  };

  const slideRight = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft + 500;
  };
  const brandItem = [brand01, brand02, brand03, brand04, brand05];

  return (
    <div className="w-[70%] m-auto py-16 sm:w-[80%]">
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white -left-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          ref={slider}
          className="style-brand overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {brandItem.map((item, index) => (
            <img
              className="w-[400px] cursor-pointer h-[80px] mx-8 my-4 sm:w-[200px] sm:h-[50px] sm:mx-4"
              key={index}
              src={item}
              alt="logo"
            />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white -right-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Brand;
