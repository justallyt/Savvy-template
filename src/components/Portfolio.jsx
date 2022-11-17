import React, { useState} from 'react'
import { useLocation } from 'react-router-dom'
import { getPortfolioV1 } from '../data/portfolio'

const Portfolio = () => {
const portfolio_v1 = getPortfolioV1()
const [selected, setSelected] = useState(null)
const locator = useLocation();
const toggle = (i) => {
         if(selected === i ){
                setSelected(null)
         }
         setSelected(i)
}
  return (
    <div className={locator.pathname === "/pages/project" ? "portfolio-section main" : "portfolio-section"}>
          <div className="inner-row">
                  <div className="portfolio-section-content">
                           <div className="section-intro">
                                    <div className="left-side" data-aos="fade-right">
                                             <div className="intro-hover">
                                                    <h2>Our Project</h2>
                                             </div>
                                             <h1>Project we have done</h1>
                                    </div>
                                    <div className="right-side" data-aos="fade-left">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam null</p>
                                            <div className="btns">
                                                    <a href="s">All Projects</a>
                                            </div>
                                    </div>
                           </div>

                           <div className="portfolio-content-row" data-aos="fade-up">
                                    { portfolio_v1.map((port, i) => (
                                            <div className="portfolio-moja" key={i} onMouseEnter={() => toggle(i)} onMouseLeave={() => setSelected(null)}>
                                                     <div className="portfolio-image-page">    
                                                             {locator.pathname === "/pages/project" ? 
                                                                  <img src={`../${port.portfolio_image}`} alt="" /> :
                                                                  <img src={port.portfolio_image} alt="" />
                                                               }
                                                     </div>
                                                     <div className="portfolio-banner">
                                                              <h2>{port.portfolio_title}</h2>
                                                             <div className={selected === i ? " portfolio-description active" : "portfolio-description"}>
                                                                     <div className="portfolio-description-inner">
                                                                            <p>{port.portfolio_description}</p>
                                                                              <a href={port.portfolio_link}>Read More<ion-icon name="arrow-forward-outline"></ion-icon> </a>
                                                                     </div>
                                                             </div>
                                                     </div>
                                            </div>
                                    ))}
                           </div>
                  </div>
          </div>
    </div>
  )
}

export default Portfolio