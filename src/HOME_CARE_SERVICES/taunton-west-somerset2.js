import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeCareService from './Home_Care_Service/Home_care_service';
import Companionship from './COMPANIONSHIP/Companionship';
import Home_kepping from './HOUSE_KEPPING/home_kepping';
import Personal_care from './PERSONAL_CARE/personal_care';
import LiveInCare from './LIVE_IN_CARE/live_in_care';


export default function TauntonWestSomerset2(props) {



  return (
    <>
      <Routes>
        <Route path='/' element={<HomeCareService />} />
        <Route path='/companionship' element={<Companionship />} />
        <Route path='/home_kepping' element={<Home_kepping />} />
         <Route path='/personal_care' element={<Personal_care />} />
         <Route path='/live_in_care' element={<LiveInCare />} />
        {/*  <Route path='/partnerships' element={<Partnerships />} /> */}
      </Routes>
    </>

  )
}
