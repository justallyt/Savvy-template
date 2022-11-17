import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import { getIntroData } from '../data/introdata'
import Footer from '../components/Footer'

const Page404 = () => {
    const intro_data = getIntroData();
  return (
    <>
           <div className="top-part tweaked">
                   <Navigation />
                   <IntroSection data={intro_data} identity="404-page-not-found" />
          </div>
          <Footer />
    </>
  )
}

export default Page404