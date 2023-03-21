import React from 'react'
import "./contact_card.css"
export default function ContactCard(props) {


  return (
    <div className='Contact_card'>
      <div className='Contact_card_wrap'>

        {props.arr?.map((i) => (
          <div className='Card'>
            <div className='Card_img'>
              <img src={props.image} alt='image' />
            </div>

            <div className='Card_text'>
              <div className='Card_text_wrap'>
                <h2>How does our care work</h2>
                <span className='Card_text_span'>
                  <p>At Home Instead, we work with you to provide flexible,
                    personalised home care based on your specific requirements</p>
                  <button>view</button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
