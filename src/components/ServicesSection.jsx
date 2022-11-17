import React from 'react'
import { useLocation } from 'react-router-dom'
import { getServicesV1 } from '../data/services'
import { getServicesV2 } from '../data/services'

const ServicesSection = () => {
 const service_v1 = getServicesV1()
 const service_v2 = getServicesV2()
const locator = useLocation()
  return (
    <div className={ locator.pathname === "/" ? "services-section": "services-section white"}>
             <div className="inner-row">
                    <div className="services-section-content">
                             <div className="service-intro">
                                      <div className="intro-hover">
                                              <h2>Our Services</h2>
                                      </div>
                                      <h1>What service do we have for your business</h1>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa tenetur reiciendis excepturi, perferendis sint tempore iusto cum recusandae quidem?</p>
                             </div>
                             <div className="services-rows">
                                    <div className="service-row-one" data-aos="slide-right"  data-aos-offset="-100">
                                            { service_v1.map( service => (
                                                    <div className="service-moja" key={service.service_id}>
                                                           <div className="service-overlay"></div>
                                                            <div className="icon-section">
                                                                   <span><ion-icon name={service.service_icon}></ion-icon></span>
                                                            </div>
                                                             <div className="service-description">
                                                                    <h2>{service.service_title}</h2>
                                                                    <p>{service.service_description}</p>
                                                                    <a href={service.service_link}>Learn More <ion-icon name="arrow-forward-outline"></ion-icon></a>
                                                             </div>
                                                   </div>
                                            ))}
                                    </div>
                                    <div className="service-row-two" data-aos="slide-left" data-aos-offset="-200">
                                          { service_v2.map(service => (
                                                <div className="service-moja" key={service.service_id}>
                                                    <div className="service-overlay"></div>
                                                     <div className="icon-section">
                                                             <span><ion-icon name={service.service_icon}></ion-icon></span>
                                                     </div>
                                                         <div className="service-description">
                                                             <h2>{service.service_title}</h2>
                                                             <p>{service.service_description}</p>
                                                             <a href={service.service_link}>Learn More<ion-icon name="arrow-forward-outline"></ion-icon></a>
                                                         </div>
                                                </div>
                                          ))}
                                    </div>
                             </div>
                    </div>
             </div>

    </div>
  )
}

export default ServicesSection