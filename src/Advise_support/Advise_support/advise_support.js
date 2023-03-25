import React from 'react'
import './advise_support.css'
import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import Home_Monitoring from '../image/Home-Monitoring2-7951x2785.jpg'
import Contact_card from '../../COMPONENT/CONTACT_CARD/Contact_card'

export default function AdviseSupport(props) {

  const item = [
    {
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      width: true,
      stop: true
    },
    {
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",
      width: true,
      stop: true
    },
  ]

  return (
    <div className='advise_support'>
      <Image image={Home_Monitoring} text="Home care advice and support" />
      <div className='advise_support_text'>
        {item.map((i) => (
          <TheamCard {...i} />
        ))}
      </div>

      <div className='advise_support_contect_card'>
        <Contact_card arr={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </div>

      <div className='advise_support_nav_card'>
      </div>
    </div>
  )
}

















