import React, {useState} from 'react'
import Input from '../../component/input/Input'
import axios from 'axios'
import './Login.css'

const Login = () => {
  const [data, setData] = useState({email: '', password: ''})
  const handleLogIn = async() => {
    const API = axios.create({baseURL: "http://localhost:8000"})
    const user = await API.post('/login', data, {withCredentials: true});
    if(user) {
      console.log(user)
    }
  }
  return (
    <div className='login-container'>
        <h1>Classer</h1>
        <div className='line'></div>
        <Input placeholder='メールアドレス' type='text' onChange={(e)=> setData({...data,email : e.target.value})}/>
        <Input placeholder='パスワード' type='password' onChange={(e)=> setData({...data,password : e.target.value})}/>
        <span>パスワードをお忘れ</span>
        <button onClick={handleLogIn}>ログイン</button>
    </div>
  )
}

export default Login