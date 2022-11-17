import React, { useContext} from 'react'
import logo  from "../../assets/logo.png"
import logo2 from "../../assets/footer-logo.png"
import { NavLink, useLocation } from 'react-router-dom'
import { sidebarContext }  from '../../contexts/context'
import Dropdown from '../Dropdown'
import { getBlogDropDownLinks, getPageDropDownLinks } from '../../data/dropdown'

function Navbar() {
   const [menu_status, setMenuStatus] = useContext(sidebarContext)
   const locator = useLocation()
  
  const handleMobileMenu = () =>{
        setMenuStatus(!menu_status)
  }
  const pageDrops = getPageDropDownLinks()
  const blogDrops = getBlogDropDownLinks()
  return (
    <header>
           <div className="inner-row">
                  <div className="header-content">
                           <div className="logo-area">
                                  <a href="s">
                                        { locator.pathname === "/" ? <img src={logo} alt="" /> : <img src={logo2} alt="" /> }                              
                                  </a>
                           </div>
                           <nav>
                                   <ul className={locator.pathname === "/" ? "": "hybrid"}>
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

           <div className={locator.pathname === '/' ? "nav-trigger" : "nav-trigger white"} onClick={handleMobileMenu}>
                   <div className="nav-line"></div>
                   <div className="nav-line"></div>
                   <div className="nav-line"></div>
           </div>

           { /** Sidebar */}
           
    </header>
  )
}

export default Navbar