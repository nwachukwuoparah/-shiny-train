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
      text1: 'Food'
    },
    {
      id: 2,
      text: 'Our expertise',
      left: 299,
      text1: 'Food'
    },
    {
      id: 3,
      text: 'Home care services',
      left: 429,
      text1: 'Food'
    },
    {
      id: 4,
      text: 'Caring technology'
    },
    {
      id: 5,
      text: 'Advice & support',
      left: 768,
      text1: 'Food'
    },
    {
      id: 6,
      text: 'Join our team',
      left: 929,
      text1: 'Food'
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
