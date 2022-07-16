/** @format */

const ClassStudied = ({name, assess, lessons, edit = false, setEdit = () => {}}) => {
    const [isShowLesson, setIsShowLesson] = useState(false)
    return (
        <div className='studied-class'>
            <div className="class-info">
                <div>{name}</div>
                <div onClick={setEdit}>{edit ? <div className='edit-area'><input type='text' /><input type='submit' value='保存' /></div> : assess}</div>
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
