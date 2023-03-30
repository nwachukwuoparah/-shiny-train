import React from 'react'
import Image from '../../COMPONENT/IMAGE/image'
import Care from "../images/HomeMonitoring.jpg"
import Perent from '../images/Percent.png'
import './Apply.css'
const Apply = () => {
    return (
        <div className='Apply_Main'>
            <Image image={Care} text="Working in care" />
            <div className='Apply_Wrap'>
                <div className='Apply_Wrap_Left'>
                    <img src={Perent} alt='' />
                    <div className='Working_Care_Text'>
                        <div className='Working_Care_Text_Wrap'>
                            <p className='WhyWork'>What is a role as a Care Professional?
                            </p>
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
                                <p className='Our_Training'>Our training is just as exceptional. We are the only care company to be awarded two Princess Royal Training Awards for our Alzheimer’s and dementia training, which is City & Guilds accredited. Supporting and encouraging our caregivers in delivering their vital work is one of our biggest priorities..</p>
                                <p className='Our_Training'>Each Home Instead office has a close relationship with its Care Professionals, which helps maintain business success. Our values inform everything we do, and that means that our Care Pros know how to deliver exceptional care. The ‘Home Instead Way’ includes personalised one-to-one care, visits at a minimum of an hour, and an optimistic outlook on age. That’s how our Care Pros know that they are making a positive difference to somebody’s life.</p>
                                <p className='Our_Training'>
                                    The ‘Home Instead Way’ includes personalised one-to-one care, visits at a minimum of an hour, and an optimistic outlook on age. That’s how our caregivers know that they are making a positive difference to somebody’s life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Apply_Wrap_Right'>
                    <div className='Apply_Wrap_Right_Wrap'>
                          <p className='Apply_Right_Title'>Enquire Now</p>
                          <span className='Apply_Span'>
                            <p>
                            For more information on how we use your data, please refer to our
                            </p>
                            <b> privacy policy.</b>
                          </span>
                          <div className='Apply_Input_Wrap'>
                            <label className='First_Label'>
                                First Name
                                <input className='Input'/>
                            </label>
                            <label className='First_Label'>
                                Last Name
                                <input className='Input'/>
                            </label>
                            <label className='First_Label'>
                                Email address
                                <input className='Input'/>
                            </label>
                            <label className='First_Label'>
                                Contact telephone number
                                <input className='Input'/>
                            </label>
                            <label className='Office_Label'>
                            To find your nearest Home Instead, simply put your postcode, town or city in our postcode finder
                               <span className='Office_Span'>
                               <input className='Input_1'/>
                                <button>Find office</button>
                               </span>
                            </label>
                            <label className='Contact_Label'>
                                Preferred method of Contact
                               <div className='Contact_Label_Wrap'>
                               <span className='Contact_Span'>
                                <input type="radio" className='Check'/>
                                <p>Telephone</p>
                                </span>
                                <span className='Contact_Span'>
                                <input type="radio"className='Check'/>
                                <p>Email</p>
                                </span>
                                <span className='Contact_Span'>
                                <input type="radio" className='Check'/>
                                <p>Text Message</p>
                                </span>
                               </div>
                            </label>
                            <label className='First_Label'>
                                Contact telephone number
                                <input className='Input'/>
                            </label>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apply