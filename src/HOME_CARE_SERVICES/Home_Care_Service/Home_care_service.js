import React from 'react'
import "./home_care_service.css"
import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import Contact_card from '../../COMPONENT/CONTACT_CARD/Contact_card'
import caregiver_caring from '../images/caregiver-caring-elderly-lady-in-her-home-370x240.jpg'
import Home_Monitoring from '../images/Home-Monitoring1-7537x2640.jpg'
export default function HomeCareService(props) {

  return (
    <div className='homecareservice'>
      <Image image={Home_Monitoring} />
      <div className='homecareservice_text'>
        <div className='homecareservice_text_wrap'>
          <h3>Bespoke Home Care Services in Taunton & West Somerset</h3>
          <span>
            <p>
              Letting someone provide care for you in your own home is a very personal experience,
              therefore ensuring you or your loved ones receive the best standards of care is highly
              important. This is why we take pride in making
              sure the standards of care we deliver are outstanding at Home Instead Taunton & West Somerset.
            </p>
            <p>
              We offer a range of home care services in West Somerset so no matter what level of
              support you need Home Instead will tailor your care at home services to you.
            </p>
            <p>
              We pay attention to your specific needs when providing you with our professional
              home care services. We consider what your individual requirements are, whether that
              may be companion care each week or a requirement for intensive dementia care.
            </p>
          </span>
        </div>


        <div className='homecareservice_text_wrap'>
          <h3>Bespoke Home Care Services in Taunton & West Somerset</h3>
          <span>
            <p>
              Letting someone provide care for you in your own home is a very personal experience,
              therefore ensuring you or your loved ones receive the best standards of care is highly
              important. This is why we take pride in making
              sure the standards of care we deliver are outstanding at Home Instead Taunton & West Somerset.
            </p>
            <p>
              We offer a range of home care services in West Somerset so no matter what level of
              support you need Home Instead will tailor your care at home services to you.
            </p>
            <p>
              We pay attention to your specific needs when providing you with our professional
              home care services. We consider what your individual requirements are, whether that
              may be companion care each week or a requirement for intensive dementia care.
            </p>
          </span>
        </div>
      </div>

      <Contact_card arr={[1, 2, 3, 4, 5]} image={caregiver_caring} />

    </div>
  )
}
