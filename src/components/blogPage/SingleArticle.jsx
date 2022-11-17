import React from 'react'
import { useParams } from 'react-router-dom'
import { getBlogData } from '../../data/blogdata'
import IntroSection from '../IntroSection'
import Navigation from "../navigation/Navigation"
import BlogWriting from './BlogWriting'
import Boxesband from './Boxesband'
import Footer from "../Footer"
const SingleArticle = () => {
  const blogdata = getBlogData()
  const locator = useParams()

  return (
    <>
          <div className="top-part">
                  <Navigation />
                  <IntroSection  data={blogdata} identity={locator.id} />
          </div>
          <div className="blog-details-container">
                   <div className="inner-row">
                            <div className="blog-details-content">
                                     <BlogWriting data={blogdata} identity={locator.id} />
                            </div>
                           <div className="blog-navigation">
                                   <Boxesband />
                           </div>
                   </div>
          </div>
          <Footer />
    </>
  )
}

export default SingleArticle