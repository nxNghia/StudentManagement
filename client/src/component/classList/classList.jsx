import React, {useState} from "react";
import { Table} from "antd";
import "./classList.css";
import "antd/dist/antd.min.css";
import MODAL from '../MODAL/MODAL'
import ClassModal from '../modalcontent/ClassModal'
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
const columns = [
  { title: "Id", dataIndex: "id", key: "id" },
  {
    title: "クラス名",
    dataIndex: "className",
    key: "className",
    render: (text) => <p style={{ color: "#3FAA9D" }}>{text}</p>,
  },
  {
    title: "担当者",
    dataIndex: "manager",
    key: "manager",
    render: (text) => <p style={{ color: "#3FAA9D" }}>{text}</p>,
  },
  {
    title: "学生数",
    dataIndex: "numOfStudents",
    key: "numOfStudents",
    render: (text) => <p style={{ color: "#3FAA9D" }}>{text}</p>,
  },
  {
    title: "終了日",
    key: "endDate",
    dataIndex: "endDate",
  },
];

const ClassList = ({canAdd}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="classList">
      <div className="containerClassList" style={{justifyContent: canAdd ? 'space-between' : 'flex-end'}}>
        {canAdd && <button onClick={()=>setIsOpen(true)} className="add" style={{ borderRadius: "5px" }}>追加</button>}
        <input type="text" name="" id="" className="inputClassList" />
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <MODAL open={isOpen} setClose={()=> {setIsOpen(false)}} body = {<ClassModal/>}/>
    </div>
  );
};

export default ClassList;
