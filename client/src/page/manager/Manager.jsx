/** @format */

import React, { useState } from "react";
import StudentManager from "../../component/studentManager/StudentManager";
import Header from "../../component/header/Header";
import { useNavigate } from "react-router-dom";
const Manager = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Header
        onLogOut={() => {
          navigate("/");
        }}
      />
      {tab === 1 && <StudentManager />}
    </div>
  );
};

export default Manager;
