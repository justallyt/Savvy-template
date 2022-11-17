import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Dropdown = ({ data, page }) => {
  const locator = useLocation()
  return (
    <div className="nav__dropdown active">
          <ul>
                { data.map(item => <li key={item.title}><NavLink className={locator.pathname === `/${page}/${item.link_text}` ? "link-active": ""} to={`/${page}/${item.link_text}`} >{item.title}</NavLink></li>)}
         </ul>
</div>
  )
}

export default Dropdown