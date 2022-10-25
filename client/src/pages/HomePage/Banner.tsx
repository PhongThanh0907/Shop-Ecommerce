import React, { useEffect, useState } from "react";
import Banner01 from "../../assets/banner-1.png";
import Banner02 from "../../assets/banner-2.jpg";
import Banner03 from "../../assets/banner-3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getProductList } from "../../features/productSlice";

const Banner = () => {
  const dataImg = [Banner01, Banner02, Banner03];
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="relative">
      <Carousel showThumbs={false}>
        {dataImg.map((item, id) => (
          <img
            className="h-[100vh] sm:h-[40vh]"
            key={id}
            src={item}
            alt="img"
          />
        ))}
      </Carousel>
      {}
    </div>
  );
};

export default Banner;
