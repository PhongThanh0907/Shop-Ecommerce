import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import ItemProduct from "../../components/ItemProduct";
import { Brand } from "../../interfaces/brand";
import { Product } from "../../interfaces/product";
import productAPI from "../../services/productAPI";

const ProductPageBrand = () => {
  const { id } = useParams<{ id?: string | any }>();
  const [brandDetail, setBrandDetail] = useState<Brand>();
  const [brandList, setBrandList] = useState<Brand[]>();
  const [products, setProducts] = useState<Product[]>();
  const [valueBrand, setValueBrand] = useState<string[]>([]);

  const fetchBrand = async () => {
    try {
      const res = await productAPI.getBrand(id);
      setBrandDetail(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllBrand = async () => {
    try {
      const res = await productAPI.getBrandList();
      setBrandList(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProductByBrand = async () => {
    try {
      const res = await productAPI.getProductByBrands([id]);
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProduct = async () => {
    try {
      if (valueBrand) {
        const res = await productAPI.getProductByBrands(valueBrand);
        setProducts(res);
      } else {
        fetchProductByBrand();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBrand();
    fetchProductByBrand();
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [valueBrand]);

  useEffect(() => {
    fetchAllBrand();
  }, []);
  console.log(products);

  return (
    <div className="w-[80%] m-auto sm:w-[90%] sm:m-auto">
      <div className="style-flex w-[30%] my-6 sm:w-[80%]">
        <Link to="/">
          <h1>Trang chủ</h1>
        </Link>
        <MdOutlineKeyboardArrowRight className="text-2xl text-[gray] " />
        <h1>
          VGA - Card Màn Hình{" "}
          <span className="capitalize">{brandDetail?.name}</span>
        </h1>
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
            <div className="gap-y-2 grid py-4 uppercase">
              {brandList?.map((item) => (
                <div key={item._id}>
                  <input
                    type="checkbox"
                    id={item.name}
                    name={item.name}
                    value={item.name}
                    onChange={(e) => {
                      if (e.target.checked && !valueBrand.includes(item._id)) {
                        setValueBrand([...valueBrand, item._id]);
                      } else if (valueBrand.includes(item._id)) {
                        setValueBrand(valueBrand.filter((i) => i !== item._id));
                      }
                    }}
                  />
                  <label className="mx-1 " htmlFor={item.name}>
                    {item.name}
                  </label>
                  <label className="text-[12px] text-[gray]">(6)</label>
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
                />
              </div>
              <AiOutlineArrowRight />
              <div>
                <input
                  type="number"
                  min={1}
                  className="w-[100px] py-1 text-center border border-[gray] sm:w-[120px]"
                />
              </div>
            </div>
          </div>
          <div className="px-6 py-2 bg-mainColor rounded-lg font-bold text-[white] my-8 text-center">
            <button>Tìm kiếm</button>
          </div>
        </div>
        <div className="w-full col-span-3">
          <h1 className="text-2xl mb-4 sm:text-xl uppercase">
            VGA - Card Màn Hình - {brandDetail?.name}
          </h1>
          <div className="text-right py-4 bg-mainGray rounded-xl sm:py-2">
            <select
              id="filter"
              className="border border-mainColor rounded-xl p-1 focus:outline-none focus:shadow-outline text-[gray] mr-8 sm:mr-2"
            >
              <option className="w-[100px]" value="1">
                Sắp xếp theo
              </option>
              <option value="2">Mặc định</option>
              <option value="3">Giá: Từ thấp đến cao</option>
              <option value="4">Giá: Từ cao đến thấp</option>
            </select>
          </div>
          <div className="grid grid-cols-3 my-6 gap-y-4">
            {products?.map((item) => (
              <ItemProduct item={item} idProduct={item._id} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageBrand;
