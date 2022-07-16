/** @format */

import React from "react";
import "./Tabs.css";
const Tabs = ({ setTab, tab, listTab }) => {
  return (
    <div className='Tabs'>
      {listTab.map((item, index) => {
        return (
          <div
            key={index}
            className={
              tab === index + 1 ? "tab-active" : ""
            }
            onClick={() => setTab(index + 1)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
