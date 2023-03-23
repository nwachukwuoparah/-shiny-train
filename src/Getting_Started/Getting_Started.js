import React from 'react'
import Image from '../COMPONENT/IMAGE/image'
import Home_Monitoring from './image/Home-Monitoring2-7951x2785.jpg'
import "./Getting_Started.css"
import { Form } from './FORM/Form'
const Getting_Started = () => {
    return (
        <div className='Getting_Started'>
            <Image image={Home_Monitoring} text="Getting started with your local home care provider" />
            <div className='WeHelp'>
                <h1>We're here to help</h1>
                <p>If you believe you or your family member would benefit from having some support at home, the best way forward is for us to come and meet you at your home for a care consultation. This is where we can discuss your needs and the type of support you are looking for as well as discover what type of Care Professional would best suit you. Please use the form below to request a consultation with your local Home Instead office team.</p>
            </div>
            <div className='Form_Div'>
                <p>If you would like to know more about how homecare could benefit you or your loved one please submit your details below.
                </p>
                <Form />
            </div>
            <div className='Get_Intouch'>
                <h2>Or get in touch:</h2>
                <div className='Get_Intouch_Contact'>
                    <h3>Taunton & west Somerset</h3>
                    <p>Tel: 019823211121</p>
                    <p>Email: Mark.hunt@homeinstead.co.uk</p>
                   <div className='OfficeADD'>
                   <h3>Office</h3>
                    <p>HomeInstead<br /> The Comeytrowe Center <br /> Pitts Close <br />Taunton <br />Somerset<br />TA1 4TY</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Getting_Started