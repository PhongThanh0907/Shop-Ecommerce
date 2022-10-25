import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { AddCart } from "../features/cartSlice";

interface Props {
  item: Product;
  idProduct: string;
}

const ItemProduct = (props: Props) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state: RootState) => state.cart);
  return (
    <div className="style-item-product  hover:shadow-xl hover:border-[#efecec] sm:w-[115px] sm:text-[10px] sm:h-[230px] cursor-pointer">
      <Link to={`/chi-tiet/${props.idProduct}`}>
        <div className="p-6 sm:p-2">
          {/* <p className="text-sm text-[gray] uppercase">{props.item.type}</p> */}
          <h1 className="text-mainColor font-bold py-2">
            {props.item.nameProduct}
          </h1>
          <img
            className="py-2 w-[90%] absolute top-[28%]"
            src={props.item.photos[0]}
            alt="product"
          />
          <div className="flex items-center gap-2 sm:grid sm:grid-cols-1 absolute bottom-5">
            <h1 className="text-[red] text-xl sm:text-sm">
              {props.item.price.toLocaleString("vn-VN")}đ
            </h1>
            <h2 className="line-through text-sm text-[gray] sm:hidden">
              30,000,000đ
            </h2>
          </div>
          <div
            onClick={() => dispatch(AddCart(props.item))}
            className="absolute bottom-4 text-2xl right-4 p-2 rounded-full bg-mainGray text-[white] cursor-pointer hover:bg-mainColor sm:text-sm sm:right-1 sm:bottom-4"
          >
            <BsCartPlus />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemProduct;
