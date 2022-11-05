import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import ItemCart from "../../components/ItemCart";

type Props = {};

const ProductCart = (props: Props) => {
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);
  const { login } = useSelector((state: RootState) => state.user);
  const handleClick = () => {
    if (login.currentUser) {
      alert("Bạn đã đặt hàng thành công");
      navigate("/");
    } else {
      alert("Bạn chưa có tài khoản");
      navigate("/dang-nhap");
    }
  };

  return (
    <div className="w-[80%] m-auto sm:w-[90%]">
      <div>
        <div className="flex gap-4 my-5">
          <Link to="/">
            <h1>Trang chủ</h1>
          </Link>
          <MdOutlineKeyboardArrowRight className="text-2xl text-[gray]" />

          <h1>Giỏ hàng</h1>
        </div>
        <div>
          <div className="grid grid-cols-8 text-[gray] sm:text-xs">
            <h3 className="col-span-5 sm:col-span-3 ">Sản phẩm</h3>
            <h3>Giá</h3>
            <h3 className="sm:col-span-2">Số lượng</h3>
            <h3 className="sm:col-span-2">Tổng tiền</h3>
          </div>
          <hr className="bg-mainGray border-mainGray h-[2px] my-4" />
          {cart.map((item) => (
            <ItemCart key={item._id} item={item} />
          ))}
          <h1 className="text-right pr-10">
            Tổng tiền tạm tính:{" "}
            <span className="font-bold">
              {/* {priceProduct.toLocaleString("vn-VN")}đ */}
              {cart.length < 1
                ? 0
                : cart
                    .map((i) => i.totalCount)
                    .reduce((total, cv) => total + cv)
                    .toLocaleString("vn-Vn")}
            </span>
          </h1>
          <hr className="bg-mainGray border-mainGray h-[2px] my-4" />
          <div className="text-right pt-10 pr-10 sm:pr-4 sm:pt-2">
            <button
              onClick={() => handleClick()}
              className="px-8 py-3 bg-mainColor rounded-3xl text-[white] font-bold"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
