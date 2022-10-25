import React from "react";
import Banner from "./Banner";
import Brand from "./Brand";
import HeaderHomePage from "./HeaderHomePage";
import Product from "./Product";
import Promotion from "./Promotion";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      {/* <HeaderHomePage /> */}
      <Banner />
      <Product />
      <Promotion />
      {/* <Brand /> */}
    </>
  );
};

export default Home;
