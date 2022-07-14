/** @format */

import React, { useState } from "react";
import MySelect from "../Select/MySelect";
import Input from "../input/Input";
import StudentCard from "../studentCard/StudentCard";
import Filter from "../../img/filter.svg";
import { API } from "../../app/API";
import "./StudentManager.css";

const StudentManager = () => {
  const data = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];
  const [students, setStudents] = useState([]);
  const allStudent = async () => {
    await API.get("/student/get/id/asc")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  };
  allStudent();
  return (
    <div className='student-manager'>
      <div className='tools'>
        <Input />
        <MySelect source={data} placeholder='GPA' />
        <img src={Filter} alt='' />
      </div>
      <div className='student-list'>
        {students.map((student, index) => {
          return (
            <StudentCard key={index} student={student} />
          );
        })}
      </div>
    </div>
  );
};

export default StudentManager;
