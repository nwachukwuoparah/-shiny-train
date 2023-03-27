import React from 'react'
import './dementia-care.css'
import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'

import Nav_card from '../../COMPONENT/NAVCARD/Nav_card'
import Home_Monitoring from '../image/Home-Monitoring2-7951x2785.jpg'
import Form from '../../COMPONENT/FORM/Form'

export default function Dementia_care(props) {

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
    <div className='dementia-care'>
      <Image image={Home_Monitoring} text="Alzheimer's disease and dementia home care" />
      <div className='dementia-care_bnx1'>
        <div className='dementia-care_bnx2'>
          {item.map((i) => (
            <TheamCard {...i} />
          ))}
        </div>
        <Form />
      </div>

      <div className='dementia-care_bnx3'>
        {[1, 2].map((i) => (
          <Nav_card Client={Home_Monitoring} />
        ))}
      </div>

      <div className='dementia-care_bnx4'>
        <h1>Find out more</h1>
        <p>Speak to Home Instead Taunton & West Somerset now about Companionship</p>
        <button>Contact us</button>
      </div>
    </div>
  )
}
