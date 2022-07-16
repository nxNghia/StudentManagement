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
  // const user = useSelector((state) => state.user.user);
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
          <span>{userData.student_id}</span>
        </div>
        <div
          className="avatar"
          onClick={() => {
            cookie.remove("user", { path: "/" });
            API.post("/login/logout", { withCredential: true })
              .then((res) => {
                dispatch(logout());
                onLogOut();
              })
              .catch((err) => console.log(err));
          }}
        >
          <img src={UserAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
