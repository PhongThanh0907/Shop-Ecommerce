import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { AddCart, RemoveCart, UpdateNumberCount } from "../features/cartSlice";
import { Product } from "../interfaces/product";

type Props = {
  item: Product;
};

const ItemCart = (props: Props) => {
  const [numberCountValue, setNumberCountValue] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.cart);

  console.log(numberCountValue);
  let index = cart.findIndex((item) => item._id === props.item._id);
  const newArr = { ...props.item, numberCountValue };
  console.log(newArr);
  useEffect(() => {
    AddCart(props.item);
  }, [numberCountValue]);

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
          onChange={(e) => setNumberCountValue(parseInt(e.target.value))}
          onClick={() =>
            dispatch(UpdateNumberCount({ ...props.item, numberCountValue }))
          }
          defaultValue={`${cart[index].numberCount}`}
        />
      </div>
      <h2 className="flex items-center sm:col-span-2">
        {/* {(numberCountValue * props.item.price).toLocaleString("vi-VN")}đ */}
        {cart[index].totalCount.toLocaleString("vn-Vn")}đ
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
