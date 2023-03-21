import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import OurExperience from './EXPERIENCE/ourExperience';


export default function TauntonWestSomerset1(props) {



  return (
    <>
      <Routes>
        <Route path='/' element={<OurExperience />} />
        {/* <Route path='/our-team' element={<Team />} />
        <Route path='/areas-we-cover' element={<Areas/>} />
        <Route path='/testimonal' element={<Testimonal/>} /> */}
      </Routes>
    </>

  )
}
