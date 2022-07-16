/** @format */

import React, { useState, useEffect } from "react";
import MySelect from "../Select/MySelect";
import Input from "../input/Input";
import StudentCard from "../studentCard/StudentCard";
import Filter from "../../img/filter.svg";
import { API } from "../../app/API";
import "./StudentManager.css";
import Profile from "../../page/profile/Profile";
const StudentManager = () => {
  const data = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];
  const [selected, setSelected] = useState(null);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    API.get("/student/get/id/asc")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  },[])
  

  return (
    <div className='student-manager'>
      <div style={{width: '100%'}}>
        <div className='tools'>
          <Input />
          <MySelect source={data} placeholder='GPA' />
          <img src={Filter} alt='' />
        </div>
        <div className='student-list'>
          {students.map((student, index) => {
            return (
              <StudentCard
                key={index}
                student={student}
                onClick={() => {
                  setSelected(student);
                }}
              />
            );
          })}
        </div>
      </div>
      {selected && (
        <div className="view-profile">
          <div className="time" onClick={()=> {
            setSelected(null)
          }}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <Profile user={selected} />
        </div>
      )}
    </div>
  );
};

export default StudentManager;
