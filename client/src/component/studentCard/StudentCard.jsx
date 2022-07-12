import React from 'react'
import './StudentCard.css'
import UserAvatar from '../../img/user.svg'

const StudentCard = ({student}) => {
  return (
    <div className='student-card'>
      <div className='avatar-box'>
        <img src={UserAvatar} />
      </div>      
      <h3>{student.name}</h3>
      <div>{student.code}</div>
      <div>{student.GPA}</div>
    </div>
  )
}

export default StudentCard