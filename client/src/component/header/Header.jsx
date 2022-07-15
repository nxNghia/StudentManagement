/** @format */

import React from "react";
import "./Header.css";
import UserAvatar from "../../img/user.svg";
import Logo from "../../img/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/authSlice";
const Header = ({ onLogOut }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <div className='header'>
      <div className='logo'>
        <img
          src={Logo}
          style={{ width: "80px", height: "80px" }}
          alt=''
        />
      </div>
      <div className='user-info'>
        <div className='info'>
          {user.name}
          <span>{user.student_id}</span>
        </div>
        <div
          className='avatar'
          onClick={() => {
            dispatch(logOut());
            onLogOut();
          }}>
          <img src={UserAvatar} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
