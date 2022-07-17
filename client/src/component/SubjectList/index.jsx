/** @format */

import React, { useEffect, useState } from "react";
import List from "../List/List";
import "./styles.css";
import MODAL from "../MODAL/MODAL";
import SubjectModal from "../modalcontent/SubjectModal";
import Registration from "../modalcontent/Registration";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { allSubjectsSelector } from "../../selectors/subject.selector";
import { getAllSubjects } from "../../actions/subject.actions";
import { getAllFaculties } from "../../actions/common.actions";
import { allFacultiesSelector } from "../../selectors/common.selector";
const columnName = [
  "ID",
  "科目名",
  "学部",
  "クラス数",
  "クレジット",
];
const SubjectList = ({ canAdd }) => {
  const dispatch = useDispatch();
  const data = useSelector(allSubjectsSelector);
  const faculties = useSelector(allFacultiesSelector);
  const [allSubjects, setAllSubjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [source, setSource] = useState(null);
  const handleOnclick = (index) => {
    if (!canAdd) {
      setSource({ ...data[index] });
      setIsOpen2(true);
    }
  };
  const getFaculty = (id) => {
    const faculty = faculties.filter(
      (item) => item.id === id
    );
    return faculty[0].name;
  };
  useEffect(() => {
    setAllSubjects(
      data.map((item) => ({
        ...item,
        faculty: getFaculty(item.faculty),
      }))
    );
    dispatch(getAllFaculties());
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
        <Input />
      </div>
      <List
        onClick={(id) => handleOnclick(id)}
        lists={allSubjects}
        columnName={columnName}
        labels={[
          "id",
          "name",
          "faculty",
          "classes",
          "credit",
        ]}
        special={[2]}
        ratio='5% auto 21%  18% 14%'
      />
      <MODAL
        body={
          <Registration
            type='subject'
            soureName={source}
            onCancel={() => setIsOpen2(false)}
          />
        }
        open={isOpen2}
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
