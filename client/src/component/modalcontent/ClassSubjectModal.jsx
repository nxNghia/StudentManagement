import React from 'react'
import './ClassSubjectModal.css'
const ClassSubjectModal = () => {
  const datas = [
    {id: '123', teacher: 'ABC', numOfStudent: '20'},
    {id: '123', teacher: 'ABC', numOfStudent: '20'},
    {id: '123', teacher: 'ABC', numOfStudent: '20'},
    {id: '123', teacher: 'ABC', numOfStudent: '20'},
    {id: '123', teacher: 'ABC', numOfStudent: '20'},
    {id: '123', teacher: 'ABC', numOfStudent: '20'},
    {id: '123', teacher: 'ABC', numOfStudent: '20'},
  ]
  return (
    <div className='class-subject-modal'>
        <div>クラスリスト</div>
        <div className="table">
          <div className="table-row">
            <div>ID</div>
            <div>教師</div>
            <div>学生数</div>
          </div>
          {datas.map((data, index) => {
            return (
              <div key={index} className="table-row has-color">
                <div>{data.id}</div>
                <div>{data.teacher}</div>
                <div>{data.numOfStudent}</div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default ClassSubjectModal