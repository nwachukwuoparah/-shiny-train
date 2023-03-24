import React from 'react'
import './live_in_care.css'
import Image from '../../COMPONENT/IMAGE/image'
import Home_Monitoring from '../images/Home-Monitoring1-7537x2640.jpg'
import Form from '../../COMPONENT/FORM/Form'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import caregiver_caring_elderly from '../images/caregiver-caring-elderly-lady-in-her-home-370x240.jpg'



export default function LiveInCare(props) {

  const item = [
    {

    }
  ]

  return (
    <div className='livein_care'>
      <Image image={Home_Monitoring} text="Live-in care for your loved one" />
      <div className='livein_care_text'>
        <div className='livein_care_text_wrap'>
          <h2>What is live-in care?</h2>
          <span>
            <p>With Home Instead live-in care, a Care Professional is chosen to be a companion to your loved one to live in their home and support with daily activities. It’s all down to you and your loved one to decide how many hours of care you require each day. A live-in caregiver is available not only as a companion, but as a source of comfort and care, day and night. You can be confident that help is at hand for your loved one, in the event that any unforeseen circumstances occur.</p>
            <p>With Home Instead live-in care, a Care Professional is chosen to be a companion to your loved one to live in their home and support with daily activities. It’s all down to you and your loved one to decide how many hours of care you require each day. A live-in caregiver is available not only as a companion, but as a source of comfort and care, day and night. You can be confident that help is at hand for your loved one, in the event that any unforeseen circumstances occur.</p>
            <p><b>Long-term conditions: </b>Diseases like Parkinson’s require close and careful monitoring. Our Care Pros are trained to observe any changes to a client’s health, wellbeing and behaviour, ready to take action if there is ever a cause for concern.</p>
            <p><b>Dementia care:</b>Living at home means staying in familiar surroundings and maintaining those daily routines that might not be possible in residential care. Home care suits somebody living with a dementia, where continuity of life in the home they have grown to love is proven to be beneficial.</p>
            <p><b>Losing a spouse:</b>When a spouse dies, it takes some time to adjust, not just emotionally but practically too. A caregiver can be a much needed companion and fulfil the support role that was recently lost.</p>
            <p><b>Frailty:</b>Getting older for many means not being able to do the simplest of things, even lifting the kettle to make a cup of tea. Live-in care can support someone who is becoming frail to maintain their independence and quality of life.</p>
            <p></p>
            <p></p>
          </span>
        </div>
      </div>
      <Form />
      <div className='livein_care_card'>
        {[1, 2].map((i) => (
          <NavCard Client={caregiver_caring_elderly} />
        ))}
      </div>

    </div>
  )
}
