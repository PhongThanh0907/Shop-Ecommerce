import React, { useEffect, useState } from "react";
import { CgFormatJustify } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import productAPI from "../../services/productAPI";
import { Brand } from "../../interfaces/brand";

const HeaderHomePage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [brand, setBrand] = useState<Brand[]>();
  const navigate = useNavigate();
  const { cart, total } = useSelector((state: RootState) => state.cart);

  const handleClick = () => {
    navigate(`/card-man-hinh/`, { state: { searchValue } });
  };

  const getBrandList = async () => {
    try {
      const res = await productAPI.getBrandList();
      setBrand(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBrandList();
  }, []);

  console.log(searchValue);

  return (
    <div className="bg-mainColor text-[white] font-bold sm:my-4 sm:py-2">
      <div className="style-default sm:grid sm:grid-cols-1">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex gap-2 items-center cursor-pointer relative sm:m-auto sm:my-3"
        >
          <CgFormatJustify className="text-2xl" />
          <h1>Danh mục sản phẩm</h1>
          <IoIosArrowDown className="text-xl" />
          {!openMenu ? (
            <div className="style-test"></div>
          ) : (
            <div className="top-[-95px] style-listProduct sm:z-10 sm:bg-[white] sm:left[-35px] sm:-top-[100px] z-10 bg-[white] rounded">
              <ul>
                <li className="menu-listProduct">
                  <Link to="">Khuyến Mãi</Link>
                </li>
                <li className="menu-listProduct">
                  <Link to="">Sản Phẩm Bán Chạy</Link>
                </li>
                <li className="menu-listProduct">
                  <Link to="">Xây dụng cấu hình</Link>
                </li>
                <li className="menu-listProduct">
                  <Link to="">Gearshop PC</Link>
                </li>
                <li className="py-2 ">
                  <div className="text-[gray] flex justify-between items-center relative group">
                    <Link className="" to="/card-man-hinh">
                      Card Màn Hình
                    </Link>
                    <MdOutlineKeyboardArrowRight className="text-xl" />
                    <div className="bg-[white] style-group w-[10px] group-hover:visible group-hover:opacity-100 group-hover:top-[-195px] group-hover:left-[258px] group-hover:w-[800px] group-hover:h-[248px] group-hover:border-[2px]  group-hover:border-mainColor">
                      <ul className="p-6 grid grid-cols-5 gap-y-8">
                        {brand?.map((brandItem) => (
                          <Link
                            to={`/card-man-hinh/${brandItem._id}`}
                            onClick={() => setOpenMenuUser(false)}
                          >
                            <li className=" hover:text-[black] uppercase">
                              {brandItem.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center w-[600px] sm:w-full my-3">
          <input
            className="style-input focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nội dung tìm kiếm"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div
            className="style-input-right hover:bg-[black] cursor-pointer"
            onClick={() => handleClick()}
          >
            <HiSearch />
          </div>
        </div>
        <div className="flex items-center gap-8 relative sm:py-3 sm:m-auto">
          <BiUserCircle
            onClick={() => setOpenMenuUser(!openMenuUser)}
            className="text-3xl cursor-pointer relative"
          />
          {!openMenuUser ? (
            <></>
          ) : (
            <div className="style-menuUser sm:top-[60px] sm:w-[250px] sm:-left-[50px] z-10 bg-[white]">
              <div className="px-2 py-4">
                <Link to="/dang-ky">
                  <button
                    onClick={() => setOpenMenuUser(false)}
                    className="px-4 py-1 text-[white] bg-mainColor hover:bg-[#0099b1] rounded duration-300"
                  >
                    Đăng Ký
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/dang-nhap">
                  <button
                    onClick={() => setOpenMenuUser(false)}
                    className="px-4 py-1 text-[white] bg-mainColor hover:bg-[#0099b1] rounded duration-300"
                  >
                    Đăng Nhập
                  </button>
                </Link>
              </div>
            </div>
          )}
          <Link to="/gio-hang">
            <div className="flex items-center cursor-pointer">
              <div className="relative ">
                <HiOutlineShoppingBag className="text-3xl" />
                <div className="absolute rounded-full px-1 bg-[#333e48] text-sm right-0 top-3">
                  <h1>{total}</h1>
                </div>
              </div>
              <h1>Giỏ hàng</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
