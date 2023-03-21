import React from 'react'
import './teamcard.css'
export default function TheamCard(props) {


  return (
    <div style={{ border: props.stop && 'none' }} className='theme_card'>
      <div style={{ width: !props.image && "100%" }} className='theme_card_text'>
        <h2>{props.text1}</h2>
        {props.text2 && <p>{props.text2}</p>}
        {props.text3 && <p>{props.text3}</p>}
        {props.text4 && <p>{props.text4}</p>}
        {props.text5 && <p>{props.text5}</p>}
        {props.text6 && <p>{props.text6}</p>}
        {props.text7 && <p>{props.text7}</p>}
        {props.text8 && <p>{props.text8}</p>}
      </div>
      <div className='theme_card_img'>
        {props.image && <img src={props.image} alt="image" />}
      </div>
    </div>
  )
}
