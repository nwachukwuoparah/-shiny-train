import React from 'react'
import Image from '../COMPONENT/IMAGE/image'
// import Home_Monitoring from './image/Home-Monitoring2-7951x2785.jpg'
import Home from './images/HomeMonitoring.jpg'
import "./News_Event.css"
import ContactCard from '../COMPONENT/CONTACT_CARD/Contact_card'
import Four from "./images/Four.jpg"
const News_Event = () => {
    return (
        <div className='News_Event_Main'>
            <Image image={Home} text="News and event" />
            <div className='News_Event_Card_Wrap'>
              <ContactCard  image={Four} arr={[1, 2, 3, 4, 5,6,7,8,9,10,11,12]} />    
            </div>
        </div>
    )
}

export default News_Event