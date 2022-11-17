import React from 'react'
import IntroSection from '../components/IntroSection'
import Navigation from '../components/navigation/Navigation'
import AboutSection from '../components/AboutSection'
import { getIntroData } from '../data/introdata'
import QuickCounter from '../components/aboutPage/QuickCounter'
import Benefits from "../components/Benefits"
import Partners from '../components/Partners'
import '../css/about.css'
import Actionate from '../components/aboutPage/Actionate'
import TeamSection from '../components/aboutPage/TeamSection'
import Footer from "../components/Footer"

const About = () => {
    const intro_data = getIntroData()
  return (
    <>
          <div className="top-part">
                   <Navigation />
                   <IntroSection data={intro_data} identity="About" />
          </div>
          <div className="about-tweak">
                     <AboutSection />
                     <QuickCounter />
          </div>
          <Benefits />
          <div className="partners-about-tweak">
                   <Partners />
          </div>
          <Actionate />
          <TeamSection />

          <Footer />
    </>
  )
}

export default About