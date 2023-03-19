import React from 'react'
import './aboutus.css'
import Home_Monitoring from './image/Home-Monitoring2-7951x2785.jpg'
import Best_Employers from './image/Best Employers in Care-405x263.jpg'
import Capture from './image/Capture-191x124.jpeg'
import LaingBuisson from './image/LaingBuisson April 2016 No.11-2362x1534.jpg'
import Team from '../Team/Team'
import Areas from '../AREAS_WE_COVER/Areas'
import { Routes, Route } from "react-router-dom";
import Image from '../../COMPONENT/IMAGE/image'

export default function AboutUs(props) {


  return (
    <div className='aboutus'>
      <Image image={Home_Monitoring} text="About us" />

      <div className='aboutus_bnx1'>
        <div className='aboutus_bnx1_text'>
          <p>
            Welcome to Home Instead, Taunton and West Somerset. We offer a
            unique service, providing quality home care to elderly people in
            our local community.  We understand how important it is for you
            to remain independent in the comfort of your own home and receive
            support from someone you can trust, who will care about you and your
            loved ones. Our services are tailor-made to each client, whether we
            provide companionship, home help services or assist you with personal
            care needs.  We are reliable and responsive and flexible to changing needs.
          </p>
          <p>
            Home Instead is recognised as one of the UK’s leading home care organisations; our
            local office is owned and managed by partners Dr Mark Hunt and Dr Rebecca Gray.
            They are extremely proud to bring Home Instead into the area where they have lived their whole lives.
          </p>
          <p>
            “Our philosophy is simple; to provide a high quality service which will enable older
            people to live independently in their own homes for as long as possible, whilst
            improving their quality of life”
          </p>
          <p>
            Our Care Manager and the team strive to find out what is important
            to you as well as what is important for you. By understanding this,
            we aim to carefully match a Care Professional to each client and it
            is always a great comfort to an older person to know exactly who is
            coming and exactly when their Care Professional will arrive. The work
            our team carries out has a positive impact, not only on the people we
            provide care for, but also on their families and this is very important to us.
          </p>
          <p>Our Care Professional's are able to provide a range of services which
            can include companionship, home help such as shopping and cleaning,
            medication reminders, meal preparation, walking the dog, local
            transportation to social events or appointments, respite care and
            a full range of personal care services. Home Instead provides a
            specialist service for people who have
            Alzheimer's disease or dementia. Service can be provided from as
            little as a few hours a week up to 24 hours a day.
          </p>
          <p>
            The strength of Home Instead lies with our unique group of Care
            Professionals. We are particularly proud of the standard of service
            they provide and the dedication and commitment shown to our clients.
            Our Care Professionals come to work for Home Instead for a variety of
            reasons; some have had personal experience of caring for a relative,
            some have done charity work and others simply want to work for an
            organisation that enables them to deliver the kind of care our clients
            deserve. The Care Professionals employed by Home Instead are fully insured,
            rigorously vetted and trained to meet their individual clients' needs. Home
            Instead selects and recruits the best people to become Care Professionals.
            They have a diverse range of backgrounds and experiences to suit the diverse
            personalities and needs of our clients.
          </p>
          <p>We are also proud to have been awarded the homecare.co.uk Top 20 Award 2020.</p>
          <p>
            Home Instead clients come to us in many ways. Some people come to us themselves;
            others are introduced by their children or relatives and some clients are referred
            to us by Social Services and the NHS. Regardless of how you come to Home Instead,
            it is our goal to provide the same exceptional level of care.
          </p>
          <p>
            Whether you are interested in discussing your specific care at home needs or
            joining us as a Care Professionals, please give us a call on 01823 211121.
            We will be pleased to visit you at home to talk through how we can help or
            alternatively you are more than welcome to pay us a visit at our office in
            Taunton for a cup of tea and a chat.
          </p>
        </div>
      </div>
      <div className='aboutus_video'>
        <iframe width="770" height="415" src="https://www.youtube-nocookie.com/embed/BUkZoYhKD14?controls=0"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>
        <div className='aboutus_video_img'>
          <img src={Best_Employers} alt="image" />
          <img src={Capture} alt="image" />
          <img src={LaingBuisson} alt="image" />
        </div>
      </div>
    </div>
  )
}
