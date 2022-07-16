import React, {useState} from "react";
import "./classList.css";
import "antd/dist/antd.min.css";
import MODAL from '../MODAL/MODAL'
import ClassModal from '../modalcontent/ClassModal'
import Registration from "../modalcontent/Registration";
import List from '../List/List'
const data = [
  {
    id: "1",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
  {
    id: "2",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
  {
    id: "3",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
  {
    id: "4",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
  {
    id: "1",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
  {
    id: "2",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
  {
    id: "3",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
  {
    id: "4",
    className: "John Brown",
    manager: "Tagasida Nobuyuki",
    numOfStudents: 24,
    endDate: "2022/7/15",
  },
];
const columnName = [
  'Id', 'クラス名', '担当者', '学生数', '終了日'
];

const ClassList = ({canAdd}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [source, setSource] = useState(null)
  const handleOnclick = (index) => {
    setIsOpen2(true)
    setSource({...data[index]})
    console.log(source)
  }
  return (
    <div className="classList">
      <div className="containerClassList" style={{justifyContent: canAdd ? 'space-between' : 'flex-end'}}>
        {canAdd && <button onClick={()=>setIsOpen(true)} className="add" style={{ borderRadius: "5px" }}>追加</button>}
        <input type="text" name="" id="" className="inputClassList" />
      </div>
      <List onClick={id => handleOnclick(id)} lists={data} columnName={columnName} special={[2]} ratio='5% auto 21%  18% 14%'/>
      <MODAL open={isOpen} setClose={()=> {setIsOpen(false)}} body = {<ClassModal/>}/>
      {canAdd === false && <MODAL open={isOpen2} setClose={()=> {setIsOpen2(false)}} body={<Registration soureName={source} label="className"/>}/>}
    </div>
  );
};

export default ClassList;
