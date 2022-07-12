import React from 'react'
import './Input.css'

const Input = ({placeholder, type, lineHeight, width}) => {
  return (
    <input type={type} placeholder={placeholder} style={{lineHeight: `${lineHeight}`, width: `${width}`}}/>
  )
}

export default Input