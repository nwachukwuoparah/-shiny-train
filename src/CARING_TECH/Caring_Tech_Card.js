import React from 'react'
import NavCard from '../COMPONENT/NAVCARD/Nav_card'
import ContactCard from '../COMPONENT/CONTACT_CARD/Contact_card'
import Four from "./image/Four.jpeg"
const Caring_Tech_Card = () => {
  return (
    <div className='Caring_Tech_Card'>
        {/* <div className='Caring_Tech_Card_Wrap'>
            <h4>Apps for your medical needs</h4>
            <p>there's an abundance of health and care apps available. that's why it's difficult to know what you should use</p>
            <button className='Care_Card_Button'>View</button>
        </div>
        <div className='Caring_Tech_Card_Wrap'>
            <h4>Apps for your medical needs</h4>
            <p>there's an abundance of health and care apps available. that's why it's difficult to know what you should use</p>
            <button className='Care_Card_Button'>View</button>
        </div>
        <div className='Caring_Tech_Card_Wrap'>
            <h4>Apps for your medical needs</h4>
            <p>there's an abundance of health and care apps available. that's why it's difficult to know what you should use</p>
            <button className='Care_Card_Button'>View</button>
        </div>
        <div className='Caring_Tech_Card_Wrap'>
            <h4>Apps for your medical needs</h4>
            <p>there's an abundance of health and care apps available. that's why it's difficult to know what you should use</p>
            <button className='Care_Card_Button'>View</button>
        </div> */}
        <ContactCard image={Four} arr={[1,2,3,4]}/>
        <NavCard/>
    </div>
  )
}

export default Caring_Tech_Card