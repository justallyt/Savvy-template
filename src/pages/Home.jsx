import React from 'react'
import AboutSection from '../components/AboutSection'
import Achievements from '../components/Achievements'
import Benefits from '../components/Benefits'
import BlogSection from '../components/BlogSection'
import Features from '../components/Features'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navigation from '../components/navigation/Navigation'
import Partners from '../components/Partners'
import Portfolio from '../components/Portfolio'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
          <div className="hero-section-container">
                   <Navigation />
                   <HeroSection />
          </div>
          <Features />
          <AboutSection />
          <ServicesSection />
          <Partners />
          <Benefits />
          <Portfolio />
          <Testimonials />
          <Achievements />
          <BlogSection />
          <Footer />
    </>
  )
}

export default Home