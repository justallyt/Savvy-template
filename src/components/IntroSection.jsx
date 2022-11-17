import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import "../css/blog.css"
const IntroSection = ({ data, identity }) => {
  const real_data = data.filter(item => (item.subtext === identity))
  const locator = useLocation()
  const param = useParams()
return (
       <>
            {param.id === identity ? 
                   <div className="intro-section-container">
                           <div className="image-background">
                                  <img src={`../../${real_data[0].bg_image}`} alt="" />
                           </div>
                            <div className="background-overlay"></div>
                            <div className="single-blog-intro">
                                 <h1>{real_data[0].title}</h1>
                                 <div className="tabulator">
                                        <div className="author">
                                              <span><ion-icon name="person-circle-outline"></ion-icon></span>
                                              <p>{real_data[0].author}</p>
                                        </div>
                                        <div className="date">
                                                <span><ion-icon name="calendar-outline"></ion-icon></span>
                                                <p>{real_data[0].date}</p>
                                        </div>
                                        <div className="category">
                                               <span><ion-icon name="folder-open-outline"></ion-icon></span>
                                               <p>{real_data[0].category}</p>
                                        </div>
                                 </div>
                            </div>
                   </div>
            : 
        <div className='intro-section-container'>
              <div className="image-background">   
                      { locator.pathname === `/pages/${identity.toLowerCase()}` || locator.pathname === `/${identity.toLowerCase()}/articles` ? 
                           <img src={`../${real_data[0].image_bg}`} alt='' /> :
                           <img src={real_data[0].image_bg} alt="" /> 
                      }
              </div>
              <div className="background-overlay"></div>
              {locator.pathname === "/pages/404-page-not-found" ? 
                  <div className="intro-text">
                         <h2>404</h2>
                         <h1>{real_data[0].title}</h1>
                         <p>{real_data[0].description}</p>
                         <NavLink to="/">Back to Home page</NavLink>
                  </div>
              : 
                <div className="intro-text">
                       <h1 data-aos="fade-down">{real_data[0].title}</h1>
                        <h4 data-aos="fade-up">Home <span><ion-icon name="chevron-forward-outline"></ion-icon></span> {real_data[0].subtext}</h4>
                </div>
              
              }
             
        </div>
       }
  </>
  )
}

export default IntroSection