import React from 'react'
import { getBenefits } from '../data/benefits'

const Benefits = () => {
  const benefits = getBenefits()

  return (
    <div className='benefits-section'>
          <div className="benefits-section-content">
                  <div className="benefits-description">
                         <div className="benefits-description-inner">
                                    <div className="intro-hover" data-aos="fade-up">
                                           <h2>Why Choose Us</h2>
                                   </div>

                                   <h1 data-aos="fade-up">The Best Decision For Your Business Strategy</h1>
                                   <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam nulla facilisi sed faucibus lacus consequat malesuada.</p>

                                   <div className="benefits-list" data-aos="fade-up">
                                            { benefits.map((benefit, i) => (
                                                    <div className="benefit-moja" key={i}>
                                                           <div className="icon-section">
                                                                  <span><ion-icon name={benefit.benefit_icon}></ion-icon></span>
                                                           </div>
                                                           <div className="benefit-description">
                                                                  <h2>{benefit.benefit_title}</h2>
                                                                  <h5>{benefit.benefit_description}</h5>
                                                           </div>
                                                   </div>
                                            ))}
                                   </div>
                         </div>
                  </div>

                  <div className="benefit-image" data-aos="slide-left"></div>
          </div>
    </div>
  )
}

export default Benefits