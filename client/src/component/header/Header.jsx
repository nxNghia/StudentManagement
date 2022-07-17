/** @format */

import React from "react";
import "./Header.css";
import UserAvatar from "../../img/user.svg";
import Logo from "../../img/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/user.actions";
import { userSelector } from "../../selectors/user.selector";
import { useEffect } from "react";
import { API } from "../../app/API";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const Header = ({ onLogOut }) => {
  const userData = useSelector(userSelector);

  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} style={{ width: "80px", height: "80px" }} alt="" />
      </div>
      <div className="user-info">
        <div className="info">
          {userData.name}
          <span>{userData.student_id || 'Admin'}</span>
        </div>
        <div
          className="avatar"
          onClick={() => {
            cookie.remove("user", { path: "/" });
            dispatch(logout())
            onLogOut()
          }}
        >
          <img src={UserAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
