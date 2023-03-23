import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import OurExperience from './EXPERIENCE/ourExperience';
import CareWork from './PARTNERSHIPS/partnerships';
import OurCareProf from './OUR_CARE_PROF/Our_care_prof';
import Partnerships from './PARTNERSHIPS/partnerships';
export default function TauntonWestSomerset1(props) {



  return (
    <>
      <Routes>
        <Route path='/' element={<OurExperience />} />
        <Route path='/our-careWork' element={<CareWork />} />
        <Route path='/our_care_prof' element={<OurCareProf />} />
        <Route path='/partnerships' element={<Partnerships />} />
      </Routes>
    </>

  )
}
