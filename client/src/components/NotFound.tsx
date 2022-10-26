import React from "react";
import NotFoundImg from "../assets/notfound.jpg";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="w-[50%] h-[400px] m-auto my-8">
      <img className="w-full h-full" src={NotFoundImg} alt="notfound" />
    </div>
  );
};

export default NotFound;
