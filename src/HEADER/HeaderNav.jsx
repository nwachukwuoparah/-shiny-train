import React, { useState } from 'react'
import './header.css'
export default function HeaderNav(props) {
  const [drop, setDrop] = useState(false)

  return (
    <div className='HeaderNav'
      onMouseEnter={() => { setDrop(true) }}
      onMouseLeave={() => { setDrop(false) }}>
      <p>{props.text}</p>

      {drop && <div style={{
        position: 'absolute',
        top: 160,
        width: 250,
        left: props.left,
        border: '1 solid',
        backgroundColor: 'red',
      }} >
        <p>{props.text1}</p>
      </div>}
    </div>

  )
}
