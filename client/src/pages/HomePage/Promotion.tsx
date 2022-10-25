import React, { HTMLProps, useRef } from "react";
import ItemPromotion from "../../components/ItemPromotion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Promotion = () => {
  const slideRef = useRef<Slider>(null);
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  function PrevArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        onClick={() => {
          slideRef.current?.slickPrev();
        }}
        className="absolute top-8 translate-y-[-50%] right-[420px] z-10 bg-white rounded-full flex justify-center items-center gap-2 sm:right-[220px] cursor-pointer"
      >
        <MdOutlineKeyboardArrowLeft />
        Xem trước
      </div>
    );
  }

  function NextArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        className="absolute top-8 translate-y-[-50%] right-8 z-10 bg-white rounded-full flex justify-center items-center cursor-pointer gap-2 cursor-pointer"
        onClick={() => {
          slideRef.current?.slickNext();
        }}
      >
        Xem tiếp
        <MdOutlineKeyboardArrowRight />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-[70%] m-auto py-4 sm:w-[90%]">
      <h1 className="text-2xl py-6">Khuyến mãi trong tuần</h1>
      <div>
        <Slider {...settings} ref={slideRef}>
          {data
            .filter((item) => item.promotion === true)
            .map((itemFilter) => {
              return (
                <ItemPromotion
                  key={itemFilter._id}
                  item={itemFilter}
                  productID={itemFilter._id}
                />
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Promotion;
