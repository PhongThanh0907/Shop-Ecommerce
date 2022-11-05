import axios from 'axios';
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from '../features/userSlice';
import { UserType } from '../interfaces/user';


export const registerUser = async (user: UserType, dispatch: any, navigate:any) => {
    dispatch(registerStart());
    try {
      await axios.post("http://localhost:8800/api/auths/register", user);
      dispatch(registerSuccess());
      alert("Bạn đã đăng ký thành công!")
      navigate("/dang-nhap");
    } catch (err) {
      dispatch(registerFailed());
    }
};

export const loginUser = async (user:UserType, dispatch: any, navigate:any) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8800/api/auths/login", user);
      dispatch(loginSuccess(res.data));
      alert("Bạn đã đăng nhập thành công!")
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };