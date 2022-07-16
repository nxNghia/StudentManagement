import React from "react";
import { Table, Button } from "antd";
import "./styles.css";
import "antd/dist/antd.min.css";

const data = [
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },
  {
    id: "1",
    subject: "IT日本語",
    university: "SoICT",
    credit: 3,
    class: 3,
  },

];
const columns = [
  { title: "Id", dataIndex: "id", key: "id", width: '7%', },
  {
    title: "科目名",
    dataIndex: "subject",
    key: "subject",
    render: (text) => <p className="subject-table__cell">{text}</p>,
    width: '40%',
  },
  {
    title: "学部",
    dataIndex: "university",
    key: "university",
    render: (text) => <p style={{ color: "#3FAA9D" }} className="subject-table__cell">{text}</p>,
  },
  {
    title: "クレジット",
    key: "credit",
    dataIndex: "credit",
    render: (text) => <p className="subject-table__cell">{text}</p>,
  },
  {
    title: "クラス数",
    key: "class",
    dataIndex: "class",
    render: (text) => <p style={{ color: "#3FAA9D" }} className="subject-table__cell">{text}</p>,
  },
];

const SubjectList = () => {
  return (
    <div className="classList">
      <div className="containerClassList">
        <Button style={{ borderRadius: "5px" }}>追加</Button>
        <input type="text" name="" id="" className="inputClassList" />
      </div>
      <div>
        <Table
          className="table-striped-rows"
          columns={columns}
          dataSource={data}
          scroll={{
            y: 500,
          }}
          size="normal"
        />
      </div>
    </div>
  );
};

export default SubjectList;