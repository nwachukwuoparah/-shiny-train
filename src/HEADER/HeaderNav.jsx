import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
export default function HeaderNav(props) {
  const [drop, setDrop] = useState(false)

  return (
    <div className='HeaderNav'
      onMouseEnter={() => { setDrop(true) }}
      onMouseLeave={() => { setDrop(false) }}>
      <NavLink style={{ color: props.scroll && '#434343' }} className="HeaderNav_nav" to={props.nav} >
        <p>{props.text}</p>
      </NavLink>


      {drop && props.Text1 && <div className='HeaderNav_drop' style={{
        left: props.left,
      }} >
        {/* {console.log(props.Text1)} */}
        {props.Text1?.map((i) => (<NavLink style={{ color: props.scroll && '#434343' }} className="HeaderNav_nav1" to={i.nav}><p>{i.text1}</p></NavLink>))}
      </div>}
    </div>

  )
}
