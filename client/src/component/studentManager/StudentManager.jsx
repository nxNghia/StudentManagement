/** @format */

import React from "react";
import MySelect from '../Select/MySelect'
import Input from "../input/Input";
import StudentCard from "../studentCard/StudentCard";
import Filter from "../../img/filter.svg";

import "./StudentManager.css";

const StudentManager = () => {
  const data = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" }
  ];
  const students = [
    {name: 'Abra. Lincoln', code: '09US0212', GPA: 3.6},
    {name: 'Napo. Bonaparte', code: '69FR0815', GPA: 3.6},
    {name: 'Ben. Franklin', code: '06US0117', GPA: 3.6},
    {name: 'Theo. Roosevelt', code: '58US1027', GPA: 3.6},
    {name: 'Wins. Churchill', code: '74GB1130', GPA: 3.6},
    {name: 'Marg. Thatcher', code: '25GB1013', GPA: 3.6},
    {name: 'M. Gorbachyov', code: '09US0212', GPA: 3.6},
    {name: 'Ban Ki-moon', code: '44SK0613', GPA: 3.6},
    {name: 'Nelson Mandela', code: '09US0212', GPA: 3.6},
  ]
  return (
    <div className='student-manager'>
      <div className='tools'>
        <Input/>
        <MySelect source={data} placeholder='GPA' />
        <img src={Filter} alt='' />
      </div>
      <div className='student-list'>
        {students.map((student) => {
            return(
                <StudentCard student={student}/>
            )
        })}
      </div>
    </div>
  );
};

export default StudentManager;
