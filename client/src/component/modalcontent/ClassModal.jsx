/** @format */

import React, { useState } from "react";
import "./ClassModal.css";
import Input from "../input/Input";
import MySelect from "../Select/MySelect";
import { useDispatch, useSelector } from "react-redux";
import { allSubjectsSelector } from "../../selectors/subject.selector";
import { allAdminsSelector } from "../../selectors/common.selector";
import { addClass } from "../../actions/class.action";
const ClassModal = () => {
  const dispatch = useDispatch();
  const data = useSelector(allSubjectsSelector).map(subject => ({value: subject.id, label: subject.name}));
  const adminData = useSelector(allAdminsSelector).map(admin => ({value: admin.id, label: admin.name}));
  
  const [newClass, setNewClass] = useState({students: 0, faculty_id: 1});
  
  const handleSave = () => {
    dispatch(addClass(newClass));
  };
  
  return (
    <div className='class-modal'>
      <div className='form-content'>
        <div className='form-label'>クラス名</div>
        <Input width={"calc(100% - 170px)"} onChange={e => setNewClass({...newClass, name: e.target.value})} />
      </div>
      <div className='form-content'>
        <div className='modal-content'>
          <div className='form-label'>科目</div>
          <MySelect source={data} placeholder='学部' onChange={value => setNewClass({...newClass, subject_id: value.value})} />
        </div>
        <div className='modal-content'>
          <div className='form-label'>担当者</div>
          <MySelect source={adminData} placeholder='担当者' onChange={value => setNewClass({...newClass, teacher: value.value})} />
        </div>
      </div>
      <div className='form-content'>
        <div className='form-label'>終了日</div>
        <Input onChange={e => setNewClass({...newClass, end_date: e.target.value})} />
        <i class='fa fa-calendar' aria-hidden='true'></i>
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

export default ClassModal;
