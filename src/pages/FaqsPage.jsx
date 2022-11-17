import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import { getIntroData } from '../data/introdata'
import Faqs from '../components/faqs/Faqs'
import PaymentFaq from '../components/faqs/PaymentFaq'
import OtherFaqs from '../components/faqs/OtherFaqs'
import Actionate from "../components/aboutPage/Actionate"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"
const FaqsPage = () => {
 const intro_data = getIntroData();
  return (
    <>
           <div className="top-part">
                   <Navigation />
                   <IntroSection data={intro_data} identity="FAQ" />
          </div>
          <Faqs />
          <PaymentFaq />
          <OtherFaqs />
          <Actionate />
          <BlogSection />
          <Footer />
    </>
  )
}

export default FaqsPage