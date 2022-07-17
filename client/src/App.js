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
import { API } from "./app/API";
import { useEffect } from "react";
import ManagerScreen from "./page/managerScreen/ManagerScreen";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { login } from "./actions/user.actions";
import {
  loginStateSelector,
  userSelector,
} from "./selectors/user.selector";
import { getAllFaculties } from "./actions/common.actions";
import { getAllStudents } from "./actions/student.action";
import axios from "axios";
const cookie = new Cookies();
function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isLogin = useSelector(loginStateSelector);
  
  useEffect(() => {
    const auth = cookie.get("user");
    dispatch(getAllFaculties());
    dispatch(getAllStudents({type: 'id', order: 'asc'}));
    if (auth) {
      if (isLogin === false) {
        const end_point = auth.type === 'student' ? `/student/get/${auth.id}` : `/admin/get/${auth.id}`
        axios.get(end_point)
          .then((res) => {
            const data = res.data[0];
            dispatch(
              login({
                ...data,
                role: auth.type,
                type: "LOGIN",
              })
            );
          })
          .catch((e) => {
            console.log(e);
          });
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
                  user && user.role === "student" ? (
                    <Navigate to='student' />
                  ) : (
                    <Navigate to='manager' />
                  )
                }
              />
              <Route
                path='/student'
                element={<StudentScreen />}
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
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
