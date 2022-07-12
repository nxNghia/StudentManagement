import React, {useState} from 'react'
import Down from '../../img/down.svg'
import Up from '../../img/up.svg'
import './ClassStudied.css'

const ClassStudied = ({name, assess, lessons}) => {
    const [isShowLesson, setIsShowLesson] = useState(false)
    return (
        <div className='studied-class'>
            <div className="class-info">
                <div>{name}</div>
                <div>{assess}</div>
                <div className='down' onClick={()=> {
                    if(lessons)
                        setIsShowLesson(!isShowLesson)
                }}>
                    <img src={isShowLesson ? Up : Down} style={{width: '30px', height: '30px'}}/>
                </div>
            </div>
            {isShowLesson && (
                <div className='drop-down'>
                    <div className='label'>
                        <div>日付</div>
                        <div>レッスン名</div>
                        <div>出席情報</div>
                        <div>成績</div>
                    </div>
                    <div className="label-line"></div>
                    {lessons.map((lesson) => {
                        return (
                            <div className='label'>
                                <div>{lesson.date}</div>
                                <div>{lesson.lessonName}</div>
                                <div>{lesson.attendance}</div>
                                <div>{lesson.grades}</div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default ClassStudied