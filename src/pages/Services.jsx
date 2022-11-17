import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import { getIntroData } from '../data/introdata'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
const Services = () => {
  const intro_data = getIntroData()
  return (
    <>
         <div className="top-part">
                   <Navigation />
                   <IntroSection data={intro_data} identity="Services" />
          </div>
          <ServicesSection />
          <Testimonials />
          <Partners />
          <Pricing />
          <Footer />
    </>
  )
}

export default Services