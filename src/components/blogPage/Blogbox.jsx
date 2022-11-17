import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
const Blogbox = ({ data }) => {
  const locator  = useLocation()
  const image_link = locator.pathname === "/blog/articles" ? `../${data.post_image}` : null
  return (
    <div className='blogbox'>
             <div className="blogbox-image">
                      <img src={image_link} alt="" />
             </div>
             <h1>{data.post_title}.</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, vitae nulla facilisi nunc mattis. Amet, morbi viverra cursus urna quis pretium pellentesque. Eget lacus morbi ac, pretium amet sem penatibus at commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
             <NavLink to={`/blog/articles/${data.subtext}`}>Read More <span><ion-icon name="arrow-forward-outline"></ion-icon></span></NavLink>
    </div>
  )
}

export default Blogbox