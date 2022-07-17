/** @format */

import React, { useState, useEffect } from "react";
import MySelect from "../Select/MySelect";
import Input from "../input/Input";
import StudentCard from "../studentCard/StudentCard";
import Filter from "../../img/filter.svg";
import Filter2 from "../../img/filter2.svg";
import { API } from "../../app/API";
import ClassStudied from "../../component/classStudied/ClassStudied";
import { Lessons } from "../../data/lessons";
import "./StudentManager.css";
import Profile from "../../page/profile/Profile";
import Achievement from "../../page/achievement/Achievement";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, removeStudent } from "../../actions/student.action";
import { allStudentsSelector } from "../../selectors/student.selector";
import MODAL from '../MODAL/MODAL'
import StudentModal from "../modalcontent/StudentModal";

const StudentManager = ({canRemove=false}) => {
  const dispatch = useDispatch();
  const studentsList = useSelector(allStudentsSelector);
  const filterData = [
    { value: 0, label: "ID", text: 'id' },
    { value: 1, label: "CPA", text: 'cpa' },
    { value: 2, label: "名前", text: 'name' }
  ];
  const [selected, setSelected] = useState(null);
  const [students, setStudents] = useState([]);
  const [order, setOrder] = useState('asc');
  const [type, setType] = useState('id');
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [handledList, setHandledList] = useState(studentsList);

  useEffect(() => {
    API.get(`/student/get/${type}/${order}`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));

    dispatch(getAllStudents({type, order}));
  }, [order, type]);

  useEffect(() => {
    setHandledList(studentsList);
  }, [studentsList]);

  const changeTypeHandle = value => {
    setType(filterData[value.value].text);
  }

  const orderToggle = () => {
    if (order === 'asc') {
      setOrder('desc');
    } else {
      setOrder('asc');
    }
  }

  const searchHandle = e => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue.length === 0)
    {
      setHandledList(studentsList);
      return;
    }
    const result = handledList.filter(item => item.email.toLowerCase().includes(searchValue) || item.name.toLowerCase().includes(searchValue) || item.cpa == searchValue || item.student_id.toLowerCase().includes(searchValue));
    setHandledList(result);
  }

  const handleRemove = () => {
    dispatch(removeStudent({id: selected.id}));
    setSelected(null);
  }

  return (
    <div className='student-manager'>
      <div style={{ width: "100%" }}>
        <div className='student-manager-control'>
          <div>
            <button onClick={()=>setIsOpen(true)} className="add" style={{ borderRadius: "5px" }}>追加</button>
          </div>
          <div className='tools'>
            <Input onChange={searchHandle} />
            <MySelect source={filterData} placeholder={filterData[0].label} onChange={changeTypeHandle} />
            <img src={order === 'asc' ? Filter : Filter2} alt='' className={order === 'asc' ? '' : 'flip'} onClick={orderToggle} />
          </div>
        </div>
        <div className='student-list'>
          {handledList.map((student, index) => {
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
        <div className='view-profile'>
          <div
            className='time'
            onClick={() => {
              setSelected(null);
            }}>
            <i
              className='fa fa-times'
              aria-hidden='true'></i>
          </div>
          <Profile user={selected} />
          {canRemove && <button className='student-remove-btn' onClick={handleRemove} >削除</button>}
          <Achievement canEdit userData={selected} />
        </div>
      )}
      <MODAL open={isOpen} setClose={()=> {setIsOpen(false)}} body = {<StudentModal onClose={() => setIsOpen(false)} />}/>
    </div>
  );
};

export default StudentManager;
