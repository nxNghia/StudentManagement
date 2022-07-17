/** @format */

import React from "react";
import "./Registration.css";
const Registration = ({ soureName, label, onCancel }) => {
  const handleSave = () => {
    onCancel();
  };
  return (
    <div className='registration'>
      <div className='register-content'>
        {soureName[label]}コースに登録してもよろしいですか？
      </div>
      <div className='btn-container'>
        <button className='accept-add' onClick={handleSave}>
          保存
        </button>
        <button className='deny-add' onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Registration;
