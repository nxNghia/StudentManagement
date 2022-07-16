/** @format */

import React from "react";
import "./StudentCard.css";
import UserAvatar from "../../img/user.svg";
const StudentCard = ({ student, onClick }) => {
  return (
    <div className='student-card' onClick={onClick}>
      <div className='avatar-box'>
        <img src={UserAvatar} alt='' />
      </div>
      <span>{student.name}</span>
      <div>{student.student_id}</div>
      <div>CPA: {student.cpa}</div>
    </div>
  );
};

export default StudentCard;
