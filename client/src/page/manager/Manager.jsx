/** @format */

import React, { useState } from "react";
import StudentManager from "../../component/studentManager/StudentManager";
const Manager = () => {
  const [tab, setTab] = useState(1);
  return <div>{tab === 1 && <StudentManager />}</div>;
};

export default Manager;
