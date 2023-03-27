import React from 'react'
import './choosing-the-right-care.css'
import Home_Monitoring from '../image/Home-Monitoring2-7951x2785.jpg'
import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
export default function Choosing_the_right_care(props) {

  const item = [
    {
      text2: '— 5  star The ladies that come and visit my mum are just amazing, caring, thoughtful, nothing is too much trouble, they always put mum at the front of anything they do. They are always pleased to see her and visa versa, a recent spell in respite didn’t damper the efforts they just bundled her up and took her to the park. Thank you for everything, keep up the good work. Special mention for Kay who is an absolute gem. I know my sister would agree',
      stop: true,
    },
    {
      text1: "Son of Client - Mrs M",
      text2: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to look at options for additional support. After a lot of consideration, we decided to approach Home Instead Taunton to discuss what our options were. From the initial meeting, it was clear that the company designed the care package with my Mum's needs and wishes as the primary concern, and we were reassured that my Mum would be well looked after. Based on what we have witnessed over the last 6 months we could not have made a better choice. The management and staff of Home Instead have surpassed our expectations with their care, thoughtfulness, professionalism and empathy. Without exception, the caregivers treated my Mum with genuine warmth and kindness and helped to make the last months of her life happy and contented. I would not hesitate to recommend them and my family and I will always be grateful for the superb support they gave to my Mum and us during a difficult period'.",
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
      text2: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to look at options for additional support. After a lot of consideration, we decided to approach Home Instead Taunton to discuss what our options were. From the initial meeting, it was clear that the company designed the care package with my Mum's needs and wishes as the primary concern, and we were reassured that my Mum would be well looked after. Based on what we have witnessed over the last 6 months we could not have made a better choice. The management and staff of Home Instead have surpassed our expectations with their care, thoughtfulness, professionalism and empathy. Without exception, the caregivers treated my Mum with genuine warmth and kindness and helped to make the last months of her life happy and contented. I would not hesitate to recommend them and my family and I will always be grateful for the superb support they gave to my Mum and us during a difficult period'.",
      width: true,
      stop: true
    },
    {
      text1: "Daughter of Client Mrs H - April 2018",
      text2: "Home Instead have been supporting my mum after her discharge from hospital with a fractured sacrum . Staff always arrive on time we know who and when will arrive and nothing is too much trouble . A big thankyou to Karen and Lorna who have been supporting mum to become more independent again . Mum is looking forward now for some companionship visits starting next week so that she can go out again which she has missed doing over the last few months . I cannot speak more highly of your company. Thank you.",
      stop: true
    }
  ]

  return (
    <div className='choosing-the-right-care'>
      <Image image={Home_Monitoring} text="Choosing the right care for you" />
      <div className='choosing-the-right-care_text' >
        <div className='choosing-the-right-care_text_wrap'>
          {item.map((i) => (
            <TheamCard {...i} />
          ))}
        </div>

      </div>
      <div className='choosing-the-right-care_nav'>
        <NavCard Client={Home_Monitoring} />
        <NavCard Client={Home_Monitoring} />
      </div>
    </div>
  )
}
