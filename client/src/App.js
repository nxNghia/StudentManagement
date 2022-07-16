/** @format */

import Login from "./page/login/Login";
import StudentScreen from "./page/studentScreen/StudentScreen";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { API } from "./app/API";
import { useState, useEffect } from "react";
import ManagerScreen from "./page/managerScreen/ManagerScreen";
import Cookies from "universal-cookie";
import { useDispatch} from "react-redux";
import { logIn } from "./features/authSlice";
import { login } from "./actions/user.actions";
const cookie = new Cookies()
function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState(undefined)
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const auth = cookie.get('user')
    if(auth) {
      setUser(auth);
      if(isLogin === false && auth) {
        API.get(`/student/get/${auth.id}`).then((res)=> {
          setIsLogin(true)
          const data = res.data[0]
          dispatch(logIn({
            ...data,
            type: auth.type,
          }))
          dispatch(login({
            ...data,
            type: 'LOGIN'
          }))
        }).catch(e => {console.log(e)})
      }
    }
  }, [isLogin]);
  console.log(useSelector((state)=> state.user.user))
  return (
    <div className='App'>
      {user ? (
        <>
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  user.type === "student" ? (
                    <Navigate to='student' />
                  ) : (
                    <Navigate to='manager' />
                  )
                }
              />
              <Route
                path='/student'
                element={
                  <StudentScreen/>
                }
              />
              <Route
                path='/manager'
                element={<ManagerScreen />}
              />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <>
          <Login setIsLogin={setIsLogin}/>
        </>
      )}
    </div>
  );
}

export default App;
