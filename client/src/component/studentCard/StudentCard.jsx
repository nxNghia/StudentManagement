/** @format */

import React from "react";
import "./StudentCard.css";
import UserAvatar from "../../img/user.svg";
import { useDispatch } from "react-redux";
import { setStudent } from "../../features/studentSlice";
import { Link } from "react-router-dom";
const StudentCard = ({ student }) => {
  const dispatch = useDispatch();
  const handleSelectStudent = () => {
    dispatch(setStudent(student));
  };
  return (
    <Link
      to={`/profile`}
      style={{
        textDecoration: "none",
        color: "#000000",
      }}>
      <div
        className='student-card'
        onClick={handleSelectStudent}>
        <div className='avatar-box'>
          <img src={UserAvatar} />
        </div>
        <span>{student.name}</span>
        <div>{student.student_id}</div>
        <div>CPA: {student.cpa}</div>
      </div>
    </Link>
  );
};

export default StudentCard;
