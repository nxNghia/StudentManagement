import React, {useEffect, useState} from "react";
import "./classList.css";
import "antd/dist/antd.min.css";
import MODAL from '../MODAL/MODAL'
import ClassModal from '../modalcontent/ClassModal'
import Registration from "../modalcontent/Registration";
import List from '../List/List';
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { allClassesSelector } from "../../selectors/class.selector";
import { getAllClasses } from "../../actions/class.action";
import { getAllAdmin } from "../../actions/common.actions";
import { allAdminsSelector } from "../../selectors/common.selector";
import { getAllSubjects } from "../../actions/subject.actions";

const columnName = [
  'Id', 'クラス名', '担当者', '学生数', '終了日'
];

const ClassList = ({ canAdd, canAssign=false }) => {
  const dispatch = useDispatch();
  const data = useSelector(allClassesSelector);
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [source, setSource] = useState(null)
  const handleOnclick = (index) => {
    setIsOpen2(true)
    setSource({...data[index]})
  }

  useEffect(() => {
    dispatch(getAllClasses());
    dispatch(getAllAdmin());
    dispatch(getAllSubjects());
  }, []);

  return (
    <div className="classList">
      <div className="containerClassList" style={{justifyContent: canAdd ? 'space-between' : 'flex-end'}}>
        {canAdd && <button onClick={()=>setIsOpen(true)} className="add" style={{ borderRadius: "5px" }}>追加</button>}
        <Input/>
      </div>
      <List onClick={id => handleOnclick(id)} lists={data} columnName={columnName} special={[2]} ratio='5% auto 21%  18% 14%'/>
      <MODAL open={isOpen && canAdd} setClose={()=> {setIsOpen(false)}} body = {<ClassModal/>}/>
      <MODAL open={isOpen2 && canAssign} setClose={()=> {setIsOpen2(false)}} body={<Registration soureName={source} label="className"/>}/>
    </div>
  );
};

export default ClassList;
