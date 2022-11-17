import React from 'react'
import { getPosts } from '../../data/blogposts'

const Recentposts = () => {
    const posts = getPosts()
  return (
    <div className='recent-post-container'>
            <h2>Recent Posts</h2>
           { posts.map(item => 
                  <div className="recent-post-moja">
                          <h3>{item.post_title}</h3>
                          <p><span><ion-icon name="time"></ion-icon></span>{item.post_date}</p>
                  </div>
            )}

    </div>
  )
}

export default Recentposts