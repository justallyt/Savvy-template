import React from 'react'
import { useLocation } from 'react-router-dom'
import { getPosts } from '../data/blogposts'

const BlogSection = () => {
    const blogposts = getPosts()
    const locator = useLocation()
  return (
    <div className={locator.pathname === "/pages/faq" ? 'blog-section faqed' : 'blog-section'}>
            <div className="inner-row">
                     <div className="blog-section-content">
                             <div className="blog-intro">
                                       <div className="intro-hover" data-aos="fade-up">
                                               <h2>Blog & News</h2>
                                        </div>
                                        <h1>Latest Blog & News</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam nulla facilisi</p>
                             </div>
                              <div className="blog-post-container" data-aos="slide-right">
                                     { blogposts.map((post, i) => (
                                          <div className="post-moja" key={i}>
                                                   <div className="post-image">
                                                          <img src={`../${post.post_image}`} alt="" /> :
                                                                  <img src={post.post_image} alt="" />
                                                   </div>
                                                   <h2>{post.post_title}</h2>
                                                   <p>{post.post_desc}</p>
                                                   <a href="s">Read More <ion-icon name="arrow-forward-outline"></ion-icon></a>
                                          </div>
                                     )) }
                              </div>
                     </div>
            </div>
    </div>
  )
}

export default BlogSection