import React, { useEffect, useState } from 'react'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import HeaderNav from './HeaderNav';
import { useNavigate } from 'react-router-dom';



export default function Header(props) {
  const Navigate = useNavigate()
  const [scroll, setScroll] = useState(false)

  const head = [
    {
      id: 1,
      text: 'About us',
      left: 201.5,
      nav: '/taunton-west-somerset',
      Text1: [
        {
          text1: 'Meet the team',
          nav: '/taunton-west-somerset/our-team',
        },
        {
          text1: 'Areas we cover',
          nav: '/taunton-west-somerset/areas-we-cover',
        },
        {
          text1: 'Testimonials',
          nav: '/taunton-west-somerset/testimonal',
        },
      ]
    },
    {
      id: 2,
      text: 'Our expertise',
      left: 299,
      nav: '/taunton-west-somerset1',
      Text1: [
        {
          text1: 'How does our care work',
          nav: '/taunton-west-somerset1/our-careWork'
        },
        {
          text1: 'Our care professional',
          nav: '/taunton-west-somerset1/our_care_prof'
        },
        {
          text1: 'Partnerships and professionals',
          nav: '/taunton-west-somerset1/partnerships'
        },
      ]
    },
    {
      id: 3,
      text: 'Home care services',
      left: 429,
      nav: '/taunton-west-somerset2',
      Text1: [
        {
          text1: 'Companionship',
          nav: '/taunton-west-somerset2/companionship',
        },
        {
          text1: 'Home help and housekeeping',
          nav: '/taunton-west-somerset2/Home_kepping',
        },
        {
          text1: 'Personal care',
          nav: '/taunton-west-somerset2/personal_care',
        },
        {
          text1: 'Live in care',
          nav: '/taunton-west-somerset2/live_in_care',
        },
        {
          text1: 'Our care Services',
          nav: '/taunton-west-somerset2/our_care_cervice',
        },
      ]
    },
    {
      id: 4,
      text: 'Caring technology',
      nav: '/caring-technology',
    },
    {
      id: 5,
      text: 'Advice & support',
      left: 768,
      nav: '/taunton-west-somerset3',
      Text1: [
        {
          text1: 'Cost of care',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'FAQs',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'How to age well',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Understanding and pepairing for home care',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Choosing the right care for you',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Nutrition',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Preventing hospitalisation',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Preventing falls',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Staying safe at home',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Health and wellbeing',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Community involvement',
          nav: '/taunton-west-somerset3',
        },
        {
          text1: 'Alzheimers and dementia care',
          nav: '/taunton-west-somerset3',
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
      text: 'Getting started',
      nav: "/gettingstarted"
    },
    {
      id: 8,
      text: 'News & events',
      nav: "/newsevent"
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
      <div onClick={() => Navigate('/')} className='HeadLogo'></div>
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
                <div className='input_action'>
                  <FaSearch fontSize={25} />
                </div>
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
          {head.map((i) => (<HeaderNav scroll={scroll} key={i.id} {...i} />))}
          <div className='Head_bottom_contact'>
            Contact us
          </div>
        </div>
      </div>
    </div>
  )
}
