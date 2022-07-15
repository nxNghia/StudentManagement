import React from "react";
import { Table, Button } from "antd";
import "./classList.css";
import "antd/dist/antd.min.css";

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

const classList = () => {
  return (
    <div className="classList">
      <div className="containerClassList">
        <Button style={{ borderRadius: "5px" }}>追加</Button>
        <input type="text" name="" id="" className="inputClassList" />
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default classList;

// export default function classList() {
//   return (
//     <div>
//       <form action="">
//         <button className="追加">追加</button>
//         <input type="text" name="classListInput" id="classListInput" />
//       </form>

//     </div>
//   );
// }
