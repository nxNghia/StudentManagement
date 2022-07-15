/** @format */

import Login from "./page/login/Login";
import Profile from "./page/profile/Profile";
import Manager from "./page/manager/Manager";
// import EditProfile from "./page/editProfile/EditProfile";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import MODAL from "./component/MODAL/MODAL";
function App() {
  const user = useSelector((state) => state.user);
  const student = useSelector(
    (state) => state.student.selectStudent
  );
  return (
    <div className='App'>
      {user.user ? (
        <>
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  user.user.type === "student" ? (
                    <Navigate to='profile' />
                  ) : (
                    <Navigate to='manager' />
                  )
                }
              />
              <Route
                path='/profile'
                element={
                  <Profile
                    user={
                      user.user.type === "student"
                        ? user.user
                        : student
                    }
                  />
                }
              />
              <Route
                path='/manager'
                element={<Manager />}
              />
              {/* <Route
                path='/edit-profile'
                element={
                  <EditProfile
                    user={
                      user.user.type === "student"
                        ? user.user
                        : student
                    }
                  />
                }
              /> */}
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
