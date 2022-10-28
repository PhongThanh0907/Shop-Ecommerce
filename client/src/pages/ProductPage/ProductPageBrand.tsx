import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import ItemProduct from "../../components/ItemProduct";
import { Brand } from "../../interfaces/brand";
import { Product } from "../../interfaces/product";
import productAPI from "../../services/productAPI";

const ProductPageBrand = () => {
  const [valueBrand, setValueBrand] = useState<string[]>([]);
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();
  const [typePrice, setTypePrice] = useState<string>();

  const [brandList, setBrandList] = useState<Brand[]>();
  const [productFilterList, setProductFilterList] = useState<Product[]>();
  const { id } = useParams<{ id?: string | any }>();

  const fetchBrandList = async () => {
    try {
      const res = await productAPI.getBrandList();
      setBrandList(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProduct = async () => {
    try {
      const res = await productAPI.getProductByType(
        "",
        [...valueBrand, id],
        min,
        max,
        typePrice
      );
      setProductFilterList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchBrandList();
  }, [valueBrand, min, max, typePrice, id]);

  return (
    <div className="w-[80%] m-auto sm:w-[90%] sm:m-auto">
      <div className="style-flex w-[25%] my-6 sm:w-[80%]">
        <Link to="/">
          <h1>Trang chủ</h1>
        </Link>
        <MdOutlineKeyboardArrowRight className="text-2xl text-[gray]" />
        <h1>VGA - Card Màn Hình</h1>
      </div>
      <div className="grid grid-cols-4 gap-8 sm:grid-cols-1 sm:gap-0">
        <div className="col-span-1 p-5 border border-mainGray h-[550px]">
          <div>
            <div className="relative">
              <h1 className="text-2xl sm:text-lg">Tìm kiếm</h1>
              <hr className="absolute -bottom-4 bg-mainColor w-[40%] border-mainGray h-[2px] sm:w-[25%]" />
            </div>
            <hr className="bg-mainGray border-mainGray h-[2px] my-4" />
            <h1 className="font-bold">Thương hiệu</h1>
            <div className="gap-y-2 grid py-4">
              {brandList?.map((item) => (
                <div key={item._id}>
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.name}
                    id={item.name}
                    // onChange={(e) => {
                    //   if (e.target.checked && !valueBrand.includes(item._id)) {
                    //     setValueBrand([...valueBrand, item._id]);
                    //     dispatch(brandFilterChange([...valueBrand, item._id]));
                    //   } else if (valueBrand.includes(item._id)) {
                    //     setValueBrand(valueBrand.filter((i) => i !== item._id));
                    //     dispatch(
                    //       brandFilterChange(
                    //         valueBrand.filter((i) => i !== item._id)
                    //       )
                    //     );
                    //   }
                    // }}
                    onChange={(e) => {
                      if (e.target.checked && !valueBrand.includes(item._id)) {
                        setValueBrand([...valueBrand, item._id]);
                      } else if (valueBrand.includes(item._id)) {
                        setValueBrand(valueBrand.filter((i) => i !== item._id));
                      }
                    }}
                  />
                  <label className="mx-1 uppercase" htmlFor={item.name}>
                    {item.name}
                  </label>
                  <label className="text-[14px] text-[gray]">(6)</label>
                </div>
              ))}
            </div>
          </div>
          <hr className="bg-mainGray border-mainGray h-[2px]" />
          <div>
            <h1 className="py-4 font-bold">Lọc theo giá</h1>
            <div className="flex justify-between items-center">
              <div>
                <input
                  type="number"
                  min={1}
                  className="w-[100px] py-1 text-center border border-[gray] text-[gray] sm:w-[120px]"
                  onChange={(e) => {
                    setMin(e.target.valueAsNumber);
                  }}
                />
              </div>
              <AiOutlineArrowRight />
              <div>
                <input
                  type="number"
                  max={1000000000}
                  className="w-[100px] py-1 text-center border border-[gray] sm:w-[120px]"
                  onChange={(e) => setMax(e.target.valueAsNumber)}
                />
              </div>
            </div>
          </div>
          <div
            className="px-6 py-2 bg-mainColor rounded-lg font-bold text-[white] my-8 text-center cursor-pointer"
            onClick={() => fetchProduct()}
          >
            Tìm kiếm
          </div>
        </div>
        <div className="w-full col-span-3">
          <h1 className="text-2xl mb-4 sm:text-xl">VGA - Card Màn Hình</h1>
          <div className="text-right py-4 bg-mainGray rounded-xl sm:py-2">
            <select
              id="filter"
              className="border border-mainColor rounded-xl p-1 focus:outline-none focus:shadow-outline text-[gray] mr-8 sm:mr-2"
              onChange={(e) => setTypePrice(e.target.value)}
              onClick={() => fetchProduct()}
            >
              <option className="w-[100px]" value="1">
                Sắp xếp theo
              </option>
              <option value="0">Mặc định</option>
              <option value="1">Giá: Từ thấp đến cao</option>
              <option value="-1">Giá: Từ cao đến thấp</option>
            </select>
          </div>
          <div className="grid grid-cols-3 my-6 gap-y-4">
            {productFilterList?.map((item) => (
              <ItemProduct key={item._id} item={item} idProduct={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageBrand;
