/** @format */

import React from "react";
import "./Registration.css";
import { API } from "../../app/API";
import { useSelector } from "react-redux";
import { userSelector } from "../../selectors/user.selector";
const Registration = ({ soureName, onCancel, type }) => {
  const user = useSelector(userSelector);
  const handleSave = () => {
    if (type === "subject") {
      console.log({
        student_id: user.id,
        subject_id: soureName.id,
        class_id: null,
      })
      API.post("/student/courseRegister", {
        student_id: user.id,
        subject_id: soureName.id,
        class_id: null,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    onCancel();
  };
  return (
    <div className='registration'>
      <div className='register-content'>
        {type === "subject" ? soureName.name : "Lop"}
        コースに登録してもよろしいですか？
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
