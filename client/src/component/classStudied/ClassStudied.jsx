/** @format */

import React, { useState } from "react";
import Up from '../../img/up.svg';
import Down from '../../img/down.svg';
import './ClassStudied.css';
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../selectors/user.selector";
import { evaluatedStudent } from "../../actions/student.action";

const convertCharacter = grade => {
    if (grade >= 3.5)
        return 'A';

    if (grade >= 3.0)
        return 'B';

    if (grade >= 2.0)
        return 'C';
        
    if (grade >= 1.5)
        return 'D';

    if (!grade)
        return '';

    return 'F';
}

const ClassStudied = ({name, assess, lessons, canEdit=false, data, userData}) => {
    const dispatch = useDispatch();
    const [isShowLesson, setIsShowLesson] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [grade, setGrade] = useState(undefined);
    const [characterGrade, setCharacterGRade] = useState(undefined);

    const editToggle = () => setOnEdit(onEdit => !onEdit);

    const onGradeChange = e => {
        setGrade(e.target.value);
        setCharacterGRade(convertCharacter(e.target.value));
    }

    const onSave = () => {
        const sendData = {
            student_id: userData.id,
            class_id: data.classid,
            subject_id: data.id,
            result: Number(grade),
            converttocharacter: characterGrade
        }

        dispatch(evaluatedStudent(sendData));
        setOnEdit(false);
    }

    const onCancel = () => {
        setOnEdit(false);
    }

    return (
        <div className='studied-class'>
            <div className="class-info">
                <div>{data.name}</div>
                {
                    canEdit ? (
                        <div>{!data.result ? <input type='submit' value='成績編集' onClick={editToggle} /> : data.result}</div>
                    ) : (
                        data.result ? data.result : 'なし'
                    )
                }
                <div className='down' onClick={()=> {
                    if(lessons)
                        setIsShowLesson(!isShowLesson)
                }}>
                    <img src={isShowLesson ? Up : Down} style={{width: '30px', height: '30px'}}/>
                </div>
            </div>
            {
                onEdit && (
                    <div className='drop-down evaluation'>
                        <input type='text' value={grade} onChange={onGradeChange} />
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        <input type='text' disabled value={characterGrade}/>
                        <button className='save-btn' onClick={onSave}>保存</button>
                        <button className='cancel-btn' onClick={onCancel}>キャンセル</button>
                    </div>
                )
            }
            {(isShowLesson && !onEdit) && (
                <div className='drop-down'>
                    <div className='label'>
                        <div>日付</div>
                        <div>レッスン名</div>
                        <div>出席情報</div>
                        <div>成績</div>
                    </div>
                    <div className="label-line"></div>
                    {lessons.map((lesson, index) => {
                        return (
                            <div key={index} className='label'>
                                <div>{lesson.date}</div>
                                <div>{lesson.lessonName}</div>
                                <div>{lesson.attendance}</div>
                                <div>{lesson.grades}</div>
                            </div>
                        )
                    })}
                </div>
              )
            }
        </div>
      );
};

export default ClassStudied;
