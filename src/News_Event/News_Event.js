import React from 'react'
import Image from '../COMPONENT/IMAGE/image'
import Home from './images/HomeMonitoring.jpg'
import "./News_Event.css"
import ContactCard from '../COMPONENT/CONTACT_CARD/Contact_card'
import Four from "./images/Four.jpg"

import News from './News_Event_Data'

const News_Event = () => {
    return (
        <div className='News_Event_Main'>
            <Image image={Home} text="News and event" />
            <div className='News_Event_Card_Wrap'>
              <ContactCard  arr={News} />    
            </div>
        </div>
    )
}

export default News_Event