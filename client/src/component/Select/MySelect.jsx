import React from 'react'
import Select from 'react-select'
import './MySelect.css'

const MySelect = ({isMul, source, minHeight, placeholder}) => {
  return (
    <Select isMulti={isMul} options={source} placeholder={placeholder}/>
  )
}

export default MySelect