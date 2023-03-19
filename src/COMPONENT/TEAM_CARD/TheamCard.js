import React from 'react'
import './teamcard.css'
export default function TheamCard(props) {


  return (
    <div style={{border: props.stop && 'none'}} className='theme_card'>
      <div className='theme_card_text'>
        <h2>{props.text1}</h2>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
      </div>
      <div className='theme_card_img'>
        <img src={props.image} alt="image" />
      </div>
    </div>
  )
}
