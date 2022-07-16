/** @format */

import React from "react";
import "./ClassModal.css";
import Input from "../input/Input";
import MySelect from "../Select/MySelect";
const ClassModal = () => {
  const data = [
    { value: 1, label: "A" },
    { value: 2, label: "B" },
    { value: 3, label: "C" },
    { value: 4, label: "D" },
  ];
  const handleSave = () => {
    console.log("ABC");
  };
  return (
    <div className='class-modal'>
      <div className='form-content'>
        <div className='form-label'>クラス名</div>
        <Input width={"calc(100% - 170px)"} />
      </div>
      <div className='form-content'>
        <div className='modal-content'>
          <div className='form-label'>科目</div>
          <MySelect source={data} placeholder='学部' />
        </div>
        <div className='modal-content'>
          <div className='form-label'>担当者</div>
          <MySelect source={data} placeholder='担当者' />
        </div>
      </div>
      <div className='form-content'>
        <div className='form-label'>終了日</div>
        <Input />
        <i class='fa fa-calendar' aria-hidden='true'></i>
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

export default ClassModal;
