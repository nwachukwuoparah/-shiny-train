import React from 'react'
import './team.css'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import Mark from '../images/Mark Hunt-777x777.jpg'
import Home_Monitoring from '../images/Home-Monitoring1-7537x2640.jpg'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import Client from '../images/client-and-caregiver-baking-together-1062x690.jpg'
import Image from '../../COMPONENT/IMAGE/image'
export default function AboutUs(props) {

  const item = [
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",

    },
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",

    },
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",

    },
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",

    },
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",

    },
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",

    },
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",

    },
    {
      image: Mark,
      text1: "Dr Mark Hunt - Franchise Owner",
      text2: "Mark is Co-Director with Rebecca and has an impressive background as a GP in the Somerset and Dorset area for over 25 years. Together they run the Yeovil and Taunton and West Somerset Franchises. ",
      text3: "Mark believes that it is only through taking the time to truly understand an individual, that we can then be equipped with the detail to deliver a bespoke service. These elements have been critical in his clinical practice and reflects on our ethos at Home Instead. His focus is on providing care that he would be happy for his Mum and Dad to enjoy.",
      stop: true
    },
  ]


  return (
    <div className='aboutus'>
      <Image image={Home_Monitoring} text="Meet The Team" />
      <div className='aboutus_nx1'>
        {item.map((i) => (<TheamCard {...i} />))}
      </div>
      <div className='aboutus_nx2'>
        <NavCard Client={Client} />
        <NavCard Client={Client} />
      </div>
    </div>
  )
}
