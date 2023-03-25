import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AdviseSupport from './Advise_support/advise_support'

export default function TauntonWestSomerset3(props) {


  return (
    <>
      <Routes>
        <Route path='/' element={<AdviseSupport />} />
        {/* <Route path='/our-team' element={<Team />} />
        <Route path='/areas-we-cover' element={<Areas/>} />
        <Route path='/testimonal' element={<Testimonal/>} />
        <Route path='/' element={<About_us />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/areas-we-cover' element={<Areas/>} />
        <Route path='/testimonal' element={<Testimonal/>} /> */}
      </Routes>
    </>
  )
}
