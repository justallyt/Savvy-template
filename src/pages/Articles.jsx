import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import { getIntroData } from '../data/introdata'
import BlogExcerpt from '../components/blogPage/BlogExcerpt'
import Footer from '../components/Footer'
import "../css/blog.css"
const Articles = () => {
  const intro_data = getIntroData()
  return (
        <>
               <div className="top-part">
                      <Navigation />
                      <IntroSection data={intro_data} identity="Blog" />
              </div>
              <BlogExcerpt />
              <Footer />
        </>
  )
}

export default Articles