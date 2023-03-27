import React, { useEffect } from 'react'
import AboutUs from './ABOUTUS/About_us';
import Areas from './AREAS_WE_COVER/Areas';
import Team from './Team/Team';
import Testimonal from './TESTIMONAL/Testimonal'
import { HashRouter as Router, Routes, Route } from "react-router-dom";




export default function TauntonWestSomerset4(props) {


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/areas-we-cover' element={<Areas />} />
        <Route path='/testimonal' element={<Testimonal />} />
      </Routes>
    </>

  )
}
