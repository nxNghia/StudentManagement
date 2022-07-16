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
import { loginStateSelector, userSelector } from "./selectors/user.selector";
const cookie = new Cookies()
function App() {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  // const [isLogin, setIsLogin] = useState(false)
  const isLogin = useSelector(loginStateSelector)
  useEffect(() => {
    const auth = cookie.get('user')
    if(auth) {
      if(isLogin === false) {
        API.get(`/student/get/${auth.id}`).then((res)=> {
          const data = res.data[0]
          dispatch(login({
            ...data,
            type: 'LOGIN'
          }))
        }).catch(e => {console.log(e)})
      }
    }
  }, [isLogin]);
  return (
    <div className='App'>
      {isLogin ? (
        <>
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  user && user.type === "student" ? (
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
          <Login/>
        </>
      )}
    </div>
  );
}

export default App;
