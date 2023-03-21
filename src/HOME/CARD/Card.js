import React from 'react'
import "./card.css"
import CAREGiver from "./CAREGiver.jpg"
export default function Card(props) {


  return (
    <div className='card'>
      <img src={CAREGiver} />
      <span className='card_text'>
        Home Help
      </span>
    </div>
  )
}
