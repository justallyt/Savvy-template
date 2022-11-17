import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import { getIntroData } from '../data/introdata'
import Testimonials from "../components/Testimonials"
import Pricing2 from '../components/Pricing2'
import Faqs from '../components/faqs/Faqs'
import Footer from '../components/Footer'
const Pricing = () => {
    const intro_data = getIntroData()
  return (
     <>
           <div className="top-part">
                   <Navigation />
                   <IntroSection data={intro_data} identity="Pricing" />
          </div>
          <Pricing2 />
          <Testimonials />
          <Faqs />
          <Footer />
     </>
  )
}

export default Pricing