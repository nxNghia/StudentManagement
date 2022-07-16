/** @format */

import React from "react";
import "./StudentCard.css";
import UserAvatar from "../../img/user.svg";
import { useDispatch } from "react-redux";
import { setStudent } from "../../features/studentSlice";
import {} from "react-router-dom";
const StudentCard = ({ student, onClick }) => {
  const dispatch = useDispatch();
  return (
    <div className="student-card" onClick={onClick}>
      <div className="avatar-box">
        <img src={UserAvatar} />
      </div>
      <span>{student.name}</span>
      <div>{student.student_id}</div>
      <div>CPA: {student.cpa}</div>
    </div>
  );
};

export default StudentCard;
