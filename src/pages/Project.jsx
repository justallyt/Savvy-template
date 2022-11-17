import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import Portfolio from "../components/Portfolio"
import Actionate from "../components/aboutPage/Actionate"
import Achievements from '../components/Achievements'
import Footer from "../components/Footer"
import { getIntroData } from '../data/introdata'

const Project = () => {
  const intro_data = getIntroData()
  return (
    <>
         <div className="top-part">
                   <Navigation />
                   <IntroSection data={intro_data} identity="Project" />
          </div>
          <Portfolio />
          <Actionate />
          <Achievements />
          <Footer />
    </>
  )
}

export default Project