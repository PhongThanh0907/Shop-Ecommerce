import React, { useState } from "react";
import img1 from "../assets/resizer.png";

type Props = {};

const ItemCart = (props: Props) => {
  const [numberCount, setNumberCount] = useState(0);

  return (
    <div className="grid grid-cols-8 sm:text-xs">
      <div className="col-span-5 flex gap-4 items-center sm:text-xs sm:col-span-3">
        <div className="w-[110px] p-2 border border-mainGray">
          <img className="w-full" src={img1} alt="" />
        </div>
        <h1>VGA EVGA GeForce RTX 2060 KO ULTRA GAMING</h1>
      </div>
      <h2 className="flex items-center">5,990,000đ</h2>
      <div className="flex items-center sm:col-span-2">
        <input
          type="number"
          className="border border-mainGray w-[70%] rounded-2xl pl-6 py-1 text-[gray] focus:outline-none focus:shadow-outline"
          min={1}
          onChange={(e) => setNumberCount(parseInt(e.target.value))}
          defaultValue="1"
        />
      </div>
      <h2 className="flex items-center sm:col-span-2">
        {(numberCount * 5990000).toLocaleString("vi-VN")}đ
      </h2>
      <hr className="bg-mainGray border-mainGray h-[2px] my-4 col-span-8" />
    </div>
  );
};

export default ItemCart;
