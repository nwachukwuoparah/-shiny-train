import React, { useEffect } from 'react'
import JoinOurTeam from './join-our-Team/join_our_Team'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Working_Care from './Working_Care/Working_Care';
import Apply from './Apply/Apply';


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
        <Route path='/' element={<JoinOurTeam />} />
        <Route path='/working-care' element={<Working_Care />} />
        {/* <Route path='/areas-we-cover' element={<Areas/>} /> */}
        <Route path='/apply' element={<Apply/>} />
      </Routes>
    </>

  )
}
