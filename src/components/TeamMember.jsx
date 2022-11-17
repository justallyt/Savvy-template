import React from 'react'
import { useLocation } from 'react-router-dom'

const TeamMember = ({ data }) => {
 const locator = useLocation()
  return (
    <div className="expert-moja">
    <div className="employee-image">
            <img src={locator.pathname === "/pages/team" ? `../${data.image}`: data.image} alt="" />
    </div>
    <div className="expert-overlay">
            <div className="expert-overlay-inner">
                    <div className="expert-profile">
                            <h2>{data.name}</h2>
                             <p>{data.position}</p>
                             <div className="expert-social-links">
                                    <ul>
                                          <li><a href="s"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                          <li><a href="s"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                          <li><a href="s"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                                    </ul>
                             </div>
                    </div>
            </div>
    </div>
</div>
  )
}

export default TeamMember