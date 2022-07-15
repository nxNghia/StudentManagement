/** @format */

import React, { useState, useEffect } from "react";
import Avatar from "../../img/user.svg";
import Header from "../../component/header/Header";
import { useNavigate } from "react-router-dom";
import Input from "../../component/input/Input";
import "./EditProfile.css";
const EditProfile = ({ user }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: user.id,
    name: "",
    date: "",
    email: user.email,
    password: "",
    gender: user.gender,
    cpa: user.cpa,
    scholarship: false,
    student_id: user.student_id,
  });
  const [isUpdatePassword, setIsUpdatePassword] =
    useState(false);
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const handleUpdateName = (e) => {
    setData({ ...data, name: e.target.value });
  };
  const handleUpdateDate = (e) => {
    setData({ ...data, date: e.target.value });
  };
  const handleUpdatePassword = (e) => {
    setData({ ...data, password: e.target.value });
    setIsUpdatePassword(true);
  };
  const handleUpdateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className='profile'>
      <Header
        onLogOut={() => {
          navigate("/");
        }}
      />

      <h1>学生情報変更</h1>
      <div className='profile-edit'>
        <div>
          <div className='content'>
            <div className='content-field'>名前</div>
            <input
              type='text'
              value={data.name}
              onChange={handleUpdateName}></input>
          </div>
          <div className='content'>
            <div className='content-field'>生年月日</div>
            <input
              type='text'
              value={data.date}
              onChange={handleUpdateDate}></input>
          </div>
          <div className='content'>
            <div className='content-field'>パスワード</div>
            <input
              type='password'
              value={data.password}
              onChange={handleUpdatePassword}></input>
          </div>
          {isUpdatePassword && (
            <div className='content'>
              <div className='content-field'>
                パスワードを認証する
              </div>
              <input
                type='password'
                value={confirmPassword}
                onChange={
                  handleUpdateConfirmPassword
                }></input>
            </div>
          )}
          <div className='content'>
            <div className='content-field'>性別</div>
          </div>
          <div className='content'>
            <div className='content-field'>学籍番号</div>
          </div>
          <div className='content'>
            <div className='content-field'>CPA</div>
          </div>
          <div className='content'>
            <div className='content-field'>
              スカラシップ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
