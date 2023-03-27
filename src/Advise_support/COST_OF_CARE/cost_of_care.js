import React from 'react'
import './cost_of_care.css'
import Image from '../../COMPONENT/IMAGE/image'
import Comparrison from '../image/Comparrison-Image@x2-v4.jpg'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import Home_Monitoring from '../image/Home-Monitoring2-7951x2785.jpg'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'

export default function CostOfCare(props) {

  const item = [
    {
      text2: '— 5  star The ladies that come and visit my mum are just amazing, caring, thoughtful, nothing is too much trouble, they always put mum at the front of anything they do. They are always pleased to see her and visa versa, a recent spell in respite didn’t damper the efforts they just bundled her up and took her to the park. Thank you for everything, keep up the good work. Special mention for Kay who is an absolute gem. I know my sister would agree',
      text3: '— 5  star The ladies that come and visit my mum are just amazing, caring, thoughtful, nothing is too much trouble, they always put mum at the front of anything they do. They are always pleased to see her and visa versa, a recent spell in respite didn’t damper the efforts they just bundled her up and took her to the park. Thank you for everything, keep up the good work. Special mention for Kay who is an absolute gem. I know my sister would agree',
      width: true,
      stop: true
    },
    {
      text1: "Son of Client - Mrs M",
      text2: `'When my Mum's care needs increased to the point
          that we couldn't manage everything ourselves, we decided to look at options for additional support. After 
          a lot of consideration, we decided to approach Home Instead Taunton to discuss what our options were. From
          the initial meeting, it was clear that the company designed the care package with my Mum's needs and wishes
          as the primary concern, and we were reassured that my Mum would be well looked after. Based on what we have
          witnessed over the last 6 months we could not have made a better choice. The management and staff of Home 
          Instead have surpassed our expectations with their care, thoughtfulness, professionalism and empathy. Without
          exception, the caregivers treated my Mum with genuine warmth and kindness and helped to make the last months 
          of her life happy and contented. I would not hesitate to recommend them and my family and
          I will always be grateful for the superb support they gave to my Mum and us during a difficult period'.`,
      text2: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to look at options for additional support. After a lot of consideration, we decided to approach Home Instead Taunton to discuss what our options were. From the initial meeting, it was clear that the company designed the care package with my Mum's needs and wishes as the primary concern, and we were reassured that my Mum would be well looked after. Based on what we have witnessed over the last 6 months we could not have made a better choice. The management and staff of Home Instead have surpassed our expectations with their care, thoughtfulness, professionalism and empathy. Without exception, the caregivers treated my Mum with genuine warmth and kindness and helped to make the last months of her life happy and contented. I would not hesitate to recommend them and my family and I will always be grateful for the superb support they gave to my Mum and us during a difficult period'.",
      width: true,
      stop: true
    },
    // {
    //   text1: "Daughter of Client Mrs H - April 2018",
    //   text2: "Home Instead have been supporting my mum after her discharge from hospital with a fractured sacrum . Staff always arrive on time we know who and when will arrive and nothing is too much trouble . A big thankyou to Karen and Lorna who have been supporting mum to become more independent again . Mum is looking forward now for some companionship visits starting next week so that she can go out again which she has missed doing over the last few months . I cannot speak more highly of your company. Thank you.",
    //   width: true,
    //   stop: true
    // },
  ]

  const item2 = [
    {
      text1: 'Mrs J King',
      text2: '— 5  star The ladies that come and visit my mum are just amazing, caring, thoughtful, nothing is too much trouble, they always put mum at the front of anything they do. They are always pleased to see her and visa versa, a recent spell in respite didn’t damper the efforts they just bundled her up and took her to the park. Thank you for everything, keep up the good work. Special mention for Kay who is an absolute gem. I know my sister would agree',
      width: true,
      stop: true
    },
    {
      text1: "Son of Client - Mrs M",
      text2: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to look at options for additional support. After a lot of consideration, we decided to approach Home Instead Taunton to discuss what our options were. From the initial meeting, it was clear that the company designed the care package with my Mum's needs and wishes as the primary concern, and we were reassured that my Mum would be well looked after. Based on what we have witnessed over the last 6 months we could not have made a better choice. The management and staff of Home Instead have surpassed our expectations with their care, thoughtfulness, professionalism and empathy.'",
      text3: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to  I would not hesitate to recommend them and my family and  Without exception, the caregivers treated my Mum with genuine warmth and kindness and helped to make the last months of her life happy and contented.'",
      width: true,
      li1: "Dementia workshops organised across the UK and free to attend.",
      li2: "Online training materials with videos and tutorials to guide you when caring for someone with dementia.",
      li3: "Community involvement schemes to help protect the older people from fraud and give them some joy at Christmas.",
      li4: "Advice and support articles to find out more about various subjects around care, ageing and dementia.",
      stop: true
    },
    {
      text1: 'Get the care you need',
      text2: 'Make an enquiry with us to discuss your care options and get the support you need.',
      width: true,
      stop: true
    },
  ]



  return (
    <div className='cost_of_care'>
      <Image image={Home_Monitoring} />
      <div className='cost_of_care_wrap'>
        <div className='cost_of_care_text'>
          {item.map((i) => (
            <TheamCard {...i} />
          ))}
          <img className='image1' src={Comparrison} alt="image" />
          {item2.map((i) => (
            <TheamCard {...i} />
          ))}
        </div>
      </div>
      <div className='cost_of_care_nav'>
        <NavCard Client={Home_Monitoring} />
        <NavCard Client={Home_Monitoring} />
      </div>
    </div>
  )
}
