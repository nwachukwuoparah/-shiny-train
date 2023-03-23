import React from 'react'
import "./partnerships.css"
import Image from '../../COMPONENT/IMAGE/image'
import Home_Monitoring from '../images/Home-Monitoring1-7537x2640.jpg'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import caregiver_caring from '../images/caregiver-caring-elderly-lady-in-her-home-370x240.jpg'

export default function Partnerships(props) {

  const item = [
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",
      stop: true
    },
  ]

  return (
    <div className='partnerships'>
      <Image image={Home_Monitoring} />
      <div className='partnerships_bnx1'>
        <div className='partnerships_bnx1_text'>
          <p>
            At Home Instead, we work with you to provide flexible, personalised home care based on your specific
            requirements and when you need it. You’ll get to stay in your community and live under your own roof,
            surrounded by your own things and continue to live
            by your own rules. Our home care services span home help, companionship, personal care and dementia care.
          </p>
        </div>
        <div className='partnerships_bnx2'>
          {item.map((i) => (
            <TheamCard {...i} />
          ))}
        </div>


      </div>

      <div className='partnerships_bnx3'>
        <NavCard Client={caregiver_caring} />
        <NavCard Client={caregiver_caring} />

      </div>
    </div>
  )
}
