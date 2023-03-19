import React from 'react'
import './image.css'
export default function Image(props) {


  return (
    <div style={{ backgroundImage:`url(${props.image})` }} className='image'>
      <h1>{props.text}</h1>
    </div>
  )
}
