import React from 'react'
import Image from '../COMPONENT/IMAGE/image'
import Home_Monitoring from './image/Home-Monitoring2-7951x2785.jpg'
import "./Caring_Tech.css"
import LaingBuisson from './image/LaingBuisson April 2016 No.11-2362x1534.jpg'
import ContactCard from '../COMPONENT/CONTACT_CARD/Contact_card'


const Caring_Tech = () => {
  return (
    <div className='Care_Tech'>
      <Image image={Home_Monitoring} text="Caring Technology" />
      <div className='Care_Tech_Wrap'>
        <p>
          At Home Instead, we believe that while technology will never replace the human touch, it can enhance peoples' lives. It can help to keep older people connected and engaged with their family, loved ones and the world, as well as ensuring they are safe in their homes 24 hours a day.
        </p>
        <div className='OurTech'>
          <h1>Our Technology</h1>
          <p>As experts in care, we want to focus on what we do best. Our aim is to enhance our local, person-centred care with the best products available to keep your loved ones happy, healthy and safe at home. Technology works in perfect harmony with the award-winning face to face care we deliver, giving us added unique insights to support your loved one with everything from nutrition and wellbeing to safety and mobility. It also means you can also be assured that our local team of Care Professionals can provide a fast, expert response to your loved ones when they need it.</p>
        </div>
        <div className='SafeAtHome'>
          <h1>Safe<b>at home</b></h1>
          <p>
            As we age, falls can become more commonplace or you may notice behaviour which is out of character like leaving the house at unusual hours. During the times our Care Pros may not be there, subtle sensors can make sure your loved one is safe at home and discreet personal alarms link directly to an emergency resolution team in the event of a fall or incident.</p>
        </div>
        <div className='WellAtHome'>
          <p>Well <b>at home</b></p>
          <p>
            Our home monitoring helps ensure your loved ones are maintaining positive routines:</p>
          <ul>
            <li>Nutrition/hydration</li>
            <li>Mobility</li>
            <li>Hobbies</li>
          </ul>
          <p>It also allows us to have the best care plan in place to help your loved one stay healthy at home.</p>
          <p>As well as this, our partnership with ORCHA provides a useful place to get information and advice on all the best healthcare and wellbeing apps out there. These apps can help with specific medical needs, or help with nutrition, sleep, exercise and more.</p>
        </div>
        <div className='Connected'>
          <p>Connected <b>at home</b></p>
          <p>Through the Home Instead tablet, we can help you and your family to stay connected, sharing moments together even when apart, and provide an easy way to socially engage with others.</p>
          <p>Be confident they’ll never miss a thing:</p>
          <ul>
            <li>Check-in calls</li>
            <li>Family chats</li>
            <li>Socialising</li>
          </ul>
          <p>Be confident that your local office office team will know if anything changes</p>
        </div>
        <div className='Mom_Dad'>
          <h4>We're here for Mom and Dad</h4>
          <p>All the technology we use has to be good enough for our own parents, otherwise, we wouldn’t promote it. You can rest assured that even when alone, Mum or Dad are cared for and well at home with Home Instead. Get in touch today to see how we can help.</p>
        </div>
      </div>
      < ContactCard arr={[1, 2, 3, 4]} image={LaingBuisson} />
    </div>
  )
}

export default Caring_Tech