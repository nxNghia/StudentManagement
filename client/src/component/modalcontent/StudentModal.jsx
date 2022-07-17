/** @format */

import React, { useState } from "react";
import "./StudentModal.css";
import Input from "../input/Input";
import MySelect from "../Select/MySelect";
import { useDispatch, useSelector } from "react-redux";
import { allFacultiesSelector } from "../../selectors/common.selector";
import { addStudent } from "../../actions/student.action";

const StudentModal = ({onClose}) => {
  const dispatch = useDispatch();
  const data = [
    { value: 0, label: '男' },
    { value: 1, label: '女' }
  ]
  const data2 = [
    { value: 0, label: 'あり' },
    { value: 1, label: 'なし' }
  ]
  const [newStudent, setNewStudent] = useState({password: '123', scholarship: false});

  const handleSave = () => {
    dispatch(addStudent(newStudent));
  };

  return (
    <div className='student-modal'>
      <div className='form-content'>
        <div className='form-label'>名前</div>
        <Input width={"calc(100% - 170px)"} onChange={e => setNewStudent({...newStudent, name: e.target.value})} />
      </div>
      <div className='form-content'>
        <div className='form-label'>メールアドレス</div>
        <Input width={"calc(100% - 170px)"} onChange={e => setNewStudent({...newStudent, email: e.target.value})} />
      </div>
      <div className='form-content'>
        <div className='form-label'>学籍番号</div>
        <Input width={"calc(100% - 170px)"} onChange={e => setNewStudent({...newStudent, student_id: e.target.value})} />
      </div>
      <div className='form-content'>
        <div className='form-content'>
            <div className='form-label'>生年月日</div>
            <Input width={"calc(100% - 170px)"} onChange={e => setNewStudent({...newStudent, date: e.target.value})} />
        </div>
        <div className='form-content'>
            <div className='form-label'>CPA</div>
            <Input width={"calc(100% - 170px)"} onChange={e => setNewStudent({...newStudent, cpa: e.target.value})} />
        </div>
      </div>
      <div className='form-content'>
        <div className='form-content'>
          <div className='form-label'>性別</div>
          <MySelect source={data} placeholder='性別' onChange={value => setNewStudent({...newStudent, gender: value.value === 0 ? false : true})} />
        </div>
        <div className='form-content'>
            <div className='form-label'>スカラシップ</div>
            <MySelect source={data2} placeholder='スカラシップ' onChange={value => setNewStudent({...newStudent, scholarship: value.value === 0 ? false : true})} />
        </div>
      </div>
      <div className='btn-container'>
        <button className='accept-add' onClick={handleSave}>
          保存
        </button>
        <button className='deny-add' onClick={onClose}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default StudentModal;
