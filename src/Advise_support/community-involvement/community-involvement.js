import React from 'react'
import './community-involvement.css'
import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import Home_Monitoring from '../image/Home-Monitoring2-7951x2785.jpg'
import Contact_card from '../../COMPONENT/CONTACT_CARD/Contact_card'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'

export default function Community_involvement(props) {

  const item = [
    {
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      // width: true,
      stop: true
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      li1: "Mark is Co-Director with Rebecca and has an impressive background",
      li2: "Mark is Co-Director with Rebecca and has an impressive background",
      li3: "Mark is Co-Director with Rebecca and has an impressive background",
      // width: true,
      stop: true
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      li1: "Mark is Co-Director with Rebecca and has an impressive background",
      li2: "Mark is Co-Director with Rebecca and has an impressive background",
      li3: "Mark is Co-Director with Rebecca and has an impressive background",
      // width: true,
      stop: true
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      li1: "Mark is Co-Director with Rebecca and has an impressive background",
      li2: "Mark is Co-Director with Rebecca and has an impressive background",
      li3: "Mark is Co-Director with Rebecca and has an impressive background",
      // width: true,
      stop: true
    },
  ]

  return (
    <div className='community-involvement'>
      <Image image={Home_Monitoring} text="How we're improving the lives of older people in the UK" />
      <div className='advise_support_text'>
        {item.map((i) => (
          <TheamCard {...i} />
        ))}
      </div>

      <div className='community-involvement_nav_card'>
        <NavCard Client={Home_Monitoring} />
        <NavCard Client={Home_Monitoring} />
      </div>
    </div>
  )
}

















