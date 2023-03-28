import React from 'react'
import Image from '../../COMPONENT/IMAGE/image'
import HomeMonitor from "../images/HomeMonitoring.jpg"
import "./Working_Care.css"
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import Care from "../images/HomeMonitoring.jpg"
const Working_Care = () => {
  return (
    <div className='Working_Care'>
      <Image image={HomeMonitor} text="Working in care" />
      <div className='Working_Care_Wrap'>
        <p className='Our_Training'>
          There’s no doubt that recent times have highlighted the fantastic work of individuals in the care sector. Without the dedication of people across the industry, our elderly and vulnerable population aren’t able to live safe and happy lives.
        </p>
        <div className='Strong_Div'>
          <p className='WhyWork'>Why work in care?</p>
          <p>
            Getting a smile and a thank you from our clients gives a job satisfaction like no other. Our Care Professionals take comfort in having a career that helps somebody in need of support
          </p>
          <p className='Our_Training'>
            Working in the care sector opens up a fruitful career path. With training and experience you can work your way up to a management role. Building our care package around the individual client; from a few hours a week to several hours a day, makes it  feasible to do it alongside another job or family commitments.
          </p>
          <p>
            Whatever the future has in store, there will always be a demand for care. People who work in care can rest assured that their skills will always be coveted, particularly as we face a rising elderly population.
          </p>
        </div>
        <div className='Strong_Div'>
          <p className='WhyJoin'>Why join Home Instead?</p>
          <p>
            Each of our Care Professionals is a valued member of the team, shown by our market-leading annual satisfaction survey scores. The latest survey we conducted among caregivers found that:
          </p>
          <ul className='List_Percent'>
            <li>96% are proud to work for Home Instead. </li>
            <li>95% feel motivated to go the extra mile.</li>
            <li>88% see themselves working at Home Instead in 12 months’ time.</li>
            <li>82% would recommend Home Instead as a great place to work.</li>
          </ul>
          <p className='Our_Training'>Our training is just as exceptional. We are the only care company to be awarded two Princess Royal Training Awards for our Alzheimer’s and dementia training, which is City & Guilds accredited. Supporting and encouraging our caregivers in delivering their vital work is one of our biggest priorities.</p>
          <p className='Our_Training'>Each Home Instead office has a close relationship with its Care Professionals, which helps maintain business success. Our values inform everything we do, and that means that our Care Pros know how to deliver exceptional care. The ‘Home Instead Way’ includes personalised one-to-one care, visits at a minimum of an hour, and an optimistic outlook on age. That’s how our Care Pros know that they are making a positive difference to somebody’s life.</p>
          <strong>
            <p className='Want_To_Apply'>Want to apply for a Care Professional role?</p>
          </strong>
          <p className='Our_Training'>If you want to apply to join the caregiver family in your local area,  <a href="">click here to head to our Vacancies section.</a></p>
          
        </div>
        <div className='livein_care_card'>
          {[1, 2].map((i) => (
            <NavCard Client={Care} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Working_Care