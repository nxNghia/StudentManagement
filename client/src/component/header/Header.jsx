import React from 'react'
import './Header.css'
import UserAvatar from '../../img/user.svg'
import Logo from '../../img/Logo.svg'


const Header = () => {
  return (
    <div className='header'>
        <div className="logo" >
            <img src={Logo}  style={{width:'80px', height: '80px'}} />
        </div>
        <div className="user-info">
            <div className="info">
                George Washington
                <span>23BKA1234</span>
            </div>
            <div className="avatar">
                <img src={UserAvatar}/>
            </div>
        </div>
    </div>
  )
}

export default Header