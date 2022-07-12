import React from 'react'
import ClassStudied from '../../component/classStudied/ClassStudied'
import { Lessons } from '../../data/lessons'
import './Achievement.css'

const Achievement = () => {
  return (
    <div className='achievement'>
        <h1>成績</h1>
        <ClassStudied name='IT日本語 1' assess='4.0 (A+)' lessons={Lessons}/>
        <ClassStudied name='IT日本語 2' assess='3.5 (A)'/>
        <ClassStudied name='IT日本語 3'/>
    </div>
  )
}

export default Achievement
