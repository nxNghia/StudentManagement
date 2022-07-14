/** @format */

import React, { useState, useEffect } from "react";
import Avatar from "../../img/user.svg";
import Header from "../../component/header/Header";
import { useSelector } from "react-redux";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
const Profile = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        onLogOut={() => {
          navigate("/");
        }}
      />
      <div className='profile'>
        <h1>プロフィール</h1>
        <div className='profile-content'>
          <div className='profile-left'>
            <div className='user-img'>
              <img src={Avatar} />
            </div>
            <button>プロフィールを変更する</button>
          </div>
          <div className='profile-right'>
            <div className='content'>
              <div className='content-field'>名前</div>
              <span>{user.name}</span>
            </div>
            <div className='content'>
              <div className='content-field'>生年月日</div>
              <span>{user.date}</span>
            </div>
            <div className='content'>
              <div className='content-field'>
                メールアドレス
              </div>
              <span>{user.email}</span>
            </div>
            <div className='content'>
              <div className='content-field'>性別</div>
              <span>{user.gender ? "男" : "女"}</span>
            </div>
            <div className='content'>
              <div className='content-field'>学籍番号</div>
              <span>{user.student_id}</span>
            </div>
            <div className='content'>
              <div className='content-field'>CPA</div>
              <span>{user.cpa}</span>
            </div>
            <div className='content'>
              <div className='content-field'>
                スカラシップ
              </div>
              <span>
                {user.scholarship ? "有り" : "無し"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
