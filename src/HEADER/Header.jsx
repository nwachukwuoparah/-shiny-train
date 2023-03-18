import React, { useEffect, useState } from 'react'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import HeaderNav from './HeaderNav';
export default function Header(props) {

  const [scroll, setScroll] = useState(false)

  const head = [
    {
      id: 1,
      text: 'About us',
      left: 201.5,
      Text1: [
        {
          text1: 'Meet the team',
        },
        {
          text1: 'Areas we cover',
        },
        {
          text1: 'Testimonials',
        },
      ]
    },
    {
      id: 2,
      text: 'Our expertise',
      left: 299,
      Text1: [
        {
          text1: 'How does our care work',
        },
        {
          text1: 'Our care professional',
        },
        {
          text1: 'Partnerships and professionals',
        },
      ]
    },
    {
      id: 3,
      text: 'Home care services',
      left: 429,
      Text1: [
        {
          text1: 'Companionship',
        },
        {
          text1: 'Home help and housekeeping',
        },
        {
          text1: 'Personal care',
        },
        {
          text1: 'Live in care',
        },
        {
          text1: 'Our care Services',
        },
      ]
    },
    {
      id: 4,
      text: 'Caring technology'
    },
    {
      id: 5,
      text: 'Advice & support',
      left: 768,
      Text1: [
        {
          text1: 'Cost of care',
        },
        {
          text1: 'FAQs',
        },
        {
          text1: 'How to age well',
        },
        {
          text1: 'Understanding and pepairing for home care',
        },
        {
          text1: 'Choosing the right care for you',
        },
        {
          text1: 'Nutrition',
        },
        {
          text1: 'Preventing hospitalisation',
        },
        {
          text1: 'Preventing falls',
        },
        {
          text1: 'Staying safe at home',
        },
        {
          text1: 'Health and wellbeing',
        },
        {
          text1: 'Community involvement',
        },
        {
          text1: 'Alzheimers and dementia care',
        },
      ]
    },
    {
      id: 6,
      text: 'Join our team',
      left: 929,
      Text1: [
        {
          text1: 'Working in care',
        },
        {
          text1: 'Current vacancies',
        },
        {
          text1: 'Appply to be a care professional',
        },
      ]
    },
    {
      id: 7,
      text: 'Getting started'
    },
    {
      id: 8,
      text: 'News & events'
    },
  ]

  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 20 ? setScroll(true) : setScroll(false)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: scroll ? 'White' : null, color: scroll ? 'black' : null }} className='Head'>
      <div className='HeadLogo'></div>
      <div className='HeadTop'></div>
      <div className='Head_top'>
        <div className='Head_top_wrap'>
          <div className='Head_top_cont'>
            <span className='Head_top_cont_text'>
              <div style={{ display: "flex", gap: 5, alignItems: 'center', fontSize: 20, textDecoration: 'underline' }}>
                <MdOutlineLocationOn fontSize={30} />
                <p>Back To Taunton & West Somerset</p>
              </div>

              <p style={{ fontSize: 26 }}>Call us: 01823 211121</p>
            </span>

            <div className='Head_top_action'>
              <div className='Head_top_action_top_input'>
                <input placeholder='Search Website' />
                <FaSearch fontSize={25} color='554F4F' />
              </div>

              <div className='Head_top_action_top_button'>
                <button>Visit national website</button>
                or
                <button>Find another local office</button>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div className='Head_bottom'>
        <div className='Head_bottom_wrap'>
          {head.map((i) => (<HeaderNav key={i.id} {...i} />))}
          <div className='Head_bottom_contact'>
            Contact us
          </div>
        </div>
      </div>
    </div>
  )
}
