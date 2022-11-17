import React from 'react'
import { getPosts } from '../../data/blogposts'
import Blogbox from './Blogbox'
import Boxesband from './Boxesband'


const BlogExcerpt = () => {
    const posts = getPosts()
  return (
    <div className='blog-excerpt-section'>
              <div className="inner-row">
                      <div className="blog-excerpt-content">
                               <div className="blog-excerpts">
                                      { posts.map((item, i) => <Blogbox key={i} data={item} />)}
                               </div>
                               <Boxesband />
                      </div>
              </div>
    </div>
  )
}

export default BlogExcerpt