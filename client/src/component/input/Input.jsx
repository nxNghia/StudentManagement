import React from 'react'
import './Input.css'

const Input = ({placeholder, type, lineHeight, width, onChange}) => {
  return (
    <input type={type} placeholder={placeholder} style={{lineHeight: `${lineHeight}`, width: `${width}`}} onChange={onChange}/>
  )
}

export default Input