/** @format */

import Login from "./page/login/Login";
import Profile from "./page/profile/Profile";
import Header from "./component/header/Header";
import Achievement from "./page/achievement/Achievement";
import Manager from "./page/manager/Manager";
import { useSelector } from "react-redux";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const user = useSelector(state => state.user)
  useEffect(()=> {
    console.log(user)
  
  },[user])
  return (
    <div className='App'>
      {user.user ? (
        <>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Manager />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/achievement' element={<Achievement />} />
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
