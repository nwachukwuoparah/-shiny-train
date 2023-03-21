import React from 'react'
import "./our_care_prof.css"
import Image from '../../COMPONENT/IMAGE/image'
import Home_Monitoring from '../images/Home-Monitoring1-7537x2640.jpg'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import caregiver_caring from '../images/caregiver-caring-elderly-lady-in-her-home-370x240.jpg'

export default function OurCareProf(props) {

  const item = [
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      stop: true,
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      stop: true
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      stop: true
    },
  ]

  return (
    <div className='our_care_prof'>
      <Image text="Our Care Professionals" image={Home_Monitoring} />
      <div className='our_care_prof_bnx1'>
        <div className='our_care_prof_bnx2'>
          {item.map((i) => (
            <TheamCard {...i} />
          ))}
        </div>
      </div>

      <div className='our_care_prof_bnx3'>
        <NavCard Client={caregiver_caring} />
        <NavCard Client={caregiver_caring} />
      </div>
    </div>
  )
}
