import React from 'react'
import "./our_care_service.css"
import Home_Monitoring from '../images/Home-Monitoring1-7537x2640.jpg'
import Image from '../../COMPONENT/IMAGE/image'
import Form from '../../COMPONENT/FORM/Form'
export default function OurCareCervice(props) {


  return (
    <div className='OurCareCervice'>
      <Image image={Home_Monitoring} />
      <div className="OurCareCervice_text">
        <div className='OurCareCervice_text_wrap'>
          <p><strong>Live-In Care - includes of the following;</strong></p>
          <p><strong>Companionship Services</strong></p>
          <ul>
            <li>Offer companionship and conversation</li>
            <li>Arrange appointments</li>
            <li>Help with travel arrangements</li>
            <li>Stimulate mental awareness</li>
            <li>Escort to appointments</li>
            <li>Assist with clothing selection</li>
            <li>Assist with entertaining</li>
            <li>Help with reading</li>
            <li>Participate in hobbies and crafts</li>
            <li>Monitor diet and eating</li>
            <li>Buy magazines, papers and books</li>
            <li>Rent and play films</li>
            <li>Plan visits, outings and trips</li>
            <li>Visit neighbours and friends</li>
            <li>Accompany to lunch or dinner</li>
            <li>Attend plays or concerts</li>
            <li>Attend club meetings and sporting events</li>
            <li>Record family history</li>
            <li>Discuss current/historical events</li>
            <li>Reminisce about the past</li>
          </ul>
          <p><strong>Personal Care Services</strong></p>
          <ul>
            <li>Help with bathing</li>
            <li>Assist with dressing</li>
            <li>Provide grooming</li>
            <li>Help with incontinence care</li>
            <li>Assist with eating</li>
            <li>Dementia care</li>
            <li>Alzheimer's care</li>
            <li>Provide respite care</li>
            <li>Provide convalescence care</li>
            <li>Provide medication reminders</li>
            <li>Assist with morning/wake up</li>
            <li>Assist with evening/tuck in</li>
          </ul>
          <p><strong>Home Help Services</strong></p>
          <ul>
            <li>Collect prescriptions</li>
            <li>Provide light housekeeping</li>
            <li>Dusting and vacuuming</li>
            <li>Help with washing and ironing</li>
            <li>Make beds and change bed linen</li>
            <li>Answer the door</li>
            <li>Organise wardrobes and cupboards</li>
            <li>Take out rubbish</li>
            <li>Meal preparation and tidy away</li>
            <li>Check food expiry dates</li>
            <li>Supervise home maintenance</li>
            <li>Oversee home deliveries</li>
            <li>Care for houseplants</li>
            <li>Assist with pet care</li>
            <li>Prepare shopping lists</li>
            <li>Help with general shopping</li>
            <li>Drop off and collect dry cleaning</li>
          </ul>
          <p>Services may vary by individual Home Instead franchise office location.</p>
          <p>Home Instead demonstrates commitment to quality care through our proprietary PEAQ program, 'Pursuing Excellence by Advancing Quality'. Through an exclusive partnership with JD Power and Associates, Care Professionals&nbsp;and clients are routinely surveyed to ensure consistent delivery of high quality service.</p>
        </div>
      </div>
      <Form />
    </div>
  )
}
