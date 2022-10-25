import React, { useState } from "react";
import Slider from "react-slick";
import ItemProduct from "../../components/ItemProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

type Props = {};

const Product = (props: Props) => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="w-[70%] m-auto py-8 sm:w-[90%] ">
      <div className="flex justify-center gap-10 text-2xl sm:grid sm:grid-cols-2 sm:text-lg sm:text-center">
        <div className="relative">
          <h1
            onClick={() => setOpenTab(1)}
            className={
              openTab === 1 ? "font-bold cursor-pointer" : "cursor-pointer"
            }
          >
            Sản phẩm mới
          </h1>
          <hr
            className={
              openTab === 1
                ? "absolute bg-mainColor border-mainColor h-[2px] w-full bottom-[-82%]"
                : "hidden"
            }
          />
        </div>
        <div className="relative">
          <h1
            onClick={() => setOpenTab(0)}
            className={
              openTab === 0 ? "font-bold cursor-pointer" : "cursor-pointer"
            }
          >
            Bán chạy
          </h1>
          <hr
            className={
              openTab === 0
                ? "absolute bg-mainColor border-mainColor h-[2px] w-full bottom-[-82%]"
                : "hidden"
            }
          />
        </div>
      </div>

      <hr className="bg-mainGray border-mainGray h-[2px] my-6" />
      <div className="py2 sm:hidden">
        {openTab === 1 ? (
          <>
            <Slider {...settings}>
              {data.map((item) => {
                return (
                  <ItemProduct
                    key={item._id}
                    item={item}
                    idProduct={item._id}
                  />
                );
              })}
            </Slider>
          </>
        ) : (
          <>
            <Slider {...settings}>
              {data
                .filter((item) => item.bestSell === true)
                .map((itemFilter) => {
                  return (
                    <ItemProduct
                      key={itemFilter._id}
                      item={itemFilter}
                      idProduct={itemFilter._id}
                    />
                  );
                })}
            </Slider>
          </>
        )}
      </div>
      <div className="py2 lt:hidden">
        {openTab === 1 ? (
          <>
            {data.map((item) => {
              return (
                <Slider {...settingsMobile}>
                  <ItemProduct item={item} idProduct={item._id} />
                </Slider>
              );
            })}
          </>
        ) : (
          <>
            {data.map((item) => {
              return (
                <Slider {...settingsMobile}>
                  <ItemProduct item={item} idProduct={item._id} />
                </Slider>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
