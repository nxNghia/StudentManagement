/** @format */

import React, { useState } from "react";
import "./SubjectModal.css";
import Input from "../input/Input";
import MySelect from "../Select/MySelect";
import { useDispatch, useSelector } from "react-redux";
import { allFacultiesSelector } from "../../selectors/common.selector";
import { addSubject } from "../../actions/subject.actions";

const SubjectModal = () => {
  const dispatch = useDispatch();
  const data = useSelector(allFacultiesSelector).map(faculty => ({value: faculty.id, label: faculty.name}));
  const [newSubject, setNewSubject] = useState({classes: 0});

  const handleSave = () => {
    console.log(newSubject);
    dispatch(addSubject(newSubject));
  };

  return (
    <div className='subject-modal'>
      <div className='form-content'>
        <div className='form-label'>科目名</div>
        <Input width={"calc(100% - 170px)"} onChange={e => setNewSubject({...newSubject, name: e.target.value})} />
      </div>
      <div className='form-content'>
        <div className='form-content'>
          <div className='form-label'>学部</div>
          <MySelect source={data} placeholder='学部' onChange={value => setNewSubject({...newSubject, faculty: value.value})} />
        </div>
        <div className='form-content'>
          <div className='form-label'>クレジット</div>
          <Input width={"calc(100% - 170px)"} onChange={e => setNewSubject({...newSubject, credit: e.target.value})} />
        </div>
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

export default SubjectModal;
