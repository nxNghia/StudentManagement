/** @format */

import React, { useState } from "react";
import Tabs from "../../component/Tabs/Tabs";
import Profile from "../profile/Profile";
import SubjectList from "../../component/SubjectList/index";
import ClassList from "../../component/classList/ClassList";
import Header from "../../component/header/Header";
import Achievement from '../achievement/Achievement'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const StudentScreen = () => {
  const student = useSelector((state) => state.user.user)
  const [tab, setTab] = useState(1);
  const studentTabs = [
    "プロフィール",
    "科目一覧",
    "クラス一覧",
    "成績"
  ];
  const navigate = useNavigate();
  return (
    <div>
      <Header
        onLogOut={() => {
          navigate("/");
        }}
      />
      <Tabs
        setTab={setTab}
        tab={tab}
        listTab={studentTabs}
      />
      {tab === 1 && <Profile user={student}/>}
      {tab === 2 && <SubjectList canAdd={false}/>}
      {tab === 3 && <ClassList canAdd={false}/>}
      {tab === 4 && <Achievement/>}
    </div>
  );
};

export default StudentScreen;
