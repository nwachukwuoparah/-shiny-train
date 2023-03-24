import React from 'react'
import './personal_care.css'
import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'

import Nav_card from '../../COMPONENT/NAVCARD/Nav_card'
import Home_Monitoring from '../images/Home-Monitoring1-7537x2640.jpg'
import Form from '../../COMPONENT/FORM/Form'

export default function Personal_care(props) {

  const item = [
    {
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and  ",
      stop: true,
      width: true
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      width: true,
      stop: true
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      width: true,
      stop: true
    },
  ]

  return (
    <div className='Personal_care'>
      <Image image={Home_Monitoring} />
      <div className='Personal_care_bnx1'>
        <div className='Personal_care_bnx2'>
          {item.map((i) => (
            <TheamCard {...i} />
          ))}
        </div>
        <Form />
      </div>

      <div className='Personal_care_bnx3'>
        {[1, 2].map((i) => (
          <Nav_card Client={Home_Monitoring} />
        ))}
      </div>

      <div className='Personal_care_bnx4'>
        <h1>Find out more</h1>
        <p>Speak to Home Instead Taunton & West Somerset now about Companionship</p>
        <button>Contact us</button>
      </div>
    </div>
  )
}
