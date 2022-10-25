import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import img1 from "../../assets/resizer.png";
import img2 from "../../assets/resizer (1).png";
import img3 from "../../assets/resizer (2).png";
import { MdAddShoppingCart, MdOutlineCancel } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import { Product } from "../../interfaces/product";
import productAPI from "../../services/productAPI";

const DetailProduct = () => {
  const { id } = useParams<{ id?: string | any }>();
  const dataImg = [img1, img2, img3];
  const [numberCount, setNumberCount] = useState(0);
  const [openMenuCart, setOpenMenuCart] = useState(false);
  const [productDetail, setProductDetail] = useState<Product>();

  const fetchProduct = async () => {
    try {
      const res = await productAPI.getProduct(id);
      setProductDetail(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(productDetail);

  const totalCount = () => {
    return numberCount * (productDetail?.price || 1000);
  };
  return (
    <div>
      <div className="style-flex w-[80%] m-auto my-6 sm:w-[90%]">
        <div className="flex gap-4 sm:gap-2 sm:text-xs">
          <Link to="/">
            <h1>Trang chủ</h1>
          </Link>
          <MdOutlineKeyboardArrowRight className="text-2xl text-[gray]" />
          <Link to="/card-man-hinh">
            <h1>VGA - Card Màn Hình</h1>
          </Link>
          <MdOutlineKeyboardArrowRight className="text-2xl text-[gray]" />
          <h1>{productDetail?.nameProduct}</h1>
        </div>
      </div>
      <div className="grid grid-cols-7 w-[80%] m-auto gap-8 sm:w-[90%] sm:text-xs sm:grid sm:grid-cols-1">
        <div className="col-span-3">
          <Carousel showArrows={false}>
            {/* {dataImg.map((item, id) => (
              <img className="" key={id} src={item} alt="img" />
            ))} */}
            {productDetail?.photos.map((imgProduct, index) => (
              <img src={imgProduct} alt="img" key={index} />
            ))}
          </Carousel>
        </div>
        <div className="col-span-2">
          <h2 className="text-sm text-[gray] sm:text-xs">
            VGA - Card Màn Hình
          </h2>
          <h1 className="text-2xl my-4 sm:text-xs">
            {productDetail?.nameProduct}
          </h1>
          <ul className="list-disc text-[gray] font-bold sm:text-xs sm:pl-2">
            <li>
              Tên sản phẩm:{" "}
              <span className="font-normal">{productDetail?.nameProduct}</span>
            </li>
            {/* <li>
              Card xử lý đồ họa:{" "}
              <span className="font-normal">{productDetail?.type}</span>
            </li>
            <li>
              Dung lượng bộ nhớ:{" "}
              <span className="font-normal">{productDetail?.ram}</span>
            </li>
            <li>
              Cores <span className="font-normal">{productDetail?.cores}</span>
            </li>
            <li>
              Core Clock:{" "}
              <span className="font-normal">{productDetail?.support}</span>
            </li>
            <li>
              Nguồn cấp:{" "}
              <span className="font-normal">{productDetail?.power}</span>
            </li> */}
            <li>
              Độ phân giải tối đa:{" "}
              <span className="font-normal">7680×4320</span>
            </li>
            <li>
              Hỗ trợ xuất hình:{" "}
              <span className="font-normal">
                PCIe 3.0/ DisplayPort/ HDMI, DVI-D
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-2 relative">
          <div className="border border-[gray] px-10 py-8 rounded-lg sm:py-4 sm:w-full">
            <h2>
              Tình trạng:{" "}
              <span className="text-[green] font-bold">Còn hàng</span>
            </h2>
            <hr className="bg-mainGray border-mainGray h-[2px] my-4" />
            <h2 className="font-bold">Mã sản phẩm: DCBF16F430</h2>
            <h2 className="mb-4">Bảo hành: 36 tháng</h2>
            <h3 className="text-xs line-through text-[gray]">
              {productDetail?.oldPrice}đ
            </h3>
            <h2 className="text-[red] text-3xl">
              {productDetail?.price.toLocaleString("vn-VN")}đ
            </h2>
            <h3 className="pt-4 pb-2">Số lượng:</h3>
            <input
              type="number"
              min={1}
              placeholder="1"
              className="w-[80%] py-1 text-center border border-[gray] text-[gray] rounded-2xl sm:w-[30%]"
              onChange={(e) => setNumberCount(parseInt(e.target.value))}
            />
            <div
              className="bg-mainColor rounded-3xl my-4 cursor-pointer hover:bg-[black] duration-300"
              onClick={() => {
                setOpenMenuCart(!openMenuCart);
              }}
            >
              <button className="flex items-center text-lg text-[white] font-semibold m-auto py-3 gap-3 sm:py-2">
                <MdAddShoppingCart />
                Mua ngay
              </button>
            </div>
          </div>
          <h2 className="font-bold my-4">
            Địa chỉ:{" "}
            <span className="font-normal">
              52 Trần Minh Quyền, Phường 11, Quận 10, Tp Hồ Chí Minh
            </span>
          </h2>
          <h2 className="font-bold my-4">
            Thời gian:{" "}
            <span className="font-normal">
              Thời gian bán hàng từ 09h00 sáng cho tới 21h00
            </span>
          </h2>
          <h2 className="font-bold my-4">
            Hotline: <span className="font-normal">123456789 - 123456779</span>
          </h2>
        </div>
        {openMenuCart && (
          <div className="style-modalcart">
            <div className="p-8 relative">
              <div className="grid grid-cols-3 gap-3">
                <img
                  className="col-span-1"
                  src={productDetail?.photos[0]}
                  alt="product"
                />
                <div className="col-span-2">
                  <h1 className="text-mainColor font-bold text-sm">
                    {productDetail?.nameProduct}
                  </h1>
                  <h2 className="text-[gray] my-2">
                    {numberCount} ×{" "}
                    {productDetail?.price?.toLocaleString("vn-VN")}đ
                  </h2>
                </div>
              </div>
              <hr className="bg-mainGray border-mainGray h-[2px] my-4" />
              <h2 className="font-bold">
                Tổng giá tiền:{" "}
                <span className="text-[red]">
                  {totalCount().toLocaleString("vn-VN")}đ
                </span>
              </h2>
              <div className="bg-mainColor w-[60%] m-auto text-center rounded-2xl my-2 text-[white] font-bold cursor-pointer hover:bg-[black] duration-300">
                <Link to="/gio-hang">
                  <div className="py-2">Đặt hàng</div>
                </Link>
              </div>
              <div
                className="absolute top-6 right-6 cursor-pointer"
                onClick={() => {
                  setOpenMenuCart(false);
                }}
              >
                <MdOutlineCancel className="text-xl text-[gray]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
