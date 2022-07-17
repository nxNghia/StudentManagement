/** @format */

import React, { useEffect } from "react";
import Select from "react-select";
import "./MySelect.css";

const MySelect = ({
  isMul,
  source,
  minHeight,
  placeholder,
  onChange
}) => {
  return (
    <Select
      isMulti={isMul}
      options={source}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default MySelect;
