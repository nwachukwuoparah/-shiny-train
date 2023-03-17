import React from 'react'
import './body.css'
import image97 from './97.webp'
import care_quality from "./care-quality.webp"
import logo from './logo.svg'

export default function Body(props) {


  return (
    <div className='body'>
      <div className='body_img'>
      </div>
      <div className='body_nx1'>
        <span className='body_nx1_top'><p>Why</p><b><h3>choose</h3></b><p>us?</p></span>
        <div className='body_nx1_middle'>
          <div className='body_nx1_middle_first'>
            <img src={image97} />
          </div>
          <div className='body_nx1_middle_second'>
            <img src={care_quality} />
            <h4>Overall rating</h4>
            <p>10 july 2019</p>
            <button>OUTSTANDING</button>
          </div>
          <div className='body_nx1_middle_third'>
            <img src={care_quality} />
            <div className='body_nx1_middle_third_text'>
              <div style={{
                width: 60,
                height: 43,
                display: 'flex',
                alignItems: "Center",
                justifyContent: "center",
                borderRadius: 50,
                border: '3px solid',
                borderColor: "#367C75"
              }}>
                <span
                  style={{
                    width: '90%',
                    height: '90%',
                    display: 'flex',
                    alignItems: "Center",
                    justifyContent: "center",
                    backgroundColor: '#367C75',
                    borderRadius: 50,
                    color: '#f8f8f8'
                  }}
                >
                  9.9
                </span>
              </div>
              <span>
                <b><p>	homecare.co.uk Review Score</p></b>
                <p>for Home Instead (Taunton & West Somerset) 95 reviews</p>
              </span>
            </div>
          </div>
        </div>
        <span className='body_nx1_bottom'><p>To view Home Instead’s national awards, please</p><p>click here</p></span>
      </div>

      <div className='body_nx2'>
        <div className='body_nx2_wrap'>
          <div className='body_nx2_text1'>
            <h2>Professional Home Care in Taunton and West Somerset</h2>
            <p>There is a popular saying that the home is where the heart is and at Home Instead
              Taunton and West Somerset we truly believe that remaining at home
              is the most comfortable solution as you age. As daily tasks become more challenging it
              can make living independently at home more difficult, but this shouldn’t mean that you have to
              leave the home you love.
            </p>
            <p>Home care services from Home Instead Taunton and West Somerset will allow you or your
              loved one to remain at home. Our dedicated, professional team provide high quality home
              care in Taunton and West Somerset that works around you. Our care has been recognised as
              'Outstanding' by the CQC. Let our Care Professionals can help you or your loved one to continue
              living independently in your own home.</p>
          </div>


          <div className='body_nx2_text1'>
            <h2>Personalised Home Care Services in Taunton and West Somerset</h2>
            <p>Home Instead Taunton and West Somerset was set up by Noel and Vanessa
              Munson as part of the national Home Instead family. When they retired,
              Dr Mark Hunt and Dr Rebecca Gray took new ownership. Our team provide professional,
              compassionate care at home in the West Somerset. From home help in Galmington to companionship
              in Trull, we will work with you and your loved-ones to provide the provision you need to continue
              living in your own home.
            </p>
            <p>We have a committed team of professionally trained Care Professionals who are locally based in the
              Taunton area. If you are in need of home help, then Home Instead are here to help you or your loved one.
            </p>
            <p>Find out more about our home care services by viewing our e-brochure</p>
          </div>
        </div>
      </div>


      <div className='body_img'>
      </div>


      <div className='body_nx3'>
        <div className='body_nx3_wrap'>
adv
        </div>
      </div>
    </div>
  )
}
