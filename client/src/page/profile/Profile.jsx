import React from 'react'
import Avatar from '../../img/user.svg'

import './Profile.css'
const Profile = () => {
  return (
    <div className='profile'>
        <h1>プロフィール</h1>
        <div className='profile-content'>
            <div className="profile-left">
                <div className="user-img">
                    <img src={Avatar} />
                </div>
                <button>プロフィールを変更する</button>
            </div>
            <div className="profile-right">
                <div className="content">
                    <div className='content-field'>名前</div>
                    <span>George Washington</span>
                </div>
                <div className="content">
                    <div className='content-field'>生年月日</div>
                    <span>01/10/2000</span>
                </div>
                <div className="content">
                    <div className='content-field'>メールアドレス</div>
                    <span>geomail0110@gmail.com</span>
                </div>
                <div className="content">
                    <div className='content-field'>性別</div>
                    <span>男</span>
                </div>
                <div className="content">
                    <div className='content-field'>学籍番号</div>
                    <span>20184001</span>
                </div>
                <div className="content">
                    <div className='content-field'>CPA</div>
                    <span>3.4</span>
                </div>
                <div className="content">
                    <div className='content-field'>スカラシップ</div>
                    <span>無し</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile