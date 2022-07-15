/** @format */

import React from "react";
import "./Input.css";

const Input = ({
  placeholder,
  type,
  lineHeight,
  width,
  onChange,
  onKeyUp,
}) => {
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onKeyUp();
    }
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        lineHeight: `${lineHeight}`,
        width: `${width}`,
      }}
      onChange={onChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default Input;
