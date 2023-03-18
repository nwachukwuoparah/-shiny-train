import './form.css'

import React from 'react'

export function Form(props) {


  return (
    <form className='body_nx4_form'>
          {[1, 2, 3].map((i) => (
            <>
              <label className='input1'>Your Name
                <input />
              </label>
            </>

          ))}


          <div className='body_nx4_form1'>
            <label className='body_nx4_form1_input'>Name Of Person Needing Care?
              <input />
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>That's me
              <input className='body_nx4_form1_check' type="checkbox" />
            </label>
            <label className='body_nx4_form1_input'>Postcode of person needing care
              <input />
            </label>
          </div>




          <div className='body_nx4_form2'>
            <div style={{ width: '95%' }}>
              <h3>How would you like us to contact you?</h3>
              <div className='body_nx4_form2_wrap'>

                <label style={{ display: "flex", alignItems: 'center', gap: 15 }}>
                  <input className='body_nx4_form1_check' type="checkbox" />
                  <p>Phone</p>

                </label>


                <label style={{ display: "flex", alignItems: 'center', gap: 15 }}>
                  <input className='body_nx4_form1_check' type="checkbox" />
                  <p>Email</p>

                </label>
              </div>
            </div>

          </div>







          <div className='body_nx4_form2'>
            <div style={{ width: '95%' }}>
              <h3>How would you like us to contact you?</h3>
              <div className='body_nx4_form2_wrap'>
                <label style={{ display: "flex", alignItems: 'center', gap: 15 }}>
                  <input className='body_nx4_form1_check' type="checkbox" />
                  <p>Morning</p>

                </label>

                <label style={{ display: "flex", alignItems: 'center', gap: 15 }}>
                  <input className='body_nx4_form1_check' type="checkbox" />
                  <p>Afternoon</p>

                </label>

              </div>

              <div className='body_nx4_form2_wrap'>
                <label style={{ display: "flex", alignItems: 'center', gap: 15 }}>
                  <input className='body_nx4_form1_check' type="checkbox" />
                  <p>Evening</p>

                </label>

                <label style={{ display: "flex", alignItems: 'center', gap: 15 }}>
                  <input className='body_nx4_form1_check' type="checkbox" />
                  <p>Anytime, I don't mind</p>

                </label>

              </div>
            </div>
          </div>


          <div className='body_nx4_form2_wrap'>
            <label style={{ display: "flex", alignItems: 'center', gap: 15 }}>
              <input className='body_nx4_form1_check' type="checkbox" />
              <p>Click here if you would like to receive educational and promotional emails.</p>

            </label>
          </div>



          <div className='body_nx4_footer'>
            <button>Submit Enquiry</button>
            <p>
              In sending your query you confirm you have read<br />
              and accepted our terms and privacy policy.</p>
          </div>

        </form>
  )
}
