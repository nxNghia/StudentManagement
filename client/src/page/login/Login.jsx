/** @format */

import React, { useState } from "react";
import Input from "../../component/input/Input";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/authSlice";
import "./Login.css";
import Cookie from "universal-cookie";
import { API } from "../../app/API";
const cookie = new Cookie();
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleLogIn = async () => {
    await API.post("/login", data, {
      withCredentials: true,
    })
      .then((res) => {
        const user = {
          ...res.data.user,
          type: cookie.get("user").type,
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(logIn(user));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='login-container'>
      <h1>Classer</h1>
      <div className='line'></div>
      <Input
        placeholder='メールアドレス'
        type='text'
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />
      <Input
        placeholder='パスワード'
        type='password'
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
        onKeyUp={handleLogIn}
      />
      <span>パスワードをお忘れ</span>
      <button onClick={handleLogIn}>ログイン</button>
    </div>
  );
};

export default Login;
