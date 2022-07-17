/** @format */

import React from "react";
import "./Registration.css";
import { API } from "../../app/API";
import { useSelector } from "react-redux";
import { userSelector } from "../../selectors/user.selector";
import axios from "axios";
const Registration = ({ soureName, onCancel, type }) => {
  const user = useSelector(userSelector);
  const handleSave = () => {
    if (type === "subject") {
      console.log({
        student_id: user.id,
        subject_id: soureName.id,
        class_id: null,
      });
      axios.post("/student/courseRegister", {
        student_id: user.id,
        subject_id: soureName.id,
        class_id: null,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      axios.post("/student/courseRegister", {
        student_id: user.id,
        subject_id: soureName.subject_id,
        class_id: soureName.id,
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
        {soureName.name}
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
