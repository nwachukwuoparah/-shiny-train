import React from 'react'
import './staying-safe-at-home.css'
import Home_Monitoring from '../image/Home-Monitoring2-7951x2785.jpg'
import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'

export default function Staying_safe(props) {

  const item = [
    {
      text2: '— 5  star The ladies that come and visit my mum are just amazing, caring, thoughtful, nothing is too much trouble, they always put mum at the front of anything they do. They are always pleased to see her and visa versa, a recent spell in respite didn’t damper the efforts they just bundled her up and took her to the park. Thank you for everything, keep up the good work. Special mention for Kay who is an absolute gem. I know my sister would agree',
      stop: true
    },
    {
      text1: "Son of Client - Mrs M",
      text2: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to look at options for additional'.",
      stop: true
    },
    {
      text1: "Daughter of Client Mrs H - April 2018",
      text2: "Home Instead have been supporting my mum after her discharge from hospital with a fractured sacrum . Staff always arrive on time we know who and when will arrive and nothing is too much trouble . A big thankyou to Karen and Lorna who have been supporting mum to become more independent again . Mum is looking forward now for some companionship visits starting next week so that she can go out again which she has missed doing over the last few months . I cannot speak more highly of your company. Thank you.",
      stop: true
    },
    {
      text1: 'Mrs J King',
      text2: '— 5  star The ladies that come and visit my mum are just amazing, caring, thoughtful, nothing is too much trouble, they always put mum at the front of anything they do. They are always pleased to see her and visa versa, a recent spell in respite didn’t damper the efforts they just bundled her up and took her to the park. Thank you for everything, keep up the good work. Special mention for Kay who is an absolute gem. I know my sister would agree',
      stop: true
    },
    {
      text1: "Son of Client - Mrs M",
      text2: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to look at options'.",
      stop: true
    }
  ]

  return (
    <div className='staying-safe-at-home'>
      <Image image={Home_Monitoring} text="Staying safe at home" />
      <div className='staying-safe-at-home_text' >
        {item.map((i) => (
          <TheamCard {...i} />
        ))}
      </div>
    </div>
  )
}
