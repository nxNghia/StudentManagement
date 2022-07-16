/** @format */

import React, { useState } from "react";
import StudentManager from "../../component/studentManager/StudentManager";
import ClassList from "../../component/classList/classList";
import SubjectList from "../../component/SubjectList";
import Tabs from "../../component/Tabs/Tabs";
import Header from "../../component/header/Header";
import { useNavigate } from "react-router-dom";
const ManagerScreen = () => {
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();
  const managerTabs = [
    "学生一覧",
    "科目一覧",
    "クラス一覧",
  ];
  return (
    <div>
      <Header
        onLogOut={() => {
          navigate("/");
        }}
      />
      <Tabs
        tab={tab}
        setTab={setTab}
        listTab={managerTabs}
      />
      {tab === 1 && <StudentManager/>}
      {tab === 2 && <SubjectList canAdd={true}/>}
      {tab === 3 && <ClassList canAdd={true}/>}
    </div>
  );
};

export default ManagerScreen;
