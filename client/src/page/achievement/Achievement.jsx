/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registedClasses } from "../../actions/user.actions";
import ClassStudied from "../../component/classStudied/ClassStudied";
import { Lessons } from "../../data/lessons";
import { registedClassesSelector } from "../../selectors/user.selector";
import "./Achievement.css";

const Achievement = ({ canEdit=false, userData }) => {
  const dispatch = useDispatch();
  const classes = useSelector(registedClassesSelector);

  useEffect(() => {
    console.log(classes);
    dispatch(registedClasses(userData.id))
  }, [userData]);

  useEffect(() => {
    console.log(classes);
  }, [classes]);

  return (
    <div className='achievement'>
      <h1>成績</h1>
      {classes.map(c => (<ClassStudied data={c} name='' canEdit={canEdit} />))}
    </div>
  );
};

export default Achievement;
