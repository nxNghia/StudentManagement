/** @format */

import React from "react";
import "./Registration.css";
const Registration = ({ soureName, label }) => {
  const handleSave = () => {
    console.log('save')
  }
  return (
    <div className='registration'>
      <div className='register-content'>
        {soureName[label]}コースに登録してもよろしいですか？
      </div>
      <div className='btn-container'>
        <button className='accept-add' onClick={handleSave}>
          保存
        </button>
        <button className='deny-add' onClick={handleSave}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Registration;
