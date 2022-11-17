import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import Benefits from "../components/Benefits"
import { getIntroData } from '../data/introdata'
import Members from '../components/Members'
import TeamPortfolio from '../components/TeamPortfolio'
import Footer from "../components/Footer"

const Team = () => {
  const intro_data = getIntroData()
  return (
    <>
         <div className="top-part">
                   <Navigation />
                   <IntroSection data={intro_data} identity="Team" />
          </div>
          <Members />
          <Benefits />
          <TeamPortfolio />
          <Footer />
    </>
  )
}

export default Team