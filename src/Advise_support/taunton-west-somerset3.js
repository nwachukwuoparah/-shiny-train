import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AdviseSupport from './Advise_support/advise_support'
import CostOfCare from './COST_OF_CARE/cost_of_care';
import Faq from './FAQs/faq';
import Age_well from './How_to age_well/how_to_age_well';
import Understanding from './Understanding-home-care/Understanding-home-care';
import Choosing from './Choosing-the-right-care/choosing-the-right-care';
import Nutrition from './Nutrition/Nutrition';
import Preventing from './Preventing_hospitalisation/preventing-hospitalisation';
import Preventing_falls from './preventing-falls-in-the-elderly/preventing-falls-in-the-elderly';
import Staying_safe from './staying-safe-at-home/staying-safe-at-home';
import Health_and_wellbeing from './health-and-wellbeing/health-and-wellbeing';
import Community_involvement from './community-involvement/community-involvement';
import Dementia_care from './dementia-care/Dementia-care';


export default function TauntonWestSomerset3(props) {

  return (
    <>
      <Routes>
        <Route path='/' element={<AdviseSupport />} />
        <Route path='/cost_of_care' element={<CostOfCare />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/age-well' element={<Age_well />} />
        <Route path='/understanding-home-care' element={<Understanding />} />
        <Route path='/choosing-the-right-care' element={<Choosing />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/preventing-hospitalisation' element={<Preventing />} />
        <Route path='/preventing-falls' element={<Preventing_falls/>} />
        <Route path='/staying_safe' element={<Staying_safe />} />
        <Route path='/health-and-wellbeing' element={<Health_and_wellbeing />} />
        <Route path='/community_involvement' element={<Community_involvement/>} />
        <Route path='/dementia-care-including-alzheimers-disease' element={<Dementia_care/>} />
      </Routes>
    </>
  )
}
