import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/userAPI";

type Props = {};

const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const registerUser = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const res = await userAPI.createUser(values);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleRegister = (e: any) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      userName: username,
      isAdmin: false,
    };
    registerUser(newUser, dispatch, navigate);
  };

  return (
    <div className="w-[80%] m-auto sm:w-[90%]">
      <div className="flex gap-4 py-5">
        <Link to="/">
          <h1>Trang chủ</h1>
        </Link>
        <MdOutlineKeyboardArrowRight className="text-2xl text-[gray]" />
        <h1>Đăng ký</h1>
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleRegister}
          className="text-center relative z-10 font-bold"
        >
          <h1 className="text-2xl mb-6">Đăng Ký Mới</h1>
          <div className="bg-mainColor py-10 w-[600px] rounded-lg sm:w-full">
            <div className="flex justify-between items-center w-[90%] m-auto my-6">
              <h1 className="text-[white] font-semibold">Họ và Tên (*)</h1>
              <input
                className="focus:outline-none focus:shadow-outline py-1 px-2 rounded w-[60%]"
                type="name"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto my-6">
              <h1 className="text-[white] font-semibold">Email (*)</h1>
              <input
                className="focus:outline-none focus:shadow-outline py-1 px-2 rounded w-[60%]"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto">
              <h1 className="text-[white] font-semibold">Mật khẩu (*)</h1>
              <input
                className="focus:outline-none focus:shadow-outline py-1 px-2  rounded w-[60%]"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto my-6 sm:text-sm sm:w-full sm:gap-3 sm:grid sm:grid-cols-1">
              <button
                type="submit"
                className="bg-[white] px-10 py-2 rounded sm:w-[50%] sm:m-auto"
              >
                ĐĂNG KÝ
              </button>
              <Link to="/dang-nhap">
                <p className="text-[#bfc9d2]">
                  Bạn đã có tài khoản{" "}
                  <button className="text-[white] underline hover:text-[#0099b1] duration-300">
                    Đăng Nhập
                  </button>{" "}
                  ngay
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
