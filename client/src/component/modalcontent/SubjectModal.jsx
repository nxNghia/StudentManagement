/** @format */

import React from "react";
import "./SubjectModal.css";
import Input from "../input/Input";
import MySelect from "../Select/MySelect";
import { useSelector } from "react-redux";
import { allFacultiesSelector } from "../../selectors/common.selector";

const SubjectModal = () => {
  const data = useSelector(allFacultiesSelector).map(faculty => ({value: faculty.id, label: faculty.name}));

  const handleSave = () => {
    console.log("?");
  };

  return (
    <div className='subject-modal'>
      <div className='form-content'>
        <div className='form-label'>科目名</div>
        <Input width={"calc(100% - 170px)"} />
      </div>
      <div className='form-content'>
        <div className='form-content'>
          <div className='form-label'>学部</div>
          <MySelect source={data} placeholder='学部' />
        </div>
        <div className='form-content'>
          <div className='form-label'>クレジット</div>
          <Input width={"calc(100% - 170px)"} />
        </div>
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

export default SubjectModal;
