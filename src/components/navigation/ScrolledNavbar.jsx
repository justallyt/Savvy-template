import React, { useState, useContext } from 'react'
import logo  from "../../assets/logo.png"
import { sidebarContext }  from '../../contexts/context'
import { NavLink } from 'react-router-dom'
import Dropdown from '../Dropdown'
import { getBlogDropDownLinks, getPageDropDownLinks } from '../../data/dropdown'

const ScrolledNavbar = () => {
    const [menu_status, setMenuStatus] = useContext(sidebarContext)
   const pageDrops = getPageDropDownLinks()
   const blogDrops = getBlogDropDownLinks()
     const handleMobileMenu = () =>{
           setMenuStatus(!menu_status)
     }
  const [scrollednav, setscrollednav] = useState(false)

  window.addEventListener("scroll", ()=>{
       if(window.scrollY >= 85){
            setscrollednav(true)
       }else{
            setscrollednav(false)
       }
  })
  return (
       <div className={scrollednav ? "scrolled-navbar show" : "scrolled-navbar"}>
            <header>
               <div className="inner-row">
                  <div className="header-content">
                           <div className="logo-area">
                                  <a href="s">
                                         <img src={logo} alt="" />
                                  </a>
                           </div>
                           <nav>
                                   <ul>
                                        <li><NavLink activeclassname="active" to="/" end>Home</NavLink></li>
                                        <li><NavLink activeclassname="active" to="/about">About</NavLink></li>
                                        <li><NavLink activeclassname="active" to="/services">Services</NavLink></li>
                                        <li><NavLink activeclassname="active" to="/pages" onClick={e => e.preventDefault()}>Pages <span><ion-icon name="chevron-down-outline"></ion-icon></span></NavLink>
                                                 <Dropdown data={pageDrops} page="pages" />
                                        </li>
                                        <li><NavLink activeclassname="active" to="/blog" onClick={e => e.preventDefault()}>Blog <span><ion-icon name="chevron-down-outline"></ion-icon></span></NavLink>
                                                 <Dropdown data={blogDrops} page="blog" />
                                        </li>
                                       <li><NavLink activeclassname="active" to="/contact">Contact</NavLink></li>
                                   </ul>
                                   <div className="header-socials">
                                            <a href="s"><span><ion-icon name="logo-facebook"></ion-icon></span></a>
                                            <a href="s"><span><ion-icon name="logo-twitter"></ion-icon></span></a>
                                            <a href="s"><span><ion-icon name="logo-instagram"></ion-icon></span></a>
                                   </div>
                           </nav>
                  </div>
           </div>
           <div className="nav-trigger" onClick={handleMobileMenu}>
                   <div className="nav-line"></div>
                   <div className="nav-line"></div>
                   <div className="nav-line"></div>
           </div>
        </header>
        
    </div>
  )
}

export default ScrolledNavbar