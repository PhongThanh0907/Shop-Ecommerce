import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CgFormatJustify } from "react-icons/cg";
import { MdAddIcCall } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import ReactTooltip from "react-tooltip";

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="style-default py-2 sm:grid sm:grid-cols-1">
        <h1 className="text-sm sm:text-center">
          Chào mừng bạn đến với gearshop.vn
        </h1>
        <div>
          <ul className="grid grid-cols-4 gap-4 sm:w-[60%] sm:m-auto sm:py-2">
            <li>
              <a href="https://github.com/phongthanh2879">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://github.com/phongthanh2879">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="https://github.com/phongthanh2879">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/phongthanh2879">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="bg-mainGray border-mainGray h-[2px]" />
      <div className="style-default w-[80%] m-auto sm:grid sm:grid-cols-4">
        <Link className="sm:col-span-3" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="sm:hidden">
          <ul className="font-semibold flex gap-8">
            <li>
              <Link to={""}>Trang chủ</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)} className="relative">
              <div className="flex items-center cursor-pointer">
                Sản phẩm{" "}
                <IoIosArrowDown
                  data-tip="React-tooltip"
                  className="text-[gray]"
                />
                <ReactTooltip place="right" type="dark" effect="float">
                  Sản phẩm
                </ReactTooltip>
              </div>
            </li>
            {!openMenu ? (
              <></>
            ) : (
              <div className="absolute bg-[white] z-10 grid grid-cols-4 top-[15%] gap-6 text-sm text-[gray] border-[2px] border-mainGray p-8 border-t-[3px] border-t-mainColor">
                <ul>
                  <Link to="">
                    <li className="menu-product">MÀN HÌNH MÁY TÍNH</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">GHẾ GAMING</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">LOA-TAI NGHE</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="">
                    <li className="menu-product">BÀN GAMING</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">PHỤ KIỆN KHÁC</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">BÀN PHÍM</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="">
                    <li className="menu-product">BÀN PHÍM CUSTOM</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">LINH KIỆN PC</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">CHUỘT</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="/card-man-hinh" onClick={() => setOpenMenu(false)}>
                    <li className="menu-product">CARD MÀN HÌNH</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">LAPTOP</li>
                  </Link>
                  <Link to="">
                    <li className="menu-product">TẤT CẢ</li>
                  </Link>
                </ul>
              </div>
            )}
            <li>
              <Link to={""}>Tin tức</Link>
            </li>
            <li>
              <Link to={""}>Khuyến mãi</Link>
            </li>
            <li>
              <Link to={""}>Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div className="m-auto col-span-1 lt:hidden">
          <div
            onClick={() => setOpenMenuMobile(!openMenuMobile)}
            className=" p-2 bg-mainColor"
          >
            <CgFormatJustify className="text-[white] text-xl" />
          </div>
        </div>
        {!openMenuMobile ? (
          <div className="transition opacity-0 duration-300 lt:hidden"></div>
        ) : (
          <div className="transition col-span-4 duration-300 py-3 lt:hidden">
            <ul className="pr-20 sm:text-sm">
              <li className="menu-sm">
                <Link to={""}>Trang chủ</Link>
              </li>
              <li className="menu-sm">
                <Link className="flex items-center" to={""}>
                  Sản phẩm{" "}
                  <IoIosArrowDown
                    data-tip="React-tooltip"
                    className="text-[gray]"
                  />
                  <ReactTooltip place="right" type="dark" effect="float">
                    Sản phẩm
                  </ReactTooltip>
                </Link>
              </li>
              <li className="menu-sm">
                <Link to={""}>Tin tức</Link>
              </li>
              <li className="menu-sm">
                <Link to={""}>Khuyến mãi</Link>
              </li>
              <li className="menu-sm">
                <Link to={""}>Liên hệ</Link>
              </li>
            </ul>
          </div>
        )}
        <div className="flex items-center gap-4 sm:col-span-4 sm:m-auto sm:text-sm">
          <MdAddIcCall className="text-4xl" />
          <div>
            <h1>0.888.000.112</h1>
            <h1>Gearshopchannel@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
