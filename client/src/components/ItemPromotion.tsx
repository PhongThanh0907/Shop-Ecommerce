import React from "react";
import { Link } from "react-router-dom";
import product from "../assets/product2.png";
import { Product } from "../interfaces/product";
import CountDown from "./CountDown";
interface Props {
  item: Product;
  productID: string;
}

const ItemPromotion = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-[3px] border-mainColor rounded-xl sm:grid-cols-1">
      <div className="p-4 ">
        <img
          className="w-full h-full"
          src={props.item.photos[0]}
          alt="product"
        />
      </div>
      <div>
        <div className="py-3"></div>
        <hr className="bg-mainGray border-mainGray h-[2px] my-2" />
        <h1 className="text-center text-xl font-semibold text-[#0275d8] my-8">
          {props.item.nameProduct}
        </h1>
        <div className="flex justify-center gap-2 items-center">
          <h1 className="text-xl text-[red]">
            {props.item.price.toLocaleString("vn-VN")}đ
          </h1>
          <h1 className="text-sm text-[gray] line-through">
            {" "}
            {props.item.oldPrice.toLocaleString()}đ
          </h1>
        </div>
        <div className="style-flex py-1 w-[80%] m-auto">
          <h1>Đã mua: 0</h1>
          <h1>Số lượng: 1</h1>
        </div>
        <h1 className="text-center my-4">Mua ngay chỉ còn:</h1>
        <div>
          <CountDown hours={3} minutes={59} seconds={10} />
        </div>
        <div className="text-center">
          <Link to={`/chi-tiet/${props.productID}`}>
            <div className="my-2 px-16 py-3 rounded-lg bg-mainColor text-[white] hover:bg-[#0099b1] w-[50%] m-auto">
              MUA NGAY
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemPromotion;
