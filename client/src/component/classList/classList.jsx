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
import { getAllAvailableClasses, getAllClasses } from "../../actions/class.action";
import { getAllAdmin } from "../../actions/common.actions";
import { allAdminsSelector } from "../../selectors/common.selector";
import { getAllSubjects } from "../../actions/subject.actions";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const columnName = [
  'Id', 'クラス名', '担当者', '学生数', '終了日'
];

const ClassList = ({ canAdd, canAssign=false }) => {
  const dispatch = useDispatch();
  const data = useSelector(allClassesSelector);
  const [allClasses, setAllClasses] = useState([])
  const teachers = useSelector(allAdminsSelector)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const getTeacher = (id) => {
    const teacher =  teachers.filter(teacher => teacher.id === id)
    return teacher[0].name
  } 
  const [source, setSource] = useState(null)
  const handleOnclick = (index) => {
    if( canAdd === false) {
      setIsOpen2(true);
      setSource({...allClasses[index]});
    }
  }

  useEffect(() => {
    setAllClasses(data.map((item)=> ({...item,end_date: item.end_date.slice(0,10) , teacher: getTeacher(item.teacher)})))
    dispatch(getAllAdmin());
    const auth = cookie.get('user');
    
    if (auth.type === 'admin') {
      dispatch(getAllClasses());
    } else {
      dispatch(getAllAvailableClasses(auth.id));
    }

    dispatch(getAllSubjects());
  }, []);

  useEffect(() => {
    setAllClasses(data.map((item)=> ({...item,end_date: item.end_date.slice(0,10) , teacher: getTeacher(item.teacher)})));
  }, [data]);

  return (
    <div className="classList">
      <div className="containerClassList" style={{justifyContent: canAdd ? 'space-between' : 'flex-end'}}>
        {canAdd && <button onClick={()=>setIsOpen(true)} className="add" style={{ borderRadius: "5px" }}>追加</button>}
        <Input/>
      </div>
      <List onClick={id => handleOnclick(id)} lists={allClasses} columnName={columnName} special={[2]} ratio='5% auto 21%  18% 14%' labels={['id', 'name', 'teacher', 'students', 'end_date']}/>
      <MODAL open={isOpen && canAdd} setClose={()=> {setIsOpen(false)}} body = {<ClassModal/>}/>
      <MODAL open={isOpen2} setClose={()=> {setIsOpen2(false)}} body={<Registration onCancel={()=> setIsOpen2(false)} soureName={source} label="className"/>}/>
    </div>
  );
};

export default ClassList;
