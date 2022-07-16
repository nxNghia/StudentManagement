/** @format */

import React from "react";
import List from "../List/List";
import Input from "../input/Input";
import "./SubjectManager.css";

const SubjectManager = () => {
  const subjects = [
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
  ];
  return (
    <div className='subject-manager'>
      <div className='add-search'>
        <button>追加</button>
        <Input/>
      </div>
      <List lists={subjects} special={[2]} ratio='5% auto 21%  18% 14%'/>
    </div>
  );
};

export default SubjectManager;
