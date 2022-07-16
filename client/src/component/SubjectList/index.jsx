/** @format */

import React, { useState } from "react";
import List from "../List/List";
import "./styles.css";
import "antd/dist/antd.min.css";
import MODAL from "../MODAL/MODAL";
import SubjectModal from "../modalcontent/SubjectModal";
import Registration from "../modalcontent/Registration";
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
const columnName = ['ID', '科目名', '学部', 'クレジット', 'クラス数']
const SubjectList = ({ canAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false)
  const [source, setSource] = useState(null)
  const handleOnclick = (index) => {
    setIsOpen2(true)
    setSource({...data[index]})
  }
  return (
    <div className='classList'>
      <div
        className='containerClassList'
        style={{
          justifyContent: canAdd
            ? "space-between"
            : "flex-end",
        }}>
        {canAdd && (
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className='add'
            style={{ borderRadius: "5px" }}>
            追加
          </button>
        )}
        <input
          type='text'
          name=''
          id=''
          className='inputClassList'
        />
      </div>
      <List onClick={id => handleOnclick(id)} lists={data} columnName={columnName} special={[2]} ratio='5% auto 21%  18% 14%'/>
      <MODAL body={<SubjectModal/>} open={isOpen} setClose={()=> {setIsOpen(false)}} />
      {canAdd === false && <MODAL body={<Registration label='subject' soureName={source}/>} open={isOpen2} setClose={()=> {setIsOpen2(false)}} />}
    </div>
  );
};

export default SubjectList;
