import React, { useState } from 'react'
import './header.css'
export default function HeaderNav(props) {
  const [drop, setDrop] = useState(false)

  return (
    <div className='HeaderNav'
      onMouseEnter={() => { setDrop(true) }}
      onMouseLeave={() => { setDrop(false) }}>
      <p>{props.text}</p>

      {drop && props.Text1 && <div className='HeaderNav_drop' style={{
        left: props.left,
      }} >
        {/* {console.log(props.Text1)} */}
        {props.Text1?.map((i) => (<p>{i.text1}</p>))}
      </div>}
    </div>

  )
}
