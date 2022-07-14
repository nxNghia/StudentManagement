/** @format */

import Login from "./page/login/Login";
import Profile from "./page/profile/Profile";
import Header from "./component/header/Header";
import Achievement from "./page/achievement/Achievement";
import Manager from "./page/manager/Manager";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className='App'>
      {user.user ? (
        <>
          <Header />
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
                element={<Profile />}
              />
              <Route
                path='/manager'
                element={<Manager />}
              />
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
