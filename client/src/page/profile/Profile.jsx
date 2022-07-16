/** @format */

import React, { useState } from "react";
import Avatar from "../../img/user.svg";
import "./Profile.css";
const Profile = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: user.id,
    name: user.name,
    password: "",
    date: user.date,
    scholarship: user.scholarship,
    email: user.email,
    cpa: user.cpa,
    gender: user.gender,
    student_id: user.student_id,
  });
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleChangeName = (e) => {
    setEditData({ ...editData, name: e.target.value });
  };
  const handleChangeDate = (e) => {
    setEditData({ ...editData, date: e.target.value });
  };
  const handleChangePassword = (e) => {
    setEditData({ ...editData, password: e.target.value });
  };
  const handleChangeScholarShip = (e) => {
    setEditData({
      ...editData,
      scholarship: e.target.value,
    });
  };
  const handleChangeCpa = (e) => {
    setEditData({ ...editData, cpa: e.target.value });
  };
  const handleSave = () => {
    setIsEdit(false);
  };
  const handleCancel = () => {
    setIsEdit(false);
  };
  return (
    <div>
      <div className='profile'>
        <h1>
          {isEdit ? "プロフィール変更" : "プロフィール"}
        </h1>
        <div className='profile-content'>
          {isEdit === false && (
            <div className='profile-left'>
              <div className='user-img'>
                <img src={Avatar} />
              </div>
              <button onClick={handleEdit}>
                プロフィールを変更する
              </button>
            </div>
          )}
          <div
            className='profile-right'
            style={{ margin: isEdit ? "0 auto" : "0" }}>
            <div className='content'>
              <div className='content-field'>名前</div>
              {isEdit ? (
                <input
                  value={editData.name}
                  onChange={handleChangeName}></input>
              ) : (
                <span>{user.name}</span>
              )}
            </div>
            <div className='content'>
              <div className='content-field'>生年月日</div>
              {isEdit ? (
                <input
                  value={editData.date}
                  onChange={handleChangeDate}></input>
              ) : (
                <span>{user.date}</span>
              )}
            </div>
            <div className='content'>
              <div className='content-field'>
                {isEdit ? "パスワード" : "メールアドレス"}
              </div>
              {isEdit ? (
                <input
                  type='password'
                  value={editData.password}
                  placeholder='パスワードを変更したくない場合、空白のままにします'
                  onChange={handleChangePassword}></input>
              ) : (
                <span>{user.email}</span>
              )}
            </div>
            <div className='content'>
              <div className='content-field'>
                {isEdit ? "スカラシップ" : "性別"}
              </div>
              {isEdit ? (
                <input
                  value={editData.scholarship}
                  onChange={
                    handleChangeScholarShip
                  }></input>
              ) : (
                <span>{user.gender ? "男" : "女"}</span>
              )}
            </div>
            {isEdit === false && (
              <div className='content'>
                <div className='content-field'>
                  学籍番号
                </div>
                <span>{user.student_id}</span>
              </div>
            )}
            <div className='content'>
              <div className='content-field'>CPA</div>
              {isEdit ? (
                <input
                  value={editData.cpa}
                  onChange={handleChangeCpa}></input>
              ) : (
                <span>{user.cpa}</span>
              )}
            </div>
            {isEdit === false ? (
              <div className='content'>
                <div className='content-field'>
                  スカラシップ
                </div>
                <span>
                  {user.scholarship ? "有り" : "無し"}
                </span>
              </div>
            ) : (
              <div className='btn-container'>
                <button
                  className='accept-add'
                  onClick={handleSave}>
                  セーブ
                </button>
                <button
                  className='deny-add'
                  onClick={handleCancel}>
                  キャンセル
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
