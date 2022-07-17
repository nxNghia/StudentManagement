/** @format */

import React from "react";
import "./List.css";

const List = ({
  lists,
  special,
  ratio,
  labels,
  columnName,
  onClick,
}) => {
  return (
    <div className='list-container'>
      {lists.length > 0 && (
        <div
          className='list-row'
          style={{ gridTemplateColumns: ratio }}>
          {columnName.map((column, index) => {
            return <div key={index}>{column}</div>;
          })}
        </div>
      )}
      {lists.map((item, index) => {
        return (
          <div
            onClick={() => {
              onClick(index);
            }}
            key={index}
            className='list-row item'
            style={{ gridTemplateColumns: ratio }}>
            {labels.map((label, index) => {
              return (
                <div
                  key={index}
                  className={
                    special.includes(index)
                      ? "special-font"
                      : ""
                  }>
                  {item[label]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default List;
