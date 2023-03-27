import React, { useEffect } from 'react'
import JoinOurTeam from './join-our-Team/join_our_Team'
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
        <Route path='/' element={<JoinOurTeam />} />
        {/*  <Route path='/our-team' element={<Team />} />
        <Route path='/areas-we-cover' element={<Areas/>} />
        <Route path='/testimonal' element={<Testimonal/>} /> */}
      </Routes>
    </>

  )
}
