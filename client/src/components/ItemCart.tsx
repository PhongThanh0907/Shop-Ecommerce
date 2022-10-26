import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import img1 from "../assets/resizer.png";
import { RemoveCart } from "../features/cartSlice";
import { Product } from "../interfaces/product";

type Props = {
  item: Product;
};

const ItemCart = (props: Props) => {
  const [numberCount, setNumberCount] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  const [test, setTest] = useState<string>();
  console.log(test);
  // useEffect(() => {});

  return (
    <div className="grid grid-cols-8 sm:text-xs relative">
      <div className="col-span-5 flex gap-4 items-center sm:text-xs sm:col-span-3">
        <div className="w-[110px] p-2 border border-mainGray">
          <img className="w-full" src={props.item.photos[0]} alt="" />
        </div>
        <h1>{props.item.nameProduct}</h1>
      </div>
      <h2 className="flex items-center">
        {props.item.price.toLocaleString("vn-VN")}đ
      </h2>
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
        {(numberCount * props.item.price).toLocaleString("vi-VN")}đ
      </h2>
      <hr className="bg-mainGray border-mainGray h-[2px] my-4 col-span-8" />
      <button
        className="absolute top-1/4 -left-10 px-2 rounded-full bg-mainGray"
        onClick={() => dispatch(RemoveCart({ id: props.item._id }))}
      >
        X
      </button>
    </div>
  );
};

export default ItemCart;
