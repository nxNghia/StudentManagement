/** @format */

import React, { useEffect, useState } from "react";
import List from "../List/List";
import "./styles.css";
import "antd/dist/antd.min.css";
import MODAL from "../MODAL/MODAL";
import SubjectModal from "../modalcontent/SubjectModal";
import Registration from "../modalcontent/Registration";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { allSubjectsSelector } from "../../selectors/subject.selector";
import { getAllSubjects } from "../../actions/subject.actions";

const columnName = ['ID', '科目名', '学部', 'クラス数', 'クレジット']
const SubjectList = ({ canAdd, canAssign=false }) => {
  const dispatch = useDispatch();
  const data = useSelector(allSubjectsSelector)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [source, setSource] = useState(null);
  const handleOnclick = (index) => {
    setSource({...data[index]});
    setIsOpen2(true);
  }

  useEffect(() => {
    dispatch(getAllSubjects());
  }, []);

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
        <Input/>
      </div>
      <List
        onClick={(id) => handleOnclick(id)}
        lists={data}
        columnName={columnName}
        special={[2]}
        ratio='5% auto 21%  18% 14%'
      />
      <MODAL
        body={
          <Registration
            label='subject'
            soureName={source}
            onCancel={() => setIsOpen2(false)}
          />
        }
        open={isOpen2 && canAssign}
        setClose={() => {
          setIsOpen2(false);
        }}
      />
      <MODAL
        body={<SubjectModal />}
        open={isOpen && canAdd}
        setClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default SubjectList;
