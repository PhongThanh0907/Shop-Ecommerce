import React from "react";
import { FiSend } from "react-icons/fi";
import { MdAddIcCall } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";
import bocongthuong from "../assets/bocongthuong.png";
import bank from "../assets/bank.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className=" py-4 bg-mainColor">
        <div className="style-flex w-[75%] m-auto text-[white] text-lg sm:grid sm:grid-cols-1 sm:w-[90%] sm:text-sm sm:gap-y-2">
          <div className="style-flex gap-2">
            <FiSend className="text-2xl" />
            Gear Shop - Thế Giới Mua Bán Đồ Chơi Công Nghệ, Phụ Kiện Chơi Game
          </div>
          <div className="flex items-center w-[450px] sm:w-full">
            <input
              className="style-input-footer focus:outline-none focus:shadow-outline "
              type="text"
              placeholder="Nhập email của bạn"
            />
            <div className="style-footer-right hover:bg-[black] cursor-pointer">
              Đăng ký
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 w-[75%] m-auto py-4 sm:grid-cols-1 sm:w-[90%]">
        <div className="col-span-2">
          <img src={logo} alt="logo" />
          <div className="flex items-center gap-6">
            <MdAddIcCall className="text-4xl" />
            <div>
              <h1 className="text-sm text-[gray]">Hỗ trợ trực tuyến</h1>
              <h1 className="text-xl">0.888.000.112</h1>
            </div>
          </div>
          <h1 className="font-semibold">Địa chỉ</h1>
          <h1 className="text-[gray]">
            ABS đường 123, Phường 11, Quận A, Tp Hồ Chí Minh
          </h1>
          <div className="grid grid-cols-3 my-6">
            <div className="flex text-2xl text-[gray] gap-6">
              <FaFacebookF />
              <CiInstagram />
              <AiOutlineYoutube />
            </div>
            <div className="col-span-2">
              <img className="w-[50%]" src={bocongthuong} alt="logo" />
            </div>
          </div>
        </div>
        <div className="sm:mb-2">
          <ul className="grid gap-y-1">
            <li className="font-bold mb-2">Thông tin cần biết</li>
            <li>Bảo hành, đổi trả</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Thỏa thuận sử dụng</li>
            <li>Thỏa thuận bảo mật</li>
            <li>Quy chế hoạt động</li>
          </ul>
        </div>
        <div>
          <ul className="grid gap-y-1">
            <li className="font-bold mb-2">Hỗ trợ</li>
            <li>Giới thiệu</li>
            <li>Thông tin liên hệ</li>
            <li>Hỏi đáp</li>
            <li>TTin công nghệ</li>
          </ul>
        </div>
        <div>
          <ul className="grid gap-y-1">
            <li className="font-bold mb-2">Danh mục</li>
            <li>Phụ kiện</li>
            <li>Chuột</li>
            <li>Bàn - Ghế</li>
            <li>Bàn phím</li>
            <li>Linh kiện PC</li>
          </ul>
        </div>
      </div>
      <div className="bg-mainGray">
        <div className="style-flex w-[75%] m-auto">
          <div className="flex">
            <h1>© Gearshop.vn</h1>-<h1>All Rights Reserved</h1>
          </div>
          <div>
            <img className="w-[50%]" src={bank} alt="logobank" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
