import React from 'react'
import Input from '../../component/input/Input'

import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <h1>Classer</h1>
        <div className='line'></div>
        <Input placeholder='メールアドレス' type='text' />
        <Input placeholder='パスワード' type='password' />
        <span>パスワードをお忘れ</span>
        <button>ログイン</button>
    </div>
  )
}

export default Login