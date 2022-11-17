import React, { useContext } from 'react'
import logo  from "../../assets/logo.png"
import { sidebarContext } from '../../contexts/context'

const Sidebar = () => {
   const [menu_status, setMenuStatus] = useContext(sidebarContext)

   const handleMobileMenu = () =>{
         setMenuStatus(!menu_status)
   }
  return (
    <div className={menu_status ? "sidebar show" : "sidebar"}>
        <div className="sidebar-inner-content">
            <span onClick={handleMobileMenu} className="close-btn"><ion-icon name="close-outline"></ion-icon></span>
             <a href="s" className='mobile-logo'>
                   <img src={logo} alt="" />
             </a>
             <div className="sidebar-nav">
                      <ul>
                             <li className='active'><a href="s">Home</a></li>
                             <li><a href="s">About</a></li>
                             <li><a href="s">Services</a></li>
                             <li><a href="s">Pages</a></li>
                             <li><a href="s">Blog</a></li>
                             <li><a href="s">Contact</a></li>
                      </ul>
                      <div className="header-socials">
                             <a href="s"><span><ion-icon name="logo-facebook"></ion-icon></span></a>
                             <a href="s"><span><ion-icon name="logo-twitter"></ion-icon></span></a>
                             <a href="s"><span><ion-icon name="logo-instagram"></ion-icon></span></a>
                    </div>
             </div>
    </div>
 </div>
  )
}

export default Sidebar