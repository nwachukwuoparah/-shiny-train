import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AdviseSupport from './Advise_support/advise_support'
import CostOfCare from './COST_OF_CARE/cost_of_care';
import Faq from './FAQs/faq';
export default function TauntonWestSomerset3(props) {


  return (
    <>
      <Routes>
        <Route path='/' element={<AdviseSupport />} />
        <Route path='/cost_of_care' element={<CostOfCare />} />
        <Route path='/faq' element={<Faq/>} />
         {/*<Route path='/testimonal' element={<Testimonal/>} />
        <Route path='/' element={<About_us />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/areas-we-cover' element={<Areas/>} />
        <Route path='/testimonal' element={<Testimonal/>} /> */}
      </Routes>
    </>
  )
}
