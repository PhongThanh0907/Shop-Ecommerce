import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userAPI";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      userName: "",
      isAdmin: false,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <div className="w-[80%] m-auto sm:w-[90%]">
      <div className="flex gap-4 py-5">
        <Link to="/">
          <h1>Trang chủ</h1>
        </Link>
        <MdOutlineKeyboardArrowRight className="text-2xl text-[gray]" />
        <h1>Đăng nhâp</h1>
      </div>
      <div className="relative flex items-center justify-center">
        <form onSubmit={handleLogin} className="text-center font-bold">
          <h1 className="text-2xl mb-6">Đăng Nhập</h1>
          <div className="bg-mainColor py-10 w-[600px] rounded-lg sm:w-full">
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
                className="focus:outline-none focus:shadow-outline py-1 px-2 rounded w-[60%]"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto my-6 sm:text-sm sm:w-full gap-2 sm:grid sm:grid-cols-1">
              <button
                type="submit"
                className="bg-[white] px-10 py-2 rounded sm:px-6 sm:py-2 sm:text-[gray] sm:w-[50%] sm:m-auto sm:my-2"
              >
                ĐĂNG NHẬP
              </button>
              <Link to="/dang-ky">
                <p className="text-[#bfc9d2]">
                  Bạn chưa có tài khoản{" "}
                  <button className="text-[white] underline hover:text-[#0099b1] duration-300">
                    Đăng Ký
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

export default Login;
